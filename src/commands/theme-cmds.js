// ============================================
// THEME COMMANDS — /dark, /light, /retro, /glass
// ============================================

import { printLine, printBlock } from '../terminal.js';
import { setTheme, getTheme, getThemeList, getThemeMessage } from '../themes.js';

export async function cmdThemeSwitch(name) {
  const success = setTheme(name);
  if (!success) {
    await printLine(`Unknown theme: ${name}. Try /themes to see options.`, { className: 'line-error' });
    return;
  }

  const msg = getThemeMessage(name);
  const lines = msg.split('\n');
  for (const line of lines) {
    await printLine(line, { className: 'line-success' });
  }
}

export async function cmdThemes() {
  const current = getTheme();

  await printLine('Available themes', { className: 'line-header' });
  await printLine('');

  const themes = [
    { name: 'dark', label: 'Dark mode (default)' },
    { name: 'light', label: 'Light mode' },
    { name: 'retro', label: 'Retro CRT mode' },
    { name: 'glass', label: 'Modern glass mode' },
  ];

  for (const t of themes) {
    const active = t.name === current ? '  ← active' : '';
    const cmd = `/${t.name}`;
    await printLine(
      `<span class="line-link" data-cmd="${cmd}">${cmd.padEnd(12)}</span> ${t.label}${active ? `  <span class="line-success">${active}</span>` : ''}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('Click a theme name or type the command to switch.', { className: 'line-dim' });
}
