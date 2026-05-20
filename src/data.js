// data.js — simplified, resume-driven content

export const USER = {
  name: 'Adarsh Tripathi',
  handle: 'adarsh',
  title: 'Full Stack Developer & ML Engineer',
  location: 'Vellore, Tamil Nadu, India',
  email: 'adarsh.utkarsh09@gmail.com',
  phone: '+91 8920767748',
  linkedin: 'https://www.linkedin.com/in/adarshtripathi0912/',
  github: 'https://github.com/Adarsh16-30',
  portfolio: 'https://adarsh-tripathi.vercel.app/',
};

export const BANNER = `
c█████╗ ██████╗  █████╗ ██████╗ ███████╗██╗  ██╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██║  ██║
███████║██║  ██║███████║██████╔╝███████╗███████║
██╔══██║██║  ██║██╔══██║██╔══██╗╚════██║██╔══██║
██║  ██║██████╔╝██║  ██║██║  ██║███████║██║  ██║
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
████████╗██████╗ ██╗██████╗  █████╗ ████████╗██╗  ██╗██╗
╚══██╔══╝██╔══██╗██║██╔══██╗██╔══██╗╚══██╔══╝██║  ██║██║
   ██║   ██████╔╝██║██████╔╝███████║   ██║   ███████║██║
   ██║   ██╔══██╗██║██╔═══╝ ██╔══██║   ██║   ██╔══██║██║
   ██║   ██║  ██║██║██║     ██║  ██║   ██║   ██║  ██║██║
   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝`;

// Public URL where the resume will be served when the site is published.
// Place your PDF at `public/resume.pdf` (or update this value after publishing).
export const RESUME_URL = '/resume.pdf';

export const PROJECTS = [
  {
    cmd: 'college-rag',
    name: 'College RAG System',
    desc: 'Production-ready retrieval system for academic workflows and campus knowledge lookup. Built to provide accurate context-aware answers over institutional documents and notes.',
    year: 2024,
    metrics: 'context window: 10k tokens, latency: ~120ms (server-side)',
    focus: 'RAG, semantic search, vector indexes, Flask backend',
    url: 'https://github.com/Adarsh16-30/Academic-Assistant-'
  },
  {
    cmd: 'zero-trust-soc',
    name: 'Zero-Trust SOC Platform',
    desc: 'Security operations center integrating telemetry ingestion, automated alert triage, and SOAR-style playbooks for rapid incident handling.',
    year: 2025,
    metrics: 'ingestion: 20k events/min (prototype), mean time to acknowledge (MTTA): <5m',
    focus: 'Kafka, OpenSearch, Neo4j, Wazuh, Keycloak, Vault, UEBA',
    url: 'https://github.com/Adarsh16-30/Zero-Trust-SOC'
  },
  {
    cmd: 'wafer-map',
    name: 'WaferMap Pattern Intelligence',
    desc: 'Deep learning pipeline for semiconductor defect detection and manufacturing yield optimization. Achieved industry-grade detection performance in testbench runs.',
    year: 2026,
    metrics: 'detection accuracy: 99%+ (prototype)',
    focus: 'CNNs, autoencoders, computer vision, TensorFlow, PyTorch',
    url: 'https://github.com/SriramKancherla/Image-based-Wafer-Map-Pattern-intelligence'
  },
  {
    cmd: 'shiksha-sahayak',
    name: 'Shiksha Sahayak',
    desc: 'Offline-first education management suite focusing on robust local data sync, lightweight clients, and eventual consistency for low-bandwidth settings.',
    year: 2023,
    metrics: 'sync batch size: up to 2k records; offline edits merge with CRDT-inspired rules',
    focus: 'Electron, Node.js, MongoDB, REST APIs, offline sync',
    url: 'https://github.com/SriramKancherla/Offline-first-Education-Management-Console/'
  },
  {
    cmd: 'cli-suite',
    name: 'Command Line Interface',
    desc: 'A compact developer toolkit providing automation, SSH helpers, and LLM-assisted code generation for developer workflows.',
    year: 2024,
    metrics: 'automation scripts: 30+ ready-made tasks; CI-friendly design',
    focus: 'V8 runtime, automation, SSH provisioning, code generation',
    url: 'https://github.com/Adarsh16-30/CommandLineInterface'
  },
];

export const CERTIFICATES = [
  {
    cmd: 'ibm-fullstack',
    name: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM via Coursera',
    url: 'https://drive.google.com/drive/folders/1_J6b9OxMDBUMmO6RKrivexdn6jN9VDRf?usp=drive_link',
    desc: 'Comprehensive full-stack training covering front-end, back-end, and deployment. Hands-on projects with React, Node and Docker.',
    skills: 'React, Node.js, Docker, Kubernetes, Microservices, CI/CD, Cloud deployment, REST APIs'
  },
  {
    cmd: 'amazon-java',
    name: 'Programming with Java – Amazon',
    issuer: 'Amazon',
    url: 'https://drive.google.com/drive/folders/1DR0Drcr5lcak-8QJqeSaYgjzyqrWChGq?usp=sharing',
    desc: 'In-depth Java course focusing on OOP, core language features, and practical algorithmic problems.',
    skills: 'Java, OOP, Data Structures, Algorithms, Collections, Exception Handling, Multithreading'
  },
  {
    cmd: 'stanford-ml',
    name: 'Machine Learning – DeepLearning.AI (Stanford)',
    issuer: 'DeepLearning.AI / Stanford',
    url: 'https://drive.google.com/file/d/1R2_7gNWiFC2KSKefWHUFrokdhNTcAv9M/view?usp=sharing',
    desc: 'Foundational machine learning curriculum covering model training, evaluation, and neural networks.',
    skills: 'Supervised Learning, Neural Networks, Decision Trees, Regularization, Model Evaluation, TensorFlow'
  },
  {
    cmd: 'oracle-genai',
    name: 'OCI Generative AI Professional Certificate – Oracle',
    issuer: 'Oracle',
    url: 'https://drive.google.com/drive/folders/18y0sicX4AUvKyf8-hk-W0bbrHtMwsJwV?usp=sharing',
    desc: 'Enterprise-focused LLM workflows, prompt engineering, and deployment on OCI.',
    skills: 'LLMs, Prompt Engineering, RAG, OCI AI Services, Fine-tuning, Embedding Models'
  },
  {
    cmd: 'google-cyber',
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google via Coursera',
    url: 'https://drive.google.com/drive/folders/17Zy5aQDLZc-7Z0Vdy2_4F-TTz0_hR_i1?usp=sharing',
    desc: 'Core cybersecurity fundamentals: network security, threat detection, and hands-on SIEM tooling.',
    skills: 'Network Security, SIEM, Linux, Python for Security, Incident Response, Threat Analysis, SQL'
  },
];

// Sparse 56-column ASCII portrait (face-focused; chosen for clarity)
export const ASCII_PORTRAIT = `
+++::::+:::::++:....::+::::+:::+::::++::
**++*+::++++++:..   .:+:::::+::::::::::.
%S*+**++:++::....     .:::::+:.....::::::
S%*+*+++::+:.           ::.:+:::::::::..:
*+++:::+:::.            :::::+.:+::::::..
*+:::::::::.    ....    :+::*+.::+:::+*::
%+::::::::.   .::::::....++++::++++:::+::
*::::::::::  .:::++++::...+++++*+:::::::+
::::::::::.  .::+++++++....+::+:::::*+%++
:::..:::.:. .:::+*****+.  .::::..::..:+++
:::....:::..:...:+**%%%+. ..:::::+:++:**:
::++:..:::..+:...:+**%SS*:..:::::+*%%+*%+
:::+:::::::::....:*+..+%%:::::::.:+*+*+*+
...:::::::::::...:S+.++*%:.:::::++++:++:*
.:::::.:::::+++::+S*.+*%%::..:.:++++:++.+
.::::::.::::+++::*SS**%S*:::..::::+::+:.:
::::+::.::::++::+%SSSSSS%*+::.+::++++::..
::::*+::+:.::...:+%**SS%%%*+:+**:%**:.::.
.:::++:::..:.....:%++SS%**+.:++*:+*+:+S*.
::::+::+::.::.:+++++.*%%%+...::++.+*++%+.
:..++:.:::..:::*%S++:*%*S:.:::..:.**.++:.
:::%+++:++..::::+%S%*%*:::+::::::++::**::
*++++++:+. ::::+*S%%*:...::::+:::...::..
*++:::::::: .:+*%%S%*:....::::+::........
*+:::::::.:. .::*%%++:...::..:+::........
++::::+: .::.  .:+::%. .:::::+::......:.
:.:*%% .::::.  .:+%%+.::.:++::.:::......
:.:+**+ ++::::::*%%S+:%+:::+::..:::......
:+**%*..**:::::*%%%S* %S:+%*::::::.......
%%%%%S: *%*+:::*%*%#S.*@S***:...:........
S%%%%%: ..:++::+%S#S+ *#*%*+:...::....::.
SS%%%*...  .++*S#%+...+SS##%*:.......::..
SS%%%*.....::*%%*.....:%#####S*+:::::::::
SS%%%+.... :*+**  .....+##SSS##S+:.:+++++
SS%%%+.....:*+:+  ....:+SSS%SS##S+:+**+.
S%%%%*.....::..:  ....::%%***%%S@S+++++++
S%%%%*: .  .. :. .  ...++%*::+*%##*++++++
SS%%%**:.    .+: . ...+%*S%+:++%##S++++++
%%**+*%*:...:**  ....:*%*%%***+S###*+++++
*++++%%%****%%+  ...+S%****+%S%#S#@%+++++
%:*SSSS%%%%%%:*+*:::+%#S#S%%%SSS###+++++
`.trimStart();

export const CAPABILITIES = [
  { label: 'Build', value: 'Full-stack apps, APIs, dashboards, automation' },
  { label: 'Research', value: 'RAG, ML, computer vision, applied AI' },
  { label: 'Secure', value: 'Cybersecurity, SOC tooling, zero-trust systems' },
  { label: 'Ship', value: 'Cloud deployment, DevOps, production readiness' },
];

export const NAV_LINKS = ['/about','/education','/work','/skills','/research','/achievements','/certs','/contact','/resume'];

export const SKILLS = [
  { name: 'Python / Java', pct: 95, color: 'c1' },
  { name: 'JavaScript / TypeScript', pct: 94, color: 'c2' },
  { name: 'React / Node.js', pct: 92, color: 'c3' },
  { name: 'ML / AI', pct: 89, color: 'c4' },
  { name: 'Cybersecurity', pct: 84, color: 'c5' },
  { name: 'Databases / Backend', pct: 88, color: 'c6' },
];

export const README_TEXT = `This site now surfaces the contents of my resume. Use /resume to view the PDF, /download to save it, and /research or /achievements to explore the extra sections.`;

export const ABOUT_TEXT = {
  intro: `I’m a third-year Computer Science student at VIT Vellore building scalable systems and exploring emerging technologies.`,
  whatIDo: `Full-stack development, cybersecurity tooling, applied machine learning, and production-oriented software systems.`,
  career: `Currently focused on internships, high-signal projects, and research-backed portfolio work.`,
  teaching: `I like mentoring through code reviews, systems thinking, and practical problem solving.`,
  beyond: ['Cycling', 'Photography', 'Reading about systems', 'Open source'],
};

export const EDUCATION = [
  {
    school: 'Vellore Institute of Technology, Vellore',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    years: '2023 – 2027',
    note: 'CGPA: 8.96'
  },
  {
    school: 'DAV Public School, Sreshtha Vihar, Delhi',
    degree: 'Senior Secondary (Class XII)',
    years: '2023',
    note: '94%'
  },
  {
    school: 'DAV Public School, Sreshtha Vihar, Delhi',
    degree: 'Secondary (Class X)',
    years: '2021',
    note: '88%'
  }
];

export const RESEARCH_PUBLICATIONS = [
  {
    cmd: 'crop-patent',
    title: 'Patent Filed – Early Crop Disease Detection System',
    venue: 'VIT, 2026',
    desc: 'Co-invented a multispectral detection pipeline using Red-Edge/SWIR sensing, a cross-phenological Vision Transformer, and graph diffusion propagation for early disease detection.',
    focus: 'Multispectral sensing, Vision Transformers, graph diffusion, early detection',
    methodology: 'Multi-band spectral capture → cross-phenological ViT feature extraction → graph-based spatial diffusion for propagation modeling → severity classification',
    status: 'Patent filed (2026)'
  },
  {
    cmd: 'quantum-crop',
    title: 'Journal Paper (Under Review) – Quantum-Enhanced Crop Disease Detection',
    venue: 'Journal submission',
    desc: 'Proposed a Quantum-Enhanced Edge-AI framework for pre-symptomatic crop disease detection using temporal spectral intelligence and quantum-inspired optimization.',
    focus: 'Quantum-inspired optimization, edge AI, temporal spectral intelligence',
    methodology: 'Temporal spectral data collection → quantum-inspired feature selection → edge-optimized inference pipeline → real-time field deployment',
    status: 'Under journal review'
  }
];

export const ACHIEVEMENTS = [
  {
    cmd: 'deloitte-hack',
    title: 'Deloitte HackSplosion 2026',
    desc: 'Built an AI-based solution as part of a team and advanced to the semi-final round of Deloitte’s national GenW.AI hackathon.'
  },
  {
    cmd: 'sih-2025',
    title: 'Smart India Hackathon (SIH) 2025',
    desc: 'Cleared VIT’s internal evaluation round and earned a national-level shortlist among competing college teams.'
  },
  {
    cmd: 'brainwars',
    title: 'BrAINWARS 2026',
    desc: 'Qualified through the Brain Blitz round of Bain Capability Network’s national business case competition.'
  },
  {
    cmd: 'jpmc-cfg',
    title: 'JPMorgan Chase Code for Good 2026',
    desc: 'Cleared the coding assessment and interview rounds for JPMC’s flagship social-impact hackathon.'
  }
];

export const IDLE_MESSAGES = [
  "Still there? Try typing /about or /work.",
  "*cough* ... anyone there?",
  "Decisions, decisions. Type /help if you need a hand.",
  "Fun fact: This terminal has secrets. Type /secrets to find them.",
  "Is anyone there? Or did you go get coffee?",
  "I'm ready. Awaiting your commands...",
];

export const GIT_LOG = [
  { hash: 'a5c2f91', msg: 'feat: add interactive secrets and easter eggs', date: 'May 20 01:25' },
  { hash: 'e2a890d', msg: 'style: adjust typography and scale layout', date: 'May 19 23:14' },
  { hash: '7d3e2a1', msg: 'fix: resolve welcome card line spacing', date: 'May 19 18:42' },
  { hash: '9b8f3c4', msg: 'feat: add /certs and /social navigation commands', date: 'May 18 14:02' },
  { hash: '4f2e1a5', msg: 'initial commit: mount core portfolio system', date: 'May 15 09:30' }
];

export const LS_OUTPUT = ''; // Not used anymore as we generate a beautiful directory view
