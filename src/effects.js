// ============================================
// SPECIAL EFFECTS — Matrix rain, confetti
// ============================================

import { printLine } from './terminal.js';

let matrixActive = false;
let matrixAnimId = null;
let matrixExitHandler = null;

export function startMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  
  // Hide terminal
  const terminal = document.getElementById('terminal');
  if (terminal) terminal.classList.add('matrix-hidden');
  
  canvas.classList.add('active');
  matrixActive = true;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(1);
  
  function draw() {
    if (!matrixActive) return;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.globalAlpha = 0.4 + Math.random() * 0.6;
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    ctx.globalAlpha = 1;
    
    matrixAnimId = requestAnimationFrame(draw);
  }
  
  draw();
  
  // Exit handler for key/click (delayed to prevent the Enter key bubbles from immediately closing it)
  setTimeout(() => {
    if (!matrixActive) return;
    matrixExitHandler = () => {
      stopMatrixRain();
    };
    window.addEventListener('click', matrixExitHandler, { once: true });
    window.addEventListener('keydown', matrixExitHandler, { once: true });
  }, 200);
  
  // Auto-stop after 8 seconds
  setTimeout(() => stopMatrixRain(), 8000);
}

export function stopMatrixRain() {
  if (!matrixActive) return;
  matrixActive = false;
  
  if (matrixAnimId) cancelAnimationFrame(matrixAnimId);
  
  // Clean up exit listeners
  if (matrixExitHandler) {
    window.removeEventListener('click', matrixExitHandler);
    window.removeEventListener('keydown', matrixExitHandler);
    matrixExitHandler = null;
  }
  
  // Show terminal back
  const terminal = document.getElementById('terminal');
  if (terminal) {
    terminal.classList.remove('matrix-hidden');
    // Print exit message
    printLine('Exited the Matrix. Connection restored.', { className: 'line-muted' });
    // Refocus input
    const input = document.getElementById('command-input');
    if (input) input.focus();
  }
  
  const canvas = document.getElementById('matrix-canvas');
  if (canvas) {
    canvas.classList.remove('active');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

export function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  
  canvas.classList.add('active');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const colors = ['#ff9f43', '#28c840', '#ff5f57', '#febc2e', '#5f27cd', '#0abde3', '#ff9ff3', '#feca57'];
  const particles = [];
  
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 20,
      vy: (Math.random() - 0.5) * 20 - 5,
      size: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      life: 1,
      decay: 0.008 + Math.random() * 0.008,
    });
  }
  
  let animId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let alive = false;
    for (const p of particles) {
      if (p.life <= 0) continue;
      alive = true;
      
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3; // gravity
      p.rotation += p.rotSpeed;
      p.life -= p.decay;
      
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    }
    
    if (alive) {
      animId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.classList.remove('active');
    }
  }
  
  animate();
}

// Handle window resize for canvases
window.addEventListener('resize', () => {
  const mc = document.getElementById('matrix-canvas');
  const cc = document.getElementById('confetti-canvas');
  if (mc && matrixActive) {
    mc.width = window.innerWidth;
    mc.height = window.innerHeight;
  }
  if (cc) {
    cc.width = window.innerWidth;
    cc.height = window.innerHeight;
  }
});
