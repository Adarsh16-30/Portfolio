import { printLine, showLoading } from '../terminal.js';
import { USER, RESUME_URL, PROJECTS } from '../data.js';

function buttonHTML(url, label) {
  return `<button class="action-button" data-url="${url}">${label}</button>`;
}

// vladburca.com-style social profile row
function socialRow(badge, badgeColor, name, handle, url) {
  return `<a class="social-row" href="${url}" target="_blank" rel="noopener noreferrer">
    <span class="social-badge" style="background:${badgeColor}">${badge}</span>
    <span class="social-name">${name}</span>
    <span class="social-handle">${handle}</span>
    <span class="social-arrow">→</span>
  </a>`;
}

const SOCIAL_PROFILES = [
  { badge: 'IN', color: '#0a66c2', name: 'LinkedIn', handle: '/in/adarshtripathi0912', url: 'https://www.linkedin.com/in/adarshtripathi0912/' },
  { badge: 'GH', color: '#333', name: 'GitHub', handle: '@Adarsh16-30', url: 'https://github.com/Adarsh16-30' },
  { badge: 'EM', color: '#c58f69', name: 'Email', handle: 'adarsh.utkarsh09@gmail.com', url: 'mailto:adarsh.utkarsh09@gmail.com' },
  { badge: 'PH', color: '#28c840', name: 'Phone', handle: '+91 8920767748', url: 'tel:+918920767748' },
  { badge: 'WB', color: '#586174', name: 'Portfolio', handle: 'adarsh-tripathi.vercel.app', url: 'https://adarsh-tripathi.vercel.app/' },
];

export async function cmdSocial() {
  await showLoading('Fetching profiles');
  await printLine('Social Profiles', { className: 'line-header' });
  await printLine('');

  for (const p of SOCIAL_PROFILES) {
    await printLine(socialRow(p.badge, p.color, p.name, p.handle, p.url), { isHTML: true });
  }

  await printLine('');
  await printLine('→ /contact to get in touch directly', { className: 'line-dim' });
}

export async function cmdLinkedin() {
  await printLine('LinkedIn', { className: 'line-header' });
  await printLine('');
  await printLine(socialRow('IN', '#0a66c2', 'LinkedIn', '/in/adarshtripathi0912', USER.linkedin), { isHTML: true });
  await printLine('');
  await printLine('→ /social for all profiles', { className: 'line-dim' });
}

export async function cmdGithub() {
  await printLine('GitHub', { className: 'line-header' });
  await printLine('');
  await printLine(socialRow('GH', '#333', 'GitHub', '@Adarsh16-30', USER.github), { isHTML: true });
  await printLine('');
  await printLine('→ /social for all profiles', { className: 'line-dim' });
}

export async function cmdResume() {
  // Open an in-page viewer (overlay) so visitors can view the PDF and return.
  try {
    // If an overlay already exists, bring it back instead of recreating.
    let overlay = document.querySelector('.resume-overlay');
    if (overlay) {
      await printLine('Opening resume PDF...', { className: 'line-success' });
      overlay.style.display = 'flex';
      return;
    }

    await printLine('Opening resume PDF...', { className: 'line-success' });

    overlay = document.createElement('div');
    overlay.className = 'resume-overlay';
    overlay.innerHTML = `
      <div class="resume-panel">
        <div class="resume-toolbar">
          <button class="resume-close">Back</button>
          ${buttonHTML(RESUME_URL, 'Download resume')}
        </div>
        <iframe src="${RESUME_URL}" class="resume-iframe" title="Resume"></iframe>
      </div>`;
    document.body.appendChild(overlay);
    const closeBtn = overlay.querySelector('.resume-close');
    closeBtn.addEventListener('click', async () => {
      // hide instead of remove to avoid aborted iframe loads when quickly reopened
      overlay.style.display = 'none';
      await printLine('Resume view closed.', { className: 'line-muted' });
      const input = document.getElementById('command-input');
      if (input) input.focus();
    });

    // In parallel, attempt a lightweight fetch of the PDF to surface simple metrics
    // by searching for plaintext inside the PDF bytes. This is a best-effort, fallback approach.
    (async () => {
      try {
        const res = await fetch(RESUME_URL);
        if (!res.ok) throw new Error('non-200 response');
        const buf = await res.arrayBuffer();
        // convert to latin1 string to preserve bytes as characters
        const text = new TextDecoder('latin1').decode(buf);
        let found = 0;
        for (const p of PROJECTS) {
          // try to find a nearby numeric token after the project name
          const rx = new RegExp(p.name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '[\s\S]{0,120}?(\\d{1,3}[%+]?|\\b\\d{2,5}\\b)', 'i');
          const m = text.match(rx);
          if (m) {
            p.metrics = p.metrics ? p.metrics + ' | extracted: ' + m[1] : 'extracted: ' + m[1];
            found++;
          }
        }
        if (found) {
          await printLine(`Extracted metrics from resume for ${found} project(s).`, { className: 'line-success' });
        }
      } catch (err) {
        // silently ignore extraction failures, resume viewer still opens
        await printLine('Resume opened but automatic metric extraction failed.', { className: 'line-dim' });
      }
    })();
  } catch (e) {
    try {
      window.open(RESUME_URL, '_blank');
    } catch (err) {
      await printLine('Unable to open resume automatically. Please visit:', { className: 'line-error' });
      await printLine(RESUME_URL);
    }
  }
}

export async function cmdDownloadResume() {
  await printLine('Preparing resume download...', { className: 'line-success' });
  try {
    const a = document.createElement('a');
    a.href = RESUME_URL;
    a.download = RESUME_URL.split('/').pop() || 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (e) {
    await printLine('Download failed. Open the resume with /resume and save it manually.', { className: 'line-error' });
  }
}

export async function cmdPhone() {
  await printLine('Phone', { className: 'line-header' });
  await printLine('');
  await printLine(socialRow('PH', '#28c840', 'Phone', USER.phone, `tel:${USER.phone.replace(/\s/g,'')}`), { isHTML: true });
  await printLine('');
  await printLine('→ /social for all profiles', { className: 'line-dim' });
}

export async function cmdEmail() {
  await printLine('Email', { className: 'line-header' });
  await printLine('');
  await printLine(socialRow('EM', '#c58f69', 'Email', USER.email, `mailto:${USER.email}`), { isHTML: true });
  await printLine('');
  await printLine('→ /social for all profiles', { className: 'line-dim' });
}

export async function cmdLocation() {
  await printLine('Location', { className: 'line-header' });
  await printLine('');
  await printLine(socialRow('LC', '#586174', 'Location', USER.location, '#'), { isHTML: true });
  await printLine('Working remotely across timezones.', { className: 'line-dim' });
}

export async function cmdPrivacy() {
  await printLine('Privacy Policy', { className: 'line-header' });
  await printLine('');
  await printLine('This site uses no tracking cookies or analytics.');
  await printLine('Your commands are processed locally in your browser.');
  await printLine('No data is sent to any server.');
  await printLine('');
  await printLine('Your privacy is respected. Always.', { className: 'line-muted' });
}
