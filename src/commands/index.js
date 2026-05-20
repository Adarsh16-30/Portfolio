// ============================================
// COMMAND REGISTRY — Routes input to handlers
// ============================================

import { printLine, showLoading } from '../terminal.js';
import { PROJECTS, CERTIFICATES, RESEARCH_PUBLICATIONS, ACHIEVEMENTS } from '../data.js';
import {
  cmdAbout, cmdWork, cmdSkills,
  cmdContact, cmdClear, cmdPortfolio, cmdProject,
  cmdCerts, cmdEducation, cmdResearch, cmdAchievements,
  cmdCertDetail, cmdResearchDetail,
} from './navigation.js';
import {
  cmdLinkedin, cmdGithub, cmdPhone,
  cmdEmail, cmdLocation, cmdPrivacy, cmdSocial,
} from './info.js';
import { cmdResume, cmdDownloadResume } from './info.js';
import { cmdThemeSwitch, cmdThemes } from './theme-cmds.js';
import {
  cmdWhoami, cmdCatReadme, cmdSecrets, cmdMatrix, cmdSudoHire,
  cmdRmDoubt, cmdLs, cmdPing, cmdGitLog, cmdExit, cmdCoffee,
  cmdFigma, cmdKonami,
} from './easter-eggs.js';

// All registered command names (for autocomplete)
export function getAllCommandNames() {
  const base = [
    '/help', '/about', '/education', '/work', '/skills',
    '/research', '/achievements', '/certs', '/contact', '/social', '/clear', '/portfolio',
    '/resume', '/download',
    '/linkedin', '/github', '/phone', '/email',
    '/location', '/privacy',
    '/dark', '/light', '/retro', '/glass', '/themes',
    '/secrets', '/matrix', '/konami', '/coffee', '/figma',
    'whoami', 'cat readme.md', 'sudo hire', 'rm -rf doubts',
    'ls', 'ping', 'git log', 'exit',
  ];

  // Add project commands
  for (const p of PROJECTS) {
    base.push(`/${p.cmd}`);
  }

  // Add certificate commands
  for (const c of CERTIFICATES) {
    base.push(`/${c.cmd}`);
  }

  // Add research commands
  for (const r of RESEARCH_PUBLICATIONS) {
    base.push(`/${r.cmd}`);
  }

  return base;
}

export function getCommandSuggestionItems() {
  return [
    { cmd: '/help', desc: 'List all available commands' },
    { cmd: '/about', desc: 'Who I am' },
    { cmd: '/education', desc: 'Education' },
    { cmd: '/work', desc: 'Projects I\'ve built' },
    { cmd: '/skills', desc: 'Tech stack & proficiency' },
    { cmd: '/research', desc: 'Research & publications' },
    { cmd: '/achievements', desc: 'Hackathons & competitions' },
    { cmd: '/certs', desc: 'Certificates' },
    { cmd: '/social', desc: 'All social profiles' },
    { cmd: '/contact', desc: 'How to reach me' },
    { cmd: '/clear', desc: 'Clear the terminal' },
    { cmd: '/linkedin', desc: 'LinkedIn profile' },
    { cmd: '/github', desc: 'GitHub profile' },
    { cmd: '/email', desc: 'Email address' },
    { cmd: '/phone', desc: 'Phone number' },
    { cmd: '/location', desc: 'Where I\'m based' },
    { cmd: '/privacy', desc: 'Privacy policy & cookies' },
    { cmd: '/resume', desc: 'View resume (PDF)' },
    { cmd: '/download', desc: 'Download resume (PDF)' },
    { cmd: '/themes', desc: 'Browse all themes' },
    { cmd: '/dark', desc: 'Switch to Dark theme' },
    { cmd: '/light', desc: 'Switch to Light theme' },
    { cmd: '/retro', desc: 'Switch to Retro CRT theme' },
    { cmd: '/glass', desc: 'Switch to Glassmorphism theme' },
  ];
}

// Route a command string to its handler
export async function executeCommand(raw) {
  const input = raw.trim().toLowerCase();

  if (!input) return;

  // Exact matches first
  switch (input) {
    case '/help':       return cmdHelp();
    case '/about':
    case '/me':         return cmdAbout();
    case '/education':  return cmdEducation();
    case '/work':
    case '/projects':   return cmdWork();
    case '/skills':     return cmdSkills();
    case '/contact':
    case '/hire':       return cmdContact();
    case '/clear':      return cmdClear();
    case '/portfolio':  return cmdPortfolio();
    case '/research':   return cmdResearch();
    case '/achievements': return cmdAchievements();
    case '/social':     return cmdSocial();

    // Quick info
    case '/linkedin':   return cmdLinkedin();
    case '/github':     return cmdGithub();
    case '/phone':
    case '/call':       return cmdPhone();
    case '/email':
    case '/mail':       return cmdEmail();
    case '/location':   return cmdLocation();
    case '/privacy':    return cmdPrivacy();
    case '/resume':     return cmdResume();
    case '/download':
    case '/download-resume': return cmdDownloadResume();
    case '/certs':      return cmdCerts();

    // Themes
    case '/dark':       return cmdThemeSwitch('dark');
    case '/light':      return cmdThemeSwitch('light');
    case '/retro':      return cmdThemeSwitch('retro');
    case '/glass':      return cmdThemeSwitch('glass');
    case '/themes':     return cmdThemes();

    // Easter eggs
    case 'whoami':      return cmdWhoami();
    case 'cat readme.md': return cmdCatReadme();
    case '/secrets':    return cmdSecrets();
    case '/matrix':     return cmdMatrix();
    case 'konami':
    case '/konami':
    case '↑↑↓↓←→←→ba':
    case '↑↑↓↓←→←→BA':   return cmdKonami();
    case '/coffee':     return cmdCoffee();
    case '/figma':      return cmdFigma();
    case 'exit':
    case '/exit':
    case 'quit':        return cmdExit();
    case 'ls':
    case 'ls -la':
    case 'dir':         return cmdLs();
    case 'git log':     return cmdGitLog();
    default: break;
  }

  // Prefix matches
  if (input.startsWith('sudo hire')) return cmdSudoHire();
  if (input.startsWith('rm -rf')) return cmdRmDoubt();
  if (input.startsWith('ping')) return cmdPing();

  // Project commands
  const projectCmd = input.startsWith('/') ? input.slice(1) : input;
  const project = PROJECTS.find(p => p.cmd === projectCmd);
  if (project) return cmdProject(project.cmd);

  // Certificate commands
  const cert = CERTIFICATES.find(c => c.cmd === projectCmd);
  if (cert) return cmdCertDetail(cert.cmd);

  // Research commands
  const research = RESEARCH_PUBLICATIONS.find(r => r.cmd === projectCmd);
  if (research) return cmdResearchDetail(research.cmd);

  // Unknown command
  await printLine(`Command not found: ${raw.trim()}. Try /help`, { className: 'line-error' });
}

// --- Help command ---
async function cmdHelp() {
  await showLoading('Processing');
  await printLine('NAVIGATION', { className: 'line-section' });

  const navCmds = [
    ['/about', 'Who I am'],
    ['/education', 'Education'],
    ['/work', 'Projects I\'ve built'],
    ['/skills', 'Tech stack & proficiency'],
    ['/research', 'Research & publications'],
    ['/achievements', 'Hackathons & competitions'],
    ['/certs', 'Certificates'],
    ['/social', 'All social profiles'],
    ['/contact', 'How to reach me'],
    ['/clear', 'Clear the terminal'],
  ];

  for (const [cmd, desc] of navCmds) {
    await printLine(
      `<span class="line-link" data-cmd="${cmd}">${cmd.padEnd(18)}</span> ${desc}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('QUICK INFO', { className: 'line-section' });

  const infoCmds = [
    ['/linkedin', 'LinkedIn profile'],
    ['/github', 'GitHub profile'],
    ['/phone', 'Phone number'],
    ['/email', 'Email address'],
    ['/resume', 'View resume (PDF)'],
    ['/download', 'Download resume (PDF)'],
    ['/location', 'Where I\'m based'],
    ['/privacy', 'Privacy policy & cookies'],
  ];

  for (const [cmd, desc] of infoCmds) {
    await printLine(
      `<span class="line-link" data-cmd="${cmd}">${cmd.padEnd(18)}</span> ${desc}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('PROJECTS', { className: 'line-section' });

  for (const p of PROJECTS) {
    await printLine(
      `<span class="line-link" data-cmd="/${p.cmd}">/${p.cmd.padEnd(16)}</span> ${p.name}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('CERTIFICATES', { className: 'line-section' });

  for (const c of CERTIFICATES) {
    await printLine(
      `<span class="line-link" data-cmd="/${c.cmd}">/${c.cmd.padEnd(16)}</span> ${c.name}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('RESEARCH', { className: 'line-section' });

  for (const r of RESEARCH_PUBLICATIONS) {
    await printLine(
      `<span class="line-link" data-cmd="/${r.cmd}">/${r.cmd.padEnd(16)}</span> ${r.title}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('THEMES', { className: 'line-section' });

  const themeCmds = [
    ['/dark', 'Dark mode (default)'],
    ['/light', 'Light mode'],
    ['/retro', 'Retro CRT mode'],
    ['/glass', 'Modern glass mode'],
    ['/themes', 'Browse all themes'],
  ];

  for (const [cmd, desc] of themeCmds) {
    await printLine(
      `<span class="line-link" data-cmd="${cmd}">${cmd.padEnd(18)}</span> ${desc}`,
      { isHTML: true }
    );
  }

  await printLine('');
  await printLine('Aliases: /portfolio, /projects, /me, /hire, /call, /mail', { className: 'line-dim' });
  await printLine('Tip: Use ↑↓ arrows for command history, Tab for autocomplete', { className: 'line-dim' });
  await printLine('... and a few others, if you know where to look.', { className: 'line-muted' });
}
