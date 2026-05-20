// ============================================
// BOOT SEQUENCE — Loading animation, then clear
// ============================================

import { printLine, printProgressBar, wait, scrollToBottom, clearOutput, waitForEnter } from './terminal.js';

export async function runBootSequence() {
  // Phase 1: Init lines with typewriter
  await printLine('Initializing portfolio system...', { typewriter: true, speed: 35 });
  await wait(350);

  await printLine('Loading engineering modules...', { typewriter: true, speed: 30 });
  await printProgressBar(900);
  await wait(260);

  await printLine('Mounting core libraries...', { typewriter: true, speed: 36 });
  await wait(400);

  await printProgressBar(900);
  await wait(260);

  await printLine('Resolving projects and publications...', { typewriter: true, speed: 30 });
  await wait(360);

  await printLine('Connecting to Adarsh core... ok', { className: 'line-success' });
  await wait(260);

  await printLine('ML/AI engines: operational', { className: 'line-success' });
  await wait(160);
  await printLine('Full stack modules: loaded', { className: 'line-success' });
  await wait(260);

  await printLine('', { isHTML: false });
  await printLine('adarsh.tripathi v1.0 — ready.', { className: 'line-accent', typewriter: true, speed: 20 });
  await printLine('Press Enter to continue...', { className: 'line-muted' });

  await waitForEnter();

  // Clear boot text before showing the landing
  const bootLines = document.querySelectorAll('.line');
  bootLines.forEach(line => line.classList.add('fade-out'));
  await wait(250);
  clearOutput();
}
