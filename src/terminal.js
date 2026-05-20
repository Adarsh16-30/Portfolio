// ============================================
// TERMINAL ENGINE — Output, input, history
// ============================================

const output = () => document.getElementById('output');
const body = () => document.getElementById('terminal-body');
const input = () => document.getElementById('command-input');

let commandHistory = [];
let historyIndex = -1;
let allCommands = [];

const LOADING_MESSAGES = [
  'Querying', 'Resolving', 'Processing', 'Fetching data',
  'Loading', 'Compiling', 'Rendering',
];

export function registerCommands(cmds) {
  allCommands = cmds;
}

// --- Print a single line with optional typewriter effect ---
export function printLine(text, opts = {}) {
  const { className = '', isHTML = false, typewriter = false, speed = 20, onClick = null, instant = false } = opts;
  return new Promise((resolve) => {
    const div = document.createElement('div');
    div.classList.add('line');
    if (className) className.split(' ').forEach(c => div.classList.add(c));
    if (onClick) {
      div.style.cursor = 'pointer';
      div.addEventListener('click', onClick);
    }

    if (typewriter && text.length > 0) {
      // Typewriter: add element, then type characters one by one
      div.textContent = '';
      output().appendChild(div);
      let i = 0;
      const interval = setInterval(() => {
        div.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          scrollToBottom();
          resolve();
        }
      }, speed);
    } else {
      // Normal line: add to DOM, then wait a short real delay so the browser
      // paints this line before the next printLine call begins. Without this
      // delay all lines are added in the same microtask queue flush and the
      // slide animation is invisible.
      if (isHTML) {
        div.innerHTML = text;
      } else {
        div.textContent = text;
      }
      output().appendChild(div);
      scrollToBottom();

      // Empty lines and instant-flagged lines resolve immediately.
      // Content lines yield one browser tick (0ms setTimeout = macrotask) so
      // the browser can paint this line before the next one is added —
      // that's all we need for the slide animation to be visible per-line.
      if (instant || !text) {
        resolve();
      } else {
        setTimeout(resolve, 0);
      }
    }
  });
}

// --- Show a loading message with pulsing dots (vladburca.com style), then remove ---
export async function showLoading(customMsg) {
  const msg = customMsg || LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];
  const div = document.createElement('div');
  div.classList.add('line', 'loading-line', 'no-anim');
  div.innerHTML = `<span>${msg}</span><span class="dot-anim"></span><span class="dot-anim"></span><span class="dot-anim"></span>`;
  output().appendChild(div);
  scrollToBottom();

  await wait(1200 + Math.random() * 800); // Increased loading time slightly as requested

  div.classList.remove('no-anim');
  div.classList.add('fade-out');
  await wait(250);
  div.remove();
}

// --- Print multiple lines with staggered delays ---
export async function printBlock(lines, baseDelay = 260) {
  for (const line of lines) {
    if (typeof line === 'string') {
      await printLine(line);
      await wait(baseDelay);
    } else {
      await printLine(line.text || '', {
        className: line.className || '',
        isHTML: line.isHTML || false,
        typewriter: line.typewriter || false,
        speed: line.speed || 20,
        onClick: line.onClick || null,
      });
      await wait(line.delay ?? baseDelay);
    }
  }
}

// --- Show the user's command echoed in output ---
export function echoCommand(cmd) {
  const div = document.createElement('div');
  div.classList.add('line', 'line-command', 'no-anim');
  div.innerHTML = `<span class="prompt-echo">&gt;</span> ${escapeHTML(cmd)}`;
  output().appendChild(div);
  scrollToBottom();
}

// --- Clear all output (including the welcome card) ---
export function clearOutput() {
  output().innerHTML = '';
}

// --- Clear only command history — preserves the welcome card ---
export function clearHistory() {
  const lines = output().querySelectorAll('.line:not([data-persist])');
  lines.forEach(l => l.remove());
}

// --- Scroll to bottom ---
export function scrollToBottom() {
  const b = body();
  requestAnimationFrame(() => {
    b.scrollTop = b.scrollHeight;
  });
}

// --- Command history ---
export function addToHistory(cmd) {
  if (cmd.trim() && (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== cmd)) {
    commandHistory.push(cmd);
  }
  historyIndex = commandHistory.length;
}

export function navigateHistory(direction) {
  const inp = input();
  if (direction === 'up') {
    if (historyIndex > 0) {
      historyIndex--;
      inp.value = commandHistory[historyIndex];
    }
  } else {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      inp.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      inp.value = '';
    }
  }
}

// --- Tab autocomplete ---
export function autocomplete(partial) {
  if (!partial) return '';
  const lower = partial.toLowerCase();
  const matches = allCommands.filter(c => c.toLowerCase().startsWith(lower));
  if (matches.length === 1) return matches[0];
  if (matches.length > 1) {
    let prefix = matches[0];
    for (let i = 1; i < matches.length; i++) {
      while (!matches[i].toLowerCase().startsWith(prefix.toLowerCase())) {
        prefix = prefix.slice(0, -1);
      }
    }
    return prefix || partial;
  }
  return partial;
}

// --- Focus input ---
export function focusInput() {
  const inp = input();
  if (inp) inp.focus();
}

// --- Get/Set/Clear input ---
export function getInputValue() { return input()?.value || ''; }
export function setInputValue(val) { const inp = input(); if (inp) inp.value = val; }
export function clearInput() { const inp = input(); if (inp) inp.value = ''; }

// --- Animated progress bar ---
export function printProgressBar(duration = 800) {
  return new Promise((resolve) => {
    const div = document.createElement('div');
    div.classList.add('line', 'line-success', 'no-anim');
    output().appendChild(div);

    const total = 24;
    let filled = 0;
    const interval = setInterval(() => {
      filled++;
      const bar = '█'.repeat(filled) + '░'.repeat(total - filled);
      div.textContent = `  [${bar}] ${filled >= total ? 'done' : ''}`;
      scrollToBottom();
      if (filled >= total) {
        clearInterval(interval);
        resolve();
      }
    }, duration / total);
  });
}

// --- Utilities ---
export function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export function waitForEnter() {
  return new Promise((resolve) => {
    const handler = (e) => {
      if (e.key === 'Enter') {
        document.removeEventListener('keydown', handler);
        resolve();
      }
    };
    document.addEventListener('keydown', handler);
  });
}
