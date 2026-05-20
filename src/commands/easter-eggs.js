// ============================================
// EASTER EGG COMMANDS — Hidden fun stuff
// ============================================

import { printLine, printBlock, printProgressBar, wait } from '../terminal.js';
import { README_TEXT, GIT_LOG, LS_OUTPUT, USER } from '../data.js';
import { startMatrixRain } from '../effects.js';

export async function cmdWhoami() {
  await printLine("You're the person about to hire a great developer.", { className: 'line-success' });
  await printLine('(Trust the terminal. It knows things.)', { className: 'line-muted' });
}

export async function cmdCatReadme() {
  await printLine('# README.md', { className: 'line-accent' });
  await printLine('');
  const lines = README_TEXT.split('\n');
  for (const line of lines) {
    await printLine(line);
  }
}

export async function cmdSecrets() {
  await printLine('Secret Commands', { className: 'line-header' });
  await printLine('');
  await printLine('Shhh ...  you found the cheat sheet.', { className: 'line-muted' });
  await printLine('');

  await printLine('Hidden Commands', { className: 'line-section' });

  const hidden = [
    ['sudo hire adarsh', 'Fake contract with progress bar'],
    ['rm -rf doubts', 'Remove all your doubts'],
    ['/matrix', 'Matrix green rain'],
    ['/figma', 'Where I actually live'],
    ['/coffee', 'Design fuel status'],
    ['ls', 'Skills as Linux files'],
    ['cat readme.md', 'A hidden personal message'],
    ['ping adarsh', 'Am I available? Find out'],
    ['git log', 'Totally real commit history'],
    ['whoami', 'The terminal knows you'],
    ['exit', 'Try to leave. I dare you.'],
  ];

  for (const [cmd, desc] of hidden) {
    await printLine(
      `<span class="line-link" data-cmd="${cmd}">${cmd.padEnd(18)}</span> ${desc}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('Themes', { className: 'line-section' });

  const themes = [
    ['/dark', 'Default dark theme'],
    ['/light', 'Light mode (controversial)'],
    ['/retro', 'CRT green phosphor + scanlines'],
  ];

  for (const [cmd, desc] of themes) {
    await printLine(
      `<span class="line-link" data-cmd="${cmd}">${cmd.padEnd(18)}</span> ${desc}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('Secrets', { className: 'line-section' });

  const secrets = [
    ['/konami', 'Party mode with confetti', '/konami'],
    ['↑↑↓↓←→←→BA', 'Konami code on keyboard', '/konami'],
    ['/help x3', 'Type help 3 times in a row ...', '/help'],
    ['Idle 60s', 'Terminal gets impatient', ''],
  ];

  for (const [cmd, desc, runCmd] of secrets) {
    if (runCmd) {
      await printLine(
        `<span class="line-link" data-cmd="${runCmd}">${cmd.padEnd(18)}</span> ${desc}`,
        { isHTML: true }
      );
    } else {
      await printLine(
        `<span class="line-dim" style="font-weight:700">${cmd.padEnd(18)}</span> ${desc}`,
        { isHTML: true }
      );
    }
  }
}

export async function cmdMatrix() {
  await printLine('Entering the Matrix...', { className: 'line-success' });
  startMatrixRain();
}

export async function cmdSudoHire() {
  await printLine('Processing contract...', { className: 'line-muted' });
  await wait(300);
  await printProgressBar(1200);
  await wait(200);
  await printLine('');
  await printLine('[ok] Contract signed successfully!', { className: 'line-success' });
  await printLine(`Welcome aboard. ${USER.name} is now part of your team.`, { className: 'line-success' });
  await printLine('(This was a simulation. But it felt good, right?)', { className: 'line-muted' });
}

export async function cmdRmDoubt() {
  await printLine('<span class="line-cmd">$ rm -rf doubts/</span>', { isHTML: true });
  await wait(300);
  await printLine('Removing doubts/impostor-syndrome ... <span class="line-success">done</span>', { isHTML: true });
  await wait(200);
  await printLine('Removing doubts/too-young ... <span class="line-success">done</span>', { isHTML: true });
  await wait(200);
  await printLine('Removing doubts/too-academic ... <span class="line-success">done</span>', { isHTML: true });
  await wait(200);
  await printLine('Removing doubts/ai-overhype ... <span class="line-success">done</span>', { isHTML: true });
  await wait(200);
  await printLine('Removing doubts/does-he-ship ... <span class="line-success">done</span>', { isHTML: true });
  await wait(200);
  await printLine('<span class="line-accent">★ All doubts removed. Ready to build, research, and ship.</span>', { isHTML: true });
}

export async function cmdLs() {
  await printLine('<span class="line-cmd">$ ls</span>', { isHTML: true });
  await wait(200);
  const files = [
    { perm: 'drwxr-xr-x', name: 'rag-system/', accent: true },
    { perm: '-rw-r--r--', name: 'ml-pipeline.py', accent: true },
    { perm: '-rwxr-xr-x', name: 'cybersec-toolkit.sh', accent: true },
    { perm: '-rw-r--r--', name: 'resume.pdf', accent: false },
    { perm: '-rw-r--r--', name: 'coffee-dependency.lock', accent: false },
    { perm: '-rw-------', name: 'secret-sauce.enc', accent: false, danger: true },
    { perm: '-rw-r--r--', name: 'README.md', accent: false },
    { perm: '-rw-r--r--', name: 'ai-research.log', accent: true },
    { perm: '-rw-r--r--', name: 'pixel-perfection.so', accent: false },
    { perm: '-rw-r--r--', name: 'figma-mastery.cfg', accent: true },
  ];
  for (const file of files) {
    let nameClass = file.accent ? 'line-accent' : 'line-success';
    if (file.danger) nameClass = 'line-danger';
    const html = `<span class="line-dim">${file.perm}</span> <span class="${nameClass}" style="font-weight:700;">${file.name}</span>`;
    await printLine(html, { isHTML: true });
    await wait(80);
  }
}

export async function cmdPing() {
  await printLine(`<span class="line-cmd">$ ping adarsh</span>`, { isHTML: true });
  await wait(200);
  await printLine('PING adarsh.dev (127.0.0.1): 56 data bytes', { className: 'line-muted' });
  await wait(200);
  await printLine('64 bytes from Vellore: icmp_seq=0 ttl=64 time=0.1ms — Always online', { className: 'line-success' });
  await wait(200);
  await printLine('64 bytes from Vellore: icmp_seq=1 ttl=64 time=0.2ms — Building, learning, shipping', { className: 'line-success' });
  await wait(200);
  await printLine('64 bytes from Vellore: icmp_seq=2 ttl=64 time=0.1ms — ML/AI ready', { className: 'line-success' });
  await wait(200);
  await printLine('64 bytes from Vellore: icmp_seq=3 ttl=64 time=0.3ms — Will not ghost you', { className: 'line-success' });
  await wait(200);
  await printLine('--- adarsh.dev ping statistics ---', { className: 'line-muted' });
  await printLine('4 packets transmitted, 4 received, 0% packet loss', { className: 'line-muted' });
}

export async function cmdGitLog() {
  await printLine('<span class="line-cmd">$ git log</span>', { isHTML: true });
  await wait(200);
  const logs = [
    { hash: 'a1b2c3d', msg: 'Deployed College RAG System to production.', date: 'today' },
    { hash: 'e4f5g6h', msg: 'Patched ML pipeline for 99%+ accuracy.', date: 'yesterday' },
    { hash: 'i7j8k9l', msg: 'Refactored cybersecurity toolkit for zero-trust.', date: '2 days ago' },
    { hash: 'm0n1o2p', msg: 'Published research on quantum crop detection.', date: '3 days ago' },
    { hash: 'q3r4s5t', msg: 'Mentored juniors on open source contributions.', date: 'last week' },
    { hash: 'u6v7w8x', msg: 'Added dark mode. Refused to add light mode.', date: 'last month' },
  ];
  for (const entry of logs) {
    await printLine(`<span class="line-accent">commit ${entry.hash}</span> <span class="line-dim">(${entry.date})</span>`, { isHTML: true });
    await printLine(`<span class="line-success">    ${entry.msg}</span>`, { isHTML: true });
    await wait(120);
  }
}

export async function cmdExit() {
  await printLine('<span class="line-cmd">$ exit</span>', { isHTML: true });
  await wait(200);
  await printLine('<span style="color:#ff6f6f">There is no escape.</span>', { isHTML: true });
  await wait(200);
  await printLine('<span style="color:#7fffd4">But /contact is a way forward.</span>', { isHTML: true });
  await printLine('<span class="line-muted">(You\'re stuck here now. Might as well explore the codebase, or try /ls for a hint.)</span>', { isHTML: true });
  await wait(200);
  await printLine('<span class="line-system">[system] You\'ve run 3 commands. There are more hiding beneath the surface. /secrets knows more.</span>', { isHTML: true });
}

export async function cmdCoffee() {
  const cup = `
      ( (
       ) )
    ........
    |      |]
    \      /
     \____/
  `;
  await printLine('Design fuel level:', { className: 'line-header' });
  await printLine(cup, { className: 'line-accent' });
  const level = Math.floor(Math.random() * 60) + 40;
  const barHTML = `
    <div class="skill-row">
      <span class="skill-name">Caffeine Level</span>
      <div class="skill-bar"><div class="skill-fill c1" style="width: ${level}%"></div></div>
      <span class="skill-pct">${level}%</span>
    </div>`;
  await printLine(barHTML, { isHTML: true });
  await printLine(level > 70 ? 'Status: Caffeinated and pixel-pushing' : 'Status: Need refill...', {
    className: level > 70 ? 'line-success' : 'line-accent',
  });
  await printLine('Daily intake: Yes', { className: 'line-muted' });
}

export async function cmdFigma() {
  const figmaArt = `
  ┌───────────────────────────────┐
  │ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
  │ ▒▒░░░░░░░░░░░░░░░░░░░░░░▒▒ │
  │ ▒▒░░██████████████░░░░░░▒▒ │
  │ ▒▒░░██████████████░░░░░░▒▒ │
  │ ▒▒░░██████████████░░░░░░▒▒ │
  │ ▒▒░░░░░░░░░░░░░░░░░░░░░░▒▒ │
  │ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
  └───────────────────────────────┘
  `;
  await printLine(figmaArt, { className: 'line-accent' });
  await printLine('<span class="line-success">I live here. Send help.</span>', { isHTML: true });
  await printLine('Current tab count: ∞', { className: 'line-muted' });
  await printLine('Unsaved changes: always', { className: 'line-muted' });
}

export async function cmdKonami() {
  const { launchConfetti } = await import('../effects.js');
  await printLine('PARTY MODE ACTIVATED!', { className: 'line-success' });
  await printLine('Achievement unlocked: Found the Konami code', { className: 'line-accent' });
  launchConfetti();
}
