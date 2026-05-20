// ============================================
// LANDING PAGE — Welcome card builder
// ============================================

import { USER, BANNER, ASCII_PORTRAIT, CAPABILITIES, NAV_LINKS, PROJECTS, CERTIFICATES } from './data.js';

function normalizeAsciiBlock(block) {
  const lines = block.replace(/\r/g, '').split('\n');
  // remove empty leading/trailing lines
  while (lines.length && lines[0].trim() === '') lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
  if (!lines.length) return '';
  // compute minimum leading spaces across non-empty lines
  const leadingCounts = lines.filter(l => l.trim() !== '').map(l => l.match(/^\s*/)[0].length);
  const minLead = Math.min(...leadingCounts);
  return lines.map(l => l.slice(minLead)).join('\n');
}

export function buildLandingHTML() {
  const capRows = CAPABILITIES.map(c =>
    `<div class="cap-row"><span class="cap-label">${c.label}</span><span class="cap-value">${c.value}</span></div>`
  ).join('');

  const navLinks = NAV_LINKS.map(l =>
    `<span class="nav-link line-link" data-cmd="${l}">${l}</span>`
  ).join('');

  const banner = normalizeAsciiBlock(BANNER);
  const portrait = normalizeAsciiBlock(ASCII_PORTRAIT);
  return `<div class="welcome-header"><pre class="ascii-banner">${banner}</pre></div>
<div class="welcome-card">
  <div class="welcome-left">
    <div class="welcome-title">Welcome, visitor.</div>
    <pre class="welcome-ascii">${portrait}</pre>
    <div class="welcome-subtitle">${USER.title} • ${USER.location}</div>
    <div class="welcome-email">${USER.email}</div>
  </div>
  <div class="welcome-right">
    <div class="capabilities-section">
      <div class="line-header" style="margin-top:0">Capabilities</div>
      ${capRows}
    </div>
    <div class="nav-section">
      <div class="line-header" style="margin-top:0">Navigation</div>
      ${navLinks}
      <div class="line-dim" style="margin-top:8px">...  /help for all commands</div>
      <div class="line-dim">Try /themes to change the vibe</div>
    </div>
  </div>
</div>`;
}
