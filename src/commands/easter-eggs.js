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
  await printLine('rm: removing doubts...', { className: 'line-muted' });
  await wait(400);
  await printLine('[ok] Doubts removed. Confidence installed.', { className: 'line-success' });
}

export async function cmdLs() {
  await printLine('total 42', { className: 'line-dim' });
  
  const files = [
    { perm: '-rwxr-xr-x', links: 1, owner: 'adarsh', group: 'staff', size: '1.2K', date: 'May 20 01:30', name: 'about.sh', cmd: '/about' },
    { perm: 'drwxr-xr-x', links: 4, owner: 'adarsh', group: 'staff', size: '128B', date: 'May 20 01:30', name: 'certs/', cmd: '/certs' },
    { perm: 'drwxr-xr-x', links: 8, owner: 'adarsh', group: 'staff', size: '256B', date: 'May 20 01:30', name: 'projects/', cmd: '/work' },
    { perm: 'drwxr-xr-x', links: 5, owner: 'adarsh', group: 'staff', size: '160B', date: 'May 20 01:30', name: 'research/', cmd: '/research' },
    { perm: '-rw-r--r--', links: 1, owner: 'adarsh', group: 'staff', size: '145K', date: 'May 20 01:30', name: 'resume.pdf', cmd: '/resume' },
    { perm: 'drwxr-xr-x', links: 6, owner: 'adarsh', group: 'staff', size: '192B', date: 'May 20 01:30', name: 'social/', cmd: '/social' },
    { perm: '-rw-r--r--', links: 1, owner: 'adarsh', group: 'staff', size: '942B', date: 'May 20 01:30', name: 'README.md', cmd: 'cat readme.md' },
  ];

  for (const file of files) {
    const isDir = file.name.endsWith('/');
    const nameClass = isDir ? 'line-accent' : 'line-success';
    const html = `<span class="line-dim">${file.perm}</span>   <span class="line-dim">${file.links}</span>   <span class="line-dim">${file.owner}</span>   <span class="line-dim">${file.group}</span>   <span class="line-dim" style="display:inline-block; text-align:right; min-width:50px;">${file.size}</span>   <span class="line-dim">${file.date}</span>   <span class="line-link ${nameClass}" data-cmd="${file.cmd}" style="font-weight:700;">${file.name}</span>`;
    await printLine(html, { isHTML: true });
    await wait(80);
  }
}

export async function cmdPing() {
  await printLine(`Pinging ${USER.handle}...`, { className: 'line-muted' });
  await wait(300);

  for (let i = 0; i < 4; i++) {
    const ms = Math.floor(Math.random() * 10) + 1;
    await printLine(`Reply from ${USER.handle}: bytes=32 time=${ms}ms TTL=128`);
    await wait(200);
  }

  await printLine('');
  await printLine('Status: Available for hire ✓', { className: 'line-success' });
}

export async function cmdGitLog() {
  for (const entry of GIT_LOG) {
    await printLine(
      `<span class="line-accent">${entry.hash}</span>  ${entry.msg}  <span class="line-dim">(${entry.date})</span>`,
      { isHTML: true }
    );
  }
}

export async function cmdExit() {
  await printLine('Closing connection... Sending SIGTERM', { className: 'line-muted' });
  await wait(400);
  window.dispatchEvent(new CustomEvent('kill-portfolio'));
}

export async function cmdCoffee() {
  const cup = `
    ( (
     ) )
  ._______.
  |       |]
  \\       /
   \`-----'`;

  await printLine('Coffee fuel status', { className: 'line-header' });
  await printLine(cup, { className: 'line-accent' });
  await printLine('');

  const level = Math.floor(Math.random() * 60) + 40;
  const barHTML = `
    <div class="skill-row">
      <span class="skill-name">Caffeine Level</span>
      <div class="skill-bar"><div class="skill-fill c1" style="width: ${level}%"></div></div>
      <span class="skill-pct">${level}%</span>
    </div>`;
  await printLine(barHTML, { isHTML: true });
  await printLine(level > 70 ? 'Status: MAXIMUM PRODUCTIVITY' : 'Status: Need refill...', {
    className: level > 70 ? 'line-success' : 'line-accent',
  });
}

export async function cmdFigma() {
  await printLine('Redirecting to where I actually live...', { className: 'line-muted' });
  await wait(500);
  await printLine('Just kidding. But Figma is pretty great.', { className: 'line-success' });
}

export async function cmdKonami() {
  const { launchConfetti } = await import('../effects.js');
  await printLine('PARTY MODE ACTIVATED!', { className: 'line-success' });
  await printLine('Achievement unlocked: Found the Konami code', { className: 'line-accent' });
  launchConfetti();
}
