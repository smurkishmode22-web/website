/**
 * PLANET TWEAKS · V2.0 ULTRA WEBSITE INTERACTIVITY
 */

// 1. Game FPS & Latency Benchmark Data
const gameBenchmarks = {
    fortnite: {
        beforeFps: 148,
        afterFps: 362,
        beforeLow: '62 FPS',
        afterLow: '210 FPS (+238%)',
        beforeDelay: '18.4 ms',
        afterDelay: '1.8 ms (Near Zero)',
        beforeRam: '7.8 GB',
        afterRam: '2.8 GB (-64%)',
        beforeBar: '42%',
        afterBar: '95%',
        testedOn: '⚙️ Rig Tested: AMD Ryzen 5 5600X · NVIDIA RTX 3060 12GB · 16GB DDR4 · 1080p Performance Mode'
    },
    valorant: {
        beforeFps: 220,
        afterFps: 480,
        beforeLow: '140 FPS',
        afterLow: '390 FPS (+178%)',
        beforeDelay: '12.8 ms',
        afterDelay: '1.2 ms (Instant)',
        beforeRam: '6.5 GB',
        afterRam: '2.4 GB (-63%)',
        beforeBar: '50%',
        afterBar: '98%',
        testedOn: '⚙️ Rig Tested: Intel Core i5-12400F · RTX 3060 · 16GB RAM · Vanguard Anti-Cheat Optimized'
    },
    cs2: {
        beforeFps: 165,
        afterFps: 380,
        beforeLow: '85 FPS',
        afterLow: '260 FPS (+205%)',
        beforeDelay: '16.2 ms',
        afterDelay: '1.5 ms (Sub-frame)',
        beforeRam: '8.2 GB',
        afterRam: '3.1 GB (-62%)',
        beforeBar: '44%',
        afterBar: '92%',
        testedOn: '⚙️ Rig Tested: AMD Ryzen 7 5700X3D · RTX 4060 · 32GB DDR4 · Faceit 128-tick Ready'
    },
    warzone: {
        beforeFps: 110,
        afterFps: 215,
        beforeLow: '52 FPS',
        afterLow: '145 FPS (+178%)',
        beforeDelay: '22.4 ms',
        afterDelay: '3.4 ms (Crisp)',
        beforeRam: '11.4 GB',
        afterRam: '5.2 GB (-54%)',
        beforeBar: '35%',
        afterBar: '82%',
        testedOn: '⚙️ Rig Tested: AMD Ryzen 5 7600 · RTX 3070 · 32GB DDR5 · Urzikstan 1440p'
    },
    apex: {
        beforeFps: 155,
        afterFps: 299,
        beforeLow: '90 FPS',
        afterLow: '220 FPS (+144%)',
        beforeDelay: '15.0 ms',
        afterDelay: '1.6 ms (Fluid)',
        beforeRam: '7.9 GB',
        afterRam: '3.0 GB (-62%)',
        beforeBar: '48%',
        afterBar: '94%',
        testedOn: '⚙️ Rig Tested: Intel Core i7-11700K · RTX 3070 Ti · 16GB DDR4 · 240Hz Locked'
    }
};

function selectGame(gameKey) {
    const data = gameBenchmarks[gameKey];
    if (!data) return;

    // Update active tab styling
    document.querySelectorAll('.game-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.game === gameKey);
    });

    // Update Benchmark Card values with smooth number transitions
    animateNumber('beforeFps', parseInt(document.getElementById('beforeFps').textContent) || 100, data.beforeFps);
    animateNumber('afterFps', parseInt(document.getElementById('afterFps').textContent) || 200, data.afterFps);

    document.getElementById('beforeLow').textContent = data.beforeLow;
    document.getElementById('afterLow').textContent = data.afterLow;
    document.getElementById('beforeDelay').textContent = data.beforeDelay;
    document.getElementById('afterDelay').textContent = data.afterDelay;
    document.getElementById('beforeRam').textContent = data.beforeRam;
    document.getElementById('afterRam').textContent = data.afterRam;

    document.getElementById('beforeFpsBar').style.width = data.beforeBar;
    document.getElementById('afterFpsBar').style.width = data.afterBar;

    const testedEl = document.querySelector('.tested-on');
    if (testedEl) testedEl.textContent = data.testedOn;
}

function animateNumber(elementId, startVal, endVal) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const duration = 400;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(startVal + (endVal - startVal) * progress);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// 2. Simulated Live Telemetry Updates in Hero Mockup
function startMockTelemetry() {
    const cpuVal = document.getElementById('mockCpuVal');
    const cpuBar = document.getElementById('mockCpuBar');
    const ramVal = document.getElementById('mockRamVal');
    const ramBar = document.getElementById('mockRamBar');

    if (!cpuVal || !ramVal) return;

    setInterval(() => {
        // Random fluctuate within realistic low-load gaming profile
        const randomCpu = Math.floor(Math.random() * 8) + 11; // 11% - 18%
        const randomRam = Math.floor(Math.random() * 4) + 26; // 26% - 29%

        cpuVal.textContent = `${randomCpu}%`;
        if (cpuBar) cpuBar.style.width = `${randomCpu}%`;

        ramVal.textContent = `${randomRam}%`;
        if (ramBar) ramBar.style.width = `${randomRam}%`;
    }, 2200);
}

// 3. Live Active Gamers Counter Ticker
function startActiveGamersTicker() {
    const counterEl = document.getElementById('activeUsersCounter');
    if (!counterEl) return;
    let count = 2481;

    setInterval(() => {
        const delta = Math.floor(Math.random() * 7) - 2; // slight upward drift
        count = Math.max(2200, count + delta);
        counterEl.textContent = count.toLocaleString();
    }, 3500);
}

// 4. Interactive Planet AI Chat Demo
const aiRuleSet = [
    {
        keywords: ['fortnite', 'stutter', 'fps drop', 'frame drops'],
        response: 'For Fortnite Unreal Engine 5 stuttering, apply <strong>0 Delay DWM Strip</strong>, set <strong>NVIDIA Shader Cache: Unlimited</strong>, and uncheck <strong>Disable Fullscreen Optimizations</strong> in game properties.'
    },
    {
        keywords: ['valorant', 'cs2', 'input lag', 'delay', 'latency', 'mouse'],
        response: 'For sub-1ms input latency in tactical shooters, convert your GPU and USB Root Hubs to <strong>Message Signaled Interrupts (MSI High Priority)</strong> and enable <strong>TCP NoDelay</strong>.'
    },
    {
        keywords: ['ram', 'memory', 'usage', 'free memory'],
        response: 'To cut idle RAM from 8GB down to 2.8GB, run the <strong>Deep Junk & Shader Cache Cleaner</strong> and disable <strong>Diagnostic Telemetry & Xbox Game Bar Overlays</strong>.'
    },
    {
        keywords: ['ping', 'jitter', 'packet loss', 'wifi', 'ethernet'],
        response: 'To stabilize packet delivery, Planet Tweaks tunes <strong>NetworkThrottlingIndex to FFFFFFFF (Disabled)</strong> and applies optimized MTU framing for 0% packet jitter.'
    }
];

function sendDemoChat() {
    const input = document.getElementById('aiDemoInput');
    const chatList = document.getElementById('chatDemoList');
    if (!input || !chatList) return;

    const query = input.value.trim();
    if (!query) return;

    // Append User Bubble
    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.innerHTML = `
        <div class="sender-info">You · ${nowStr}</div>
        <div class="msg-text">${escapeHtml(query)}</div>
    `;
    chatList.appendChild(userBubble);
    input.value = '';
    chatList.scrollTop = chatList.scrollHeight;

    // Simulate AI thinking and reply
    setTimeout(() => {
        let match = aiRuleSet.find(rule => rule.keywords.some(k => query.toLowerCase().includes(k)));
        let replyText = match 
            ? match.response 
            : `Based on your live system specs, applying the <strong>Ultra Pro Tweaks Package</strong> will maximize core utilization, unpark CPU threads, and reduce DWM input queue latency.`;

        const aiBubble = document.createElement('div');
        aiBubble.className = 'chat-bubble ai';
        aiBubble.innerHTML = `
            <div class="sender-info">Planet AI · ${nowStr}</div>
            <div class="msg-text">${replyText}</div>
            <a href="#catalog" class="ai-action-pill">⚡ Open Recommended Catalog</a>
        `;
        chatList.appendChild(aiBubble);
        chatList.scrollTop = chatList.scrollHeight;
    }, 600);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 5. FAQ Accordion Toggle
function toggleFaq(button) {
    const item = button.closest('.faq-item');
    const wasActive = item.classList.contains('active');

    // Close all items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    // Toggle selected item
    if (!wasActive) {
        item.classList.add('active');
    }
}

// 6. Download Modal & Dynamic Download Trigger
let currentDownloadUrl = 'downloads/planet-tweaks-setup.exe';

// Automatically sync download URL with version.json
if (typeof fetch === 'function') {
    fetch('version.json')
        .then(res => res.json())
        .then(data => {
            if (data && data.downloadUrl) {
                currentDownloadUrl = data.downloadUrl;
                const mainBtn = document.getElementById('mainDownloadBtn');
                if (mainBtn) mainBtn.href = currentDownloadUrl;
                const modalBtn = document.querySelector('.modal-actions a.btn-hero-primary');
                if (modalBtn) modalBtn.href = currentDownloadUrl;
            }
        })
        .catch(() => {});
}

function openDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) modal.classList.add('active');
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) modal.classList.remove('active');
}

function triggerDownload() {
    openDownloadModal();
    const link = document.createElement('a');
    link.href = currentDownloadUrl;
    link.setAttribute('download', currentDownloadUrl.split('/').pop() || 'planet-tweaks-setup.exe');
    link.setAttribute('target', '_self');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function onDownloadClicked(event) {
    if (event) event.preventDefault();
    const link = document.createElement('a');
    link.href = currentDownloadUrl;
    link.setAttribute('download', currentDownloadUrl.split('/').pop() || 'planet-tweaks-setup.exe');
    link.setAttribute('target', '_self');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show download initiated confirmation
    setTimeout(() => {
        closeDownloadModal();
    }, 1500);
}

// Close modal on click outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('downloadModal');
    if (e.target === modal) {
        closeDownloadModal();
    }
});

/* ==========================================================================
   INTERACTIVE 3D ENGINE, SPACE NEBULA & CREATIVE WEB ANIMATIONS
   ========================================================================== */

// 1. Synthesized Sci-Fi Audio Engine (Web Audio API - Zero External Files)
class CyberAudioEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    play(type) {
        if (!this.enabled) return;
        try {
            this.init();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;

            if (type === 'click') {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(1400, now);
                osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.04);
            } else if (type === 'toggle') {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.exponentialRampToValueAtTime(1200, now + 0.06);
                gain.gain.setValueAtTime(0.07, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.06);
            } else if (type === 'whoosh') {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.exponentialRampToValueAtTime(180, now + 0.12);
                gain.gain.setValueAtTime(0.06, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.12);
            } else if (type === 'flip') {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.08);
            } else if (type === 'explode') {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.exponentialRampToValueAtTime(440, now + 0.1);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.12);
            }
        } catch (e) {
            // Audio policy fallback
        }
    }
}
const cyberAudio = new CyberAudioEngine();

// 2. Space Nebula & Interactive Particle Canvas
function initSpaceNebulaCanvas() {
    const canvas = document.getElementById('spaceNebulaCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const numParticles = Math.min(85, Math.floor(width / 18));
    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener('pointermove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            radius: Math.random() * 1.8 + 0.6,
            baseAlpha: Math.random() * 0.45 + 0.25,
            color: Math.random() > 0.4 ? 'rgba(56, 189, 248,' : 'rgba(16, 185, 129,'
        });
    }

    function render() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            // Mouse repulsion / gentle attraction
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
                p.x -= (dx / dist) * 0.6;
                p.y -= (dy / dist) * 0.6;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color} ${p.baseAlpha})`;
            ctx.fill();

            // Connecting neural lines
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const d = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (d < 110) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    const alpha = (1 - d / 110) * 0.15;
                    ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// 3. Cursor Interactive Spotlight
function initCursorSpotlight() {
    const spotlight = document.getElementById('cursorSpotlight');
    if (!spotlight) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener('pointermove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function update() {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        spotlight.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// 4. 3D Metallic Liquid Chrome Orb WebGL Engine
class LiquidChromeEngine {
    constructor() {
        this.canvas = document.getElementById('liquidChromeCanvas');
        this.viewport = document.getElementById('stageViewport');
        if (!this.canvas || !this.viewport) return;

        this.gl = this.canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
        if (!this.gl) {
            this.init2DFallback();
            return;
        }

        this.rotX = 0.2;
        this.rotY = -0.4;
        this.velX = 0;
        this.velY = 0;
        this.isDragging = false;
        this.lastX = 0;
        this.lastY = 0;
        this.lastTime = 0;

        this.autoSpin = true;
        this.autoSpinSpeed = 0.008;
        this.friction = 0.92;

        this.mouseX = 0;
        this.mouseY = 0;
        this.targetMouseX = 0;
        this.targetMouseY = 0;

        this.rippleIntensity = 0;
        this.materialMode = 2; // Default to Quantum Violet (like user screenshot)

        this.initShaders();
        this.resize();
        this.initEvents();
        window.addEventListener('resize', () => this.resize());
        this.render = this.render.bind(this);
        requestAnimationFrame(this.render);
    }

    initShaders() {
        const gl = this.gl;
        const vsSource = `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        const fsSource = `
            precision highp float;
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform vec2 u_mouse;
            uniform vec2 u_rotation;
            uniform float u_ripple;
            uniform int u_material;

            mat3 rotateX(float a) {
                float c = cos(a); float s = sin(a);
                return mat3(1.0, 0.0, 0.0,  0.0, c, -s,  0.0, s, c);
            }
            mat3 rotateY(float a) {
                float c = cos(a); float s = sin(a);
                return mat3(c, 0.0, s,  0.0, 1.0, 0.0,  -s, 0.0, c);
            }

            float liquidDisplacement(vec3 p) {
                float distMouse = length(p.xy - u_mouse * 0.8);
                float mouseWave = sin(distMouse * 14.0 - u_time * 5.0) * exp(-distMouse * 2.5) * 0.04;
                
                float wave1 = sin(p.x * 5.0 + u_time * 2.2) * cos(p.y * 4.8 + u_time * 1.8) * 0.038;
                float wave2 = sin(p.z * 5.5 - u_time * 2.8) * 0.028;
                float wave3 = cos((p.x + p.y + p.z) * 5.0 + u_time * 3.0) * 0.02;
                
                float shock = sin(length(p) * 18.0 - u_time * 10.0) * u_ripple * 0.07;
                
                return wave1 + wave2 + wave3 + mouseWave + shock;
            }

            float map(vec3 p) {
                float r = 0.76 + liquidDisplacement(p);
                return length(p) - r;
            }

            vec3 calcNormal(vec3 p) {
                float eps = 0.003;
                vec2 h = vec2(eps, 0.0);
                return normalize(vec3(
                    map(p + h.xyy) - map(p - h.xyy),
                    map(p + h.yxy) - map(p - h.yxy),
                    map(p + h.yyx) - map(p - h.yyx)
                ));
            }

            vec3 getEnvReflect(vec3 refDir, int mat) {
                float up = refDir.y * 0.5 + 0.5;
                
                vec3 lightDir1 = normalize(vec3(0.65, 0.85, 0.5));
                float softbox1 = pow(max(dot(refDir, lightDir1), 0.0), 32.0) * 2.2;
                
                vec3 lightDir2 = normalize(vec3(-0.85, 0.25, -0.6));
                float strip2 = pow(max(dot(refDir, lightDir2), 0.0), 16.0) * 1.9;
                
                vec3 lightDir3 = normalize(vec3(0.1, -0.9, 0.45));
                float strip3 = pow(max(dot(refDir, lightDir3), 0.0), 22.0) * 1.3;
                
                vec3 col = vec3(0.02, 0.03, 0.05);
                
                if (mat == 0) {
                    vec3 grad = mix(vec3(0.08, 0.11, 0.16), vec3(0.88, 0.93, 0.99), up);
                    col = grad + softbox1 * vec3(1.0, 1.0, 1.0) + strip2 * vec3(0.4, 0.85, 1.0) + strip3 * vec3(0.75, 0.6, 0.95);
                } else if (mat == 1) {
                    vec3 grad = mix(vec3(0.01, 0.08, 0.14), vec3(0.2, 0.9, 1.0), up);
                    col = grad + softbox1 * vec3(0.8, 1.0, 1.0) * 2.6 + strip2 * vec3(0.0, 1.0, 0.85) * 3.2 + strip3 * vec3(0.15, 0.45, 0.95);
                } else {
                    vec3 grad = mix(vec3(0.09, 0.02, 0.16), vec3(0.98, 0.45, 0.92), up);
                    col = grad + softbox1 * vec3(1.0, 0.85, 1.0) * 2.4 + strip2 * vec3(0.65, 0.25, 1.0) * 3.0 + strip3 * vec3(1.0, 0.25, 0.65);
                }
                return col;
            }

            void main() {
                vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
                
                vec3 ro = vec3(0.0, 0.0, 3.65);
                vec3 rd = normalize(vec3(uv, -1.8));
                
                mat3 rot = rotateX(u_rotation.x) * rotateY(u_rotation.y);
                ro = rot * ro;
                rd = rot * rd;
                
                float t = 0.0;
                float maxDist = 5.5;
                bool hit = false;
                vec3 p = ro;
                
                for (int i = 0; i < 48; i++) {
                    p = ro + rd * t;
                    float d = map(p);
                    if (d < 0.0025) {
                        hit = true;
                        break;
                    }
                    t += d * 0.78;
                    if (t > maxDist) break;
                }
                
                if (hit) {
                    vec3 n = calcNormal(p);
                    vec3 ref = reflect(rd, n);
                    
                    float fresnel = pow(1.0 - max(dot(-rd, n), 0.0), 3.4);
                    
                    vec3 refR = reflect(rd, normalize(n + vec3(0.018, 0.0, 0.0)));
                    vec3 refG = ref;
                    vec3 refB = reflect(rd, normalize(n - vec3(0.018, 0.0, 0.0)));
                    
                    vec3 colR = getEnvReflect(refR, u_material);
                    vec3 colG = getEnvReflect(refG, u_material);
                    vec3 colB = getEnvReflect(refB, u_material);
                    vec3 envColor = vec3(colR.r, colG.g, colB.b);
                    
                    vec3 finalColor = envColor + fresnel * 0.65;
                    gl_FragColor = vec4(finalColor, 1.0);
                } else {
                    float d = length(uv);
                    float fade = smoothstep(0.48, 0.35, d);
                    float halo = exp(-d * 5.0) * 0.16 * fade;
                    vec3 glowColor = u_material == 1 ? vec3(0.02, 0.8, 0.95) : (u_material == 2 ? vec3(0.85, 0.3, 0.95) : vec3(0.3, 0.7, 0.95));
                    gl_FragColor = vec4(glowColor * halo * 2.0, halo * 0.4);
                }
            }
        `;

        const createShader = (type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        };

        const vs = createShader(gl.VERTEX_SHADER, vsSource);
        const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        gl.useProgram(program);
        this.program = program;

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,  1, -1, -1,  1,
            -1,  1,  1, -1,  1,  1
        ]), gl.STATIC_DRAW);

        const posLoc = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

        this.uResolution = gl.getUniformLocation(program, 'u_resolution');
        this.uTime = gl.getUniformLocation(program, 'u_time');
        this.uMouse = gl.getUniformLocation(program, 'u_mouse');
        this.uRotation = gl.getUniformLocation(program, 'u_rotation');
        this.uRipple = gl.getUniformLocation(program, 'u_ripple');
        this.uMaterial = gl.getUniformLocation(program, 'u_material');

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    }

    resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = this.canvas.clientWidth || 800;
        const h = this.canvas.clientHeight || 580;
        this.canvas.width = Math.floor(w * dpr);
        this.canvas.height = Math.floor(h * dpr);
        if (this.gl) {
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    initEvents() {
        this.canvas.addEventListener('pointerdown', (e) => {
            this.isDragging = true;
            this.lastX = e.clientX;
            this.lastY = e.clientY;
            this.lastTime = performance.now();
            this.velX = 0;
            this.velY = 0;
            this.canvas.setPointerCapture(e.pointerId);
            this.triggerRipple(1.0);
            cyberAudio.play('click');
        });

        window.addEventListener('pointermove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width;
            const relY = (e.clientY - rect.top) / rect.height;
            this.targetMouseX = (relX - 0.5) * 2;
            this.targetMouseY = -(relY - 0.5) * 2;

            if (!this.isDragging) return;
            const now = performance.now();
            const dt = Math.max(now - this.lastTime, 1);
            const dx = e.clientX - this.lastX;
            const dy = e.clientY - this.lastY;

            this.rotY += dx * 0.008;
            this.rotX += dy * 0.008;
            this.rotX = Math.max(-1.3, Math.min(1.3, this.rotX));

            this.velX = (dx / dt) * 0.18;
            this.velY = (dy / dt) * 0.18;

            this.lastX = e.clientX;
            this.lastY = e.clientY;
            this.lastTime = now;
        });

        const stopDrag = (e) => {
            if (!this.isDragging) return;
            this.isDragging = false;
            try { this.canvas.releasePointerCapture(e.pointerId); } catch (err) {}
        };

        window.addEventListener('pointerup', stopDrag);
        window.addEventListener('pointercancel', stopDrag);

        this.canvas.addEventListener('dblclick', () => {
            this.materialMode = (this.materialMode + 1) % 3;
            this.triggerRipple(1.6);
            cyberAudio.play('flip');
        });
    }

    triggerRipple(intensity = 1.0) {
        this.rippleIntensity = Math.min(this.rippleIntensity + intensity, 2.5);
        cyberAudio.play('explode');

        const vis = document.getElementById('orbViscosityVal');
        if (vis) vis.textContent = `${(0.92 + Math.random() * 0.06).toFixed(2)} (RIPPLE)`;
        const freq = document.getElementById('orbFreqVal');
        if (freq) freq.textContent = `${(360 + Math.floor(Math.random() * 80))}Hz SYNC`;
    }

    setMaterial(mode) {
        this.materialMode = mode;
        cyberAudio.play('toggle');
    }

    toggleAutoSpin() {
        this.autoSpin = !this.autoSpin;
        cyberAudio.play('toggle');
        return this.autoSpin;
    }

    resetView() {
        this.rotX = 0.2;
        this.rotY = -0.4;
        this.velX = 0;
        this.velY = 0;
        this.rippleIntensity = 0;
        cyberAudio.play('whoosh');
    }

    render(time) {
        const t = time * 0.001;

        if (!this.isDragging) {
            this.rotY += this.velX * 0.06;
            this.rotX += this.velY * 0.06;
            this.rotX = Math.max(-1.3, Math.min(1.3, this.rotX));

            this.velX *= this.friction;
            this.velY *= this.friction;

            if (this.autoSpin && Math.abs(this.velX) < 0.01 && Math.abs(this.velY) < 0.01) {
                this.rotY += this.autoSpinSpeed;
            }
        }

        this.mouseX += (this.targetMouseX - this.mouseX) * 0.08;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.08;
        this.rippleIntensity *= 0.95;

        if (this.gl && this.program) {
            const gl = this.gl;
            gl.clearColor(0.0, 0.0, 0.0, 0.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height);
            gl.uniform1f(this.uTime, t);
            gl.uniform2f(this.uMouse, this.mouseX, this.mouseY);
            gl.uniform2f(this.uRotation, this.rotX, this.rotY);
            gl.uniform1f(this.uRipple, this.rippleIntensity);
            gl.uniform1i(this.uMaterial, this.materialMode);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
        }

        requestAnimationFrame(this.render);
    }

    init2DFallback() {
        const ctx = this.canvas.getContext('2d');
        if (!ctx) return;
        const animate2D = (time) => {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const cx = this.canvas.width / 2;
            const cy = this.canvas.height / 2;
            const r = Math.min(cx, cy) * 0.6;

            const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.3, '#38bdf8');
            grad.addColorStop(0.8, '#0f172a');
            grad.addColorStop(1, '#020617');

            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();
            requestAnimationFrame(animate2D);
        };
        requestAnimationFrame(animate2D);
    }
}

// 5. 3D Orb Controls & Navbar Actions
function initStageControls(orbEngine) {
    if (!orbEngine) return;

    const matBtns = document.querySelectorAll('.stage-mat-btn');
    matBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            matBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const matId = parseInt(btn.getAttribute('data-mat') || '0', 10);
            orbEngine.setMaterial(matId);
        });
    });

    const btnRipple = document.getElementById('btnOrbRipple');
    if (btnRipple) {
        btnRipple.addEventListener('click', () => {
            orbEngine.triggerRipple(1.8);
        });
    }

    const btnAutoSpin = document.getElementById('btnOrbAutoSpin');
    const autoSpinStatus = document.getElementById('orbAutoSpinStatus');
    if (btnAutoSpin && autoSpinStatus) {
        btnAutoSpin.addEventListener('click', () => {
            const active = orbEngine.toggleAutoSpin();
            btnAutoSpin.classList.toggle('active', active);
            autoSpinStatus.textContent = active ? 'ON' : 'OFF';
        });
    }

    const btnReset = document.getElementById('btnOrbReset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            orbEngine.resetView();
        });
    }

    // Audio toggle button in navbar
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    const soundIcon = document.getElementById('soundIcon');
    const soundLabel = document.getElementById('soundLabel');
    if (soundToggleBtn && soundIcon && soundLabel) {
        soundToggleBtn.addEventListener('click', () => {
            cyberAudio.enabled = !cyberAudio.enabled;
            soundIcon.textContent = cyberAudio.enabled ? '🔊' : '🔇';
            soundLabel.textContent = cyberAudio.enabled ? 'Audio' : 'Mute';
            if (cyberAudio.enabled) cyberAudio.play('click');
        });
    }
}

// 6. Interactive Controls Inside the 3D Models
function initModelInteractions() {
    // Model 1: Clickable Tweak Pills
    const togglePills = document.querySelectorAll('.mock-toggle-pill');
    togglePills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = pill.classList.toggle('active');
            const valEl = pill.querySelector('.toggle-val');
            if (valEl) {
                valEl.textContent = isActive ? 'ACTIVE' : 'OFF';
            }
            cyberAudio.play('toggle');
        });
    });

    // Model 1: Pro Pack Buttons
    const proPackBtns = document.querySelectorAll('.mock-action-btn, .mock-action-btn-outline');
    proPackBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            cyberAudio.play('click');
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => { btn.style.transform = ''; }, 120);
        });
    });

    // Model 2: Rotary Dial
    const dial = document.getElementById('rotaryDial');
    const dialVal = document.getElementById('dialValText');
    if (dial && dialVal) {
        let currentAngle = 0;
        let isDialDragging = false;
        let dialStartY = 0;

        dial.addEventListener('pointerdown', (e) => {
            e.stopPropagation();
            isDialDragging = true;
            dialStartY = e.clientY;
            dial.setPointerCapture(e.pointerId);
            cyberAudio.play('click');
        });

        window.addEventListener('pointermove', (e) => {
            if (!isDialDragging) return;
            const deltaY = dialStartY - e.clientY;
            currentAngle += deltaY * 2.5;
            dialStartY = e.clientY;
            dial.style.transform = `rotate(${currentAngle}deg)`;

            // Map angle to 0.5ms - 8.0ms
            const norm = Math.abs(currentAngle % 360) / 360;
            const ms = (0.5 + norm * 7.5).toFixed(1);
            dialVal.textContent = ms;
        });

        const stopDial = (e) => {
            if (!isDialDragging) return;
            isDialDragging = false;
            try { dial.releasePointerCapture(e.pointerId); } catch (err) {}
        };
        window.addEventListener('pointerup', stopDial);
        window.addEventListener('pointercancel', stopDial);
    }

    // Model 2: HUD Oscilloscope Animation
    const scopeCanvas = document.getElementById('hudOscilloscope');
    if (scopeCanvas) {
        const sCtx = scopeCanvas.getContext('2d');
        let offset = 0;

        function drawScope() {
            if (!sCtx) return;
            sCtx.fillStyle = '#020305';
            sCtx.fillRect(0, 0, scopeCanvas.width, scopeCanvas.height);

            // Grid lines
            sCtx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
            sCtx.lineWidth = 1;
            sCtx.beginPath();
            for (let x = 0; x < scopeCanvas.width; x += 25) {
                sCtx.moveTo(x, 0);
                sCtx.lineTo(x, scopeCanvas.height);
            }
            for (let y = 0; y < scopeCanvas.height; y += 20) {
                sCtx.moveTo(0, y);
                sCtx.lineTo(scopeCanvas.width, y);
            }
            sCtx.stroke();

            // Frametime waveform
            sCtx.strokeStyle = '#10b981';
            sCtx.shadowColor = '#10b981';
            sCtx.shadowBlur = 8;
            sCtx.lineWidth = 2;
            sCtx.beginPath();

            const midY = scopeCanvas.height / 2;
            for (let x = 0; x < scopeCanvas.width; x++) {
                const wave1 = Math.sin((x + offset) * 0.08) * 14;
                const wave2 = Math.cos((x + offset * 1.5) * 0.04) * 8;
                const y = midY + wave1 + wave2;
                if (x === 0) sCtx.moveTo(x, y);
                else sCtx.lineTo(x, y);
            }
            sCtx.stroke();
            sCtx.shadowBlur = 0;

            offset += 2.2;
            requestAnimationFrame(drawScope);
        }
        requestAnimationFrame(drawScope);
    }

    // Model 2: HUD Switches
    const hudSwitches = document.querySelectorAll('.hud-switch-btn');
    hudSwitches.forEach(sw => {
        sw.addEventListener('click', (e) => {
            e.stopPropagation();
            sw.classList.toggle('active');
            cyberAudio.play('toggle');
        });
    });
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    startMockTelemetry();
    startActiveGamersTicker();

    const aiInput = document.getElementById('aiDemoInput');
    if (aiInput) {
        aiInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendDemoChat();
            }
        });
    }

    // Initialize creative 3D features
    initSpaceNebulaCanvas();
    initCursorSpotlight();
    const orbEngine = new LiquidChromeEngine();
    initStageControls(orbEngine);
    initModelInteractions();
});
