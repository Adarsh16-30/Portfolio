// ============================================
// THEME MANAGER — Switch between 4 themes
// ============================================

const THEMES = ['dark', 'light', 'retro', 'glass'];

export function setTheme(name) {
  if (!THEMES.includes(name)) return false;
  
  // Remove all theme classes
  THEMES.forEach(t => document.body.classList.remove(`theme-${t}`));
  
  // Apply new theme (dark has no class — it's the default)
  if (name !== 'dark') {
    document.body.classList.add(`theme-${name}`);
  }
  
  // Background is gradient-only now (no image swapping)
  
  // Update window controls for retro theme (System 7 style: ×  —  □)
  const btnClose = document.getElementById('btn-close');
  const btnMin = document.getElementById('btn-minimize');
  const btnMax = document.getElementById('btn-maximize');
  
  if (name === 'retro') {
    btnClose.textContent = '×';
    btnMin.textContent = '—';
    btnMax.textContent = '□';
  } else {
    btnClose.textContent = '';
    btnMin.textContent = '';
    btnMax.textContent = '';
  }
  
  // Scanlines for retro
  const scanlines = document.querySelector('.scanlines');
  if (scanlines) {
    scanlines.classList.toggle('active', name === 'retro');
  }
  
  // Save preference
  localStorage.setItem('terminal-theme', name);
  return true;
}

export function getTheme() {
  return localStorage.getItem('terminal-theme') || 'dark';
}

export function initTheme() {
  const saved = getTheme();
  setTheme(saved);
}

export function getThemeList() {
  return THEMES;
}

export function getThemeMessage(name) {
  const messages = {
    dark: 'Dark mode activated. Back to the shadows.',
    light: 'Light mode activated. My eyes... but okay.',
    retro: 'CRT mode engaged. Welcome to 1983.\nScanlines: ON | Phosphor: GREEN | Nostalgia: MAX',
    glass: 'Glass mode activated. Transparency at its finest.',
  };
  return messages[name] || '';
}
