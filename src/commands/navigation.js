// ============================================
// NAVIGATION COMMANDS — /about, /work, /skills, etc.
// ============================================

import { printLine, printBlock, clearOutput, clearHistory, showLoading } from '../terminal.js';
import { buildLandingHTML } from '../landing.js';
import {
  USER, ABOUT_TEXT, SKILLS, PROJECTS, EDUCATION,
} from '../data.js';

function buttonHTML(url, label, extraClass = '') {
  return `<button class="action-button ${extraClass}" data-url="${url}">${label}</button>`;
}

export async function cmdCerts() {
  await showLoading('Checking certificates');
  const { CERTIFICATES } = await import('../data.js');

  await printLine('Certificates', { className: 'line-header' });
  await printLine('');

  if (!CERTIFICATES || CERTIFICATES.length === 0) {
    await printLine('No separate certificate links found in site data.', { className: 'line-dim' });
    await printLine('Use /resume to open the PDF and follow the hyperlinks inside to view certificates.', { className: 'line-accent' });
    return;
  }

  for (const c of CERTIFICATES) {
    await printLine(`<div class="content-card"><div class="content-title">${c.name}</div><div class="content-desc">${c.desc || ''}</div><div class="content-actions">${buttonHTML(c.url, 'Open certificate')}</div></div>`, { isHTML: true });
    await printLine('');
  }
}

export async function cmdEducation() {
  await showLoading('Loading education');

  await printLine('Education', { className: 'line-header' });
  await printLine('');

  for (const item of EDUCATION) {
    await printLine(`<div class="content-card"><div class="content-title">${item.degree}</div><div class="content-desc">${item.school}</div><div class="content-meta">${item.years} • ${item.note}</div></div>`, { isHTML: true });
    await printLine('');
  }
}

export async function cmdResearch() {
  await showLoading('Fetching research');

  const { RESEARCH_PUBLICATIONS } = await import('../data.js');
  await printLine('Research & Publications', { className: 'line-header' });
  await printLine('');

  for (const item of RESEARCH_PUBLICATIONS) {
    await printLine(`<div class="content-card"><div class="content-title">${item.title}</div><div class="content-meta">${item.venue}</div><div class="content-desc">${item.desc}</div><div class="content-tags">${item.focus}</div></div>`, { isHTML: true });
    await printLine('');
  }
}

export async function cmdAchievements() {
  await showLoading('Loading achievements');

  const { ACHIEVEMENTS } = await import('../data.js');
  await printLine('Achievements', { className: 'line-header' });
  await printLine('');

  for (const item of ACHIEVEMENTS) {
    await printLine(`<div class="content-card"><div class="content-title">${item.title}</div><div class="content-desc">${item.desc}</div></div>`, { isHTML: true });
    await printLine('');
  }
}

export async function cmdAbout() {
  await showLoading('Fetching profile');
  await printLine(ABOUT_TEXT.intro, { isHTML: true });
  await printLine('');
  await printLine(ABOUT_TEXT.whatIDo, { isHTML: true });
  await printLine('');
  await printLine(ABOUT_TEXT.education, { isHTML: true });
  await printLine(ABOUT_TEXT.skills, { isHTML: true });
  await printLine(ABOUT_TEXT.projects, { isHTML: true });
  await printLine(ABOUT_TEXT.research, { isHTML: true });
  await printLine(ABOUT_TEXT.hackathons, { isHTML: true });
  await printLine(ABOUT_TEXT.certs, { isHTML: true });
  await printLine(ABOUT_TEXT.experience, { isHTML: true });
  await printLine(ABOUT_TEXT.beyond, { isHTML: true });
}

export async function cmdWork() {
  await showLoading('Resolving projects');
  
  await printLine('Projects', { className: 'line-header' });
  await printLine('');

  for (const p of PROJECTS) {
    await printLine(`<div class="content-card"><div class="content-title">${p.name}</div><div class="content-desc">${p.desc}</div><div class="content-tags">${p.focus || ''}</div><div class="content-actions">${buttonHTML(p.url, 'Open GitHub')}</div></div>`, { isHTML: true });
    await printLine('');
  }

  await printLine('');
  await printLine('Type a project command or use the button to open the repo.', { className: 'line-dim' });
}

export async function cmdSkills() {
  await showLoading('Compiling skills');
  
  await printLine('Skills & tools', { className: 'line-header' });
  await printLine('');

  for (const skill of SKILLS) {
    const barHTML = `
      <div class="skill-row">
        <span class="skill-name">${skill.name}</span>
        <div class="skill-bar"><div class="skill-fill ${skill.color}" style="width: ${skill.pct}%"></div></div>
        <span class="skill-pct">${skill.pct}%</span>
      </div>`;
    await printLine(barHTML, { isHTML: true });
  }

  await printLine('');
  await printLine('TOOLS', { className: 'line-section' });
  await printLine('VS Code • Figma • Git • Docker • AWS • Vercel • PostgreSQL • Redis • Linux');
}

export async function cmdContact() {
  await showLoading('Resolving contact');
  
  await printLine('Get in Touch', { className: 'line-header' });
  await printLine('');
  await printLine(`  ${USER.email}`, { className: 'line-accent' });
  await printLine(`  ${USER.phone}`, { className: 'line-success' });
  await printLine(`  ${USER.location}`, { className: 'line-error' });
  await printLine(`  ${USER.portfolio} – my portfolio`, { className: 'line-accent' });
  await printLine('');
  await printLine('Open to: full-stack roles, ML/AI internships, open-source collaboration, freelance projects & consulting.', { className: 'line-primary' });
  await printLine("Let's build something that matters.", { className: 'line-success' });
  await printLine('');
  await printLine('→ /social for all my profiles', { className: 'line-dim' });
  await printLine('// or just: sudo hire adarsh', { className: 'line-dim' });
}

export async function cmdClear() {
  clearHistory();
}

export async function cmdPortfolio() {
  clearOutput();
  await printLine(buildLandingHTML(), { isHTML: true });
}

export async function cmdProject(name) {
  const project = PROJECTS.find(p => p.cmd === name);
  if (!project) {
    await printLine(`Project not found: ${name}. Try /work to see all projects.`, { className: 'line-error' });
    return;
  }

  await showLoading('Loading project');

  const html = `<div class="content-card">
    <div class="content-title">${project.name}</div>
    <div class="content-desc">${project.desc}</div>
    <div class="content-meta">YEAR</div>
    <div class="content-desc">${project.year}</div>
    <div class="content-meta">ROLE</div>
    <div class="content-desc">Builder, owner, and problem solver</div>
    <div class="content-meta">STACK</div>
    <div class="content-desc">${project.focus || 'React • Node.js • TypeScript • PostgreSQL • Docker'}</div>
    <div class="content-meta">METRICS</div>
    <div class="content-desc">${project.metrics || 'N/A'}</div>
    <div class="content-meta">HIGHLIGHTS</div>
    <div class="content-desc">• Designed to solve a real workflow or technical problem<br>• Built with production-minded architecture<br>• Focused on measurable utility and maintainability</div>
    ${project.url ? `<div class="content-actions">${buttonHTML(project.url, 'Open GitHub')}</div>` : ''}
  </div>`;

  await printLine(html, { isHTML: true });
  await printLine('');
  await printLine('→ /work to see all projects', { className: 'line-dim' });
}

export async function cmdCertDetail(name) {
  const { CERTIFICATES } = await import('../data.js');
  const cert = CERTIFICATES.find(c => c.cmd === name);
  if (!cert) {
    await printLine(`Certificate not found: ${name}. Try /certs to see all.`, { className: 'line-error' });
    return;
  }

  await showLoading('Loading certificate');

  const html = `<div class="content-card">
    <div class="content-title">${cert.name}</div>
    <div class="content-desc">${cert.desc}</div>
    <div class="content-meta">ISSUER</div>
    <div class="content-desc">${cert.issuer || 'N/A'}</div>
    <div class="content-meta">SKILLS COVERED</div>
    <div class="content-desc">${cert.skills || cert.desc}</div>
    <div class="content-meta">STATUS</div>
    <div class="content-desc">✓ Completed</div>
    <div class="content-actions">${buttonHTML(cert.url, 'View Certificate')}</div>
  </div>`;

  await printLine(html, { isHTML: true });
  await printLine('');
  await printLine('→ /certs to see all certificates', { className: 'line-dim' });
}

export async function cmdResearchDetail(name) {
  const { RESEARCH_PUBLICATIONS } = await import('../data.js');
  const item = RESEARCH_PUBLICATIONS.find(r => r.cmd === name);
  if (!item) {
    await printLine(`Research not found: ${name}. Try /research to see all.`, { className: 'line-error' });
    return;
  }

  await showLoading('Loading research');

  const html = `<div class="content-card">
    <div class="content-title">${item.title}</div>
    <div class="content-meta">VENUE</div>
    <div class="content-desc">${item.venue}</div>
    <div class="content-meta">ABSTRACT</div>
    <div class="content-desc">${item.desc}</div>
    <div class="content-meta">METHODOLOGY</div>
    <div class="content-desc">${item.methodology || item.focus}</div>
    <div class="content-meta">FOCUS AREAS</div>
    <div class="content-tags">${item.focus}</div>
    <div class="content-meta">STATUS</div>
    <div class="content-desc">${item.status || 'In progress'}</div>
  </div>`;

  await printLine(html, { isHTML: true });
  await printLine('');
  await printLine('→ /research to see all publications', { className: 'line-dim' });
}
