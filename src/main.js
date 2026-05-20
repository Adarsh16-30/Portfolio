// ============================================
// MAIN — App entry point, wires everything
// ============================================

import './style.css';
import { initTheme } from './themes.js';
import { runBootSequence } from './boot.js';
import { buildLandingHTML } from './landing.js';
import { executeCommand, getAllCommandNames, getCommandSuggestionItems } from './commands/index.js';
import { launchConfetti } from './effects.js';
import { IDLE_MESSAGES } from './data.js';
import {
  printLine, echoCommand, clearInput, focusInput,
  addToHistory, navigateHistory, autocomplete,
  registerCommands, scrollToBottom, clearHistory,
} from './terminal.js';

// --- State ---
let isBooted = false;
let isProcessing = false;
let isKilled = false;
let isMinimized = false;
let isMaximized = false;
let idleTimer = null;
let idleMessageIndex = 0;
let commandCount = 0;
let suggestionContainer = null;

// --- Initialize ---
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  registerCommands(getAllCommandNames());
  setupInputListeners();
  setupWindowButtons();
  ensureSuggestionContainer();

  // Run boot sequence (which clears itself), then show landing
  await runBootSequence();

  // Expand terminal after boot
  document.getElementById('terminal').classList.remove('booting');
  
  // Show landing after a brief delay to let terminal expand
  await new Promise(r => setTimeout(r, 450));
  
  await showLanding();
  isBooted = true;
  focusInput();
  resetIdleTimer();
});

// --- Show landing page ---
async function showLanding() {
  await printLine(buildLandingHTML(), { isHTML: true });
  // Mark the welcome card so /clear never removes it
  const landingLine = document.querySelector('#output .line:last-child');
  if (landingLine) landingLine.dataset.persist = 'true';
  setupClickableCommands();

  const terminalBody = document.getElementById('terminal-body');
  await new Promise(requestAnimationFrame);
  await new Promise(requestAnimationFrame);
  if (terminalBody) terminalBody.scrollTop = 0;
  const output = document.getElementById('output');
  if (output) output.scrollTop = 0;

  // One initial message right after landing
  await printLine('');
  await printLine('Still there? Try /work to see what I\'ve built ...', { className: 'line-muted' });
}

let helpCount = 0;

function setupInputListeners() {
  const input = document.getElementById('command-input');

  input.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isProcessing) return;

      const value = input.value.trim();
      if (!value) return;

      if (value.toLowerCase() === '/help') {
        helpCount++;
      } else {
        helpCount = 0;
      }

      isProcessing = true;
      clearInput();
      renderSuggestions('');
      echoCommand(value);
      addToHistory(value);
      commandCount++;

      await executeCommand(value);
      setupClickableCommands();

      if (helpCount === 3) {
        helpCount = 0;
        await printLine('');
        await printLine('Achievement unlocked: Help desk manager', { className: 'line-success' });
        await printLine('You really want help, don\'t you? Here is the absolute cheat sheet of hidden commands:', { className: 'line-accent' });
        await printLine('');
        await executeCommand('/secrets');
      }

      if (commandCount === 3) {
        await printLine('');
        await printLine(
          `[system] You've run ${commandCount} commands. There are more hiding beneath the surface.`,
          { className: 'line-muted' }
        );
      }

      isProcessing = false;
      focusInput();
      resetIdleTimer();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory('down');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const result = autocomplete(input.value);
      if (result) input.value = result;
    }
  });

  input.addEventListener('input', () => {
    renderSuggestions(input.value);
  });

  // Click anywhere in terminal body to focus input
  document.getElementById('terminal').addEventListener('click', (e) => {
    if (e.target.closest('.traffic-lights')) return;
    if (e.target.closest('.line-link')) return;
    if (e.target.closest('.action-button')) return;
    if (e.target.closest('.social-row')) return;
    if (e.target.closest('.suggestions')) return;
    if (e.target.closest('a')) return;
    if (e.target.closest('button')) return;
    focusInput();
  });
}

function ensureSuggestionContainer() {
  if (suggestionContainer) return suggestionContainer;
  suggestionContainer = document.createElement('div');
  suggestionContainer.className = 'suggestions';
  suggestionContainer.id = 'command-suggestions';
  const terminal = document.getElementById('terminal');
  terminal.appendChild(suggestionContainer);
  return suggestionContainer;
}

function renderSuggestions(value) {
  const container = ensureSuggestionContainer();
  const query = (value || '').trim().toLowerCase();
  if (!query || !query.startsWith('/')) {
    container.classList.remove('visible');
    container.innerHTML = '';
    return;
  }

  const matches = getCommandSuggestionItems()
    .filter(item => item.cmd.toLowerCase().startsWith(query))
    .slice(0, 8);

  if (!matches.length) {
    container.classList.remove('visible');
    container.innerHTML = '';
    return;
  }

  container.innerHTML = matches
    .map(item => `
      <button class="suggestion-row" type="button" data-cmd="${item.cmd}">
        <span class="suggestion-cmd">${item.cmd}</span>
        <span class="suggestion-desc">${item.desc}</span>
      </button>`)
    .join('');
  container.classList.add('visible');

  container.querySelectorAll('.suggestion-row').forEach(button => {
    if (button.dataset.bound) return;
    button.dataset.bound = 'true';
    button.addEventListener('click', () => {
      const input = document.getElementById('command-input');
      input.value = button.dataset.cmd || '';
      renderSuggestions('');
      focusInput();
    });
  });
}

// --- Clickable command links ---
function setupClickableCommands() {
  document.querySelectorAll('.line-link[data-cmd], .nav-link[data-cmd]').forEach(el => {
    if (el.dataset.bound) return;
    el.dataset.bound = 'true';
    el.addEventListener('click', async (e) => {
      e.preventDefault();
      if (isProcessing) return;

      const cmd = el.dataset.cmd;
      if (!cmd) return;

      isProcessing = true;
      echoCommand(cmd);
      addToHistory(cmd);
      commandCount++;

      await executeCommand(cmd);
      setupClickableCommands();

      isProcessing = false;
      focusInput();
      resetIdleTimer();
    });
  });

  // Also bind elements that provide a URL (e.g., certificate links)
  document.querySelectorAll('.line-link[data-url]').forEach(el => {
    if (el.dataset.urlBound) return;
    el.dataset.urlBound = 'true';
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const url = el.dataset.url;
      if (!url) return;
      window.open(url, '_blank');
    });
  });

  document.querySelectorAll('.action-button[data-url]').forEach(el => {
    if (el.dataset.urlBound) return;
    el.dataset.urlBound = 'true';
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const url = el.dataset.url;
      if (!url) return;
      window.open(url, '_blank', 'noopener');
    });
  });
}

// --- Window buttons (red/yellow/green) ---
function setupWindowButtons() {
  const terminal = document.getElementById('terminal');

  // RED — Kill process
  document.getElementById('btn-close').addEventListener('click', () => {
    if (isKilled) return;
    isKilled = true;
    terminal.classList.add('killed');
    showKillScreen();
  });

  // YELLOW — Toggle minimize (collapse body, reveal wallpaper with card)
  document.getElementById('btn-minimize').addEventListener('click', () => {
    if (isMinimized) {
      restoreFromMinimize();
    } else {
      minimizeTerminal();
    }
  });

  // GREEN — Toggle maximize
  document.getElementById('btn-maximize').addEventListener('click', () => {
    isMaximized = !isMaximized;
    terminal.classList.toggle('maximized', isMaximized);
  });
}

function minimizeTerminal() {
  isMinimized = true;
  const terminal = document.getElementById('terminal');
  terminal.classList.add('minimized');
  // Un-blur background to reveal wallpaper (with profile card + dock baked in)
  document.body.classList.add('bg-sharp');
}

function restoreFromMinimize() {
  isMinimized = false;
  const terminal = document.getElementById('terminal');
  terminal.classList.remove('minimized');
  // Re-blur background
  document.body.classList.remove('bg-sharp');
  focusInput();
}

// --- Kill screen ---
function showKillScreen() {
  let ks = document.querySelector('.kill-screen');
  if (!ks) {
    ks = document.createElement('div');
    ks.className = 'kill-screen';
    ks.innerHTML = `
      <div class="kill-title">kill -9 portfolio</div>
      <div class="kill-message">
        Process terminated.<br>
        But engineering never really stops.
      </div>
      <div class="kill-links">
        <a href="${USER.linkedin}" target="_blank" rel="noopener" class="kill-link">LinkedIn</a>
        <a href="${USER.github}" target="_blank" rel="noopener" class="kill-link">GitHub</a>
        <a href="mailto:${USER.email}" class="kill-link">Email</a>
      </div>
      <button class="kill-btn" id="reopen-btn">Reopen terminal</button>
    `;
    document.getElementById('app').appendChild(ks);

    document.getElementById('reopen-btn').addEventListener('click', () => {
      isKilled = false;
      ks.classList.remove('active');
      document.getElementById('terminal').classList.remove('killed');
      document.getElementById('title-text').textContent = 'adarsh@portfolio ~ /portfolio';
      focusInput();
    });
  }

  document.getElementById('title-text').textContent = 'adarsh@portfolio ~ /exit';
  requestAnimationFrame(() => ks.classList.add('active'));
}

// --- Idle timer ---
function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(async () => {
    if (!isBooted || isKilled || isMinimized) return;

    const msg = IDLE_MESSAGES[idleMessageIndex % IDLE_MESSAGES.length];
    idleMessageIndex++;
    await printLine('');
    await printLine(msg, { className: 'line-muted' });
    scrollToBottom();
    resetIdleTimer();
  }, 45000);
}

// --- Konami code detector ---
const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konamiSequence[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiSequence.length) {
      konamiIndex = 0;
      printLine('');
      printLine('KONAMI CODE ACTIVATED!', { className: 'line-success' });
      printLine('Achievement unlocked: Old school gamer', { className: 'line-accent' });
      launchConfetti();
    }
  } else {
    konamiIndex = 0;
  }
});

window.addEventListener('kill-portfolio', () => {
  if (isKilled) return;
  isKilled = true;
  document.getElementById('terminal').classList.add('killed');
  showKillScreen();
});
