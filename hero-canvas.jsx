/* Audax OS site · living-art landing hero
   A self-organising node network (Game-of-Life rules) composited with a
   `difference` blend over a slow, drifting sumi-e wash (WebGL). The wash
   ignores the cursor; only the foreground network reacts. Falls back to a
   static gradient when prefers-reduced-motion is set, and pauses its render
   loop when scrolled off-screen. Landing (Why) page only. */

const LivingHero = ({ children, minHeight = '92vh' }) => {
  const hostRef = React.useRef(null);
  const washRef = React.useRef(null);
  const netRef = React.useRef(null);

  React.useEffect(() => {
    const host = hostRef.current, washC = washRef.current, netC = netRef.current;
    if (!host || !washC || !netC) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // CSS static gradient stands in

    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    const m = { px: -999, py: -999 };
    const onMove = (e) => { const r = host.getBoundingClientRect(); m.px = e.clientX - r.left; m.py = e.clientY - r.top; };
    const onLeave = () => { m.px = -999; m.py = -999; };
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);

    /* ---- layer 1: slow wash (WebGL, no pointer) ---- */
    let washRender = null, washResize = null;
    const gl = washC.getContext('webgl', { antialias: false, alpha: false });
    if (gl) {
      const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
      const fs = 'precision highp float;uniform float u_time;uniform vec2 u_res;' +
        'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}' +
        'float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);' +
        'return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);}' +
        'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p*=2.0;a*=.5;}return v;}' +
        'void main(){vec2 uv=gl_FragCoord.xy/u_res.xy;vec2 p=uv*vec2(1.4,1.9);' +
        'float t=u_time*0.04;' +
        'vec2 q=vec2(fbm(p+vec2(0.0,t)),fbm(p+vec2(3.1,-t*0.7)));' +
        'float n=fbm(p+1.3*q);' +
        'float band=smoothstep(0.05,1.05,uv.y+0.10*sin(uv.x*1.6+t)+0.42*(n-0.5));' +
        'vec3 ink=vec3(0.040,0.110,0.075),forest=vec3(0.122,0.302,0.180),' +
        'sage=vec3(0.420,0.643,0.486),mist=vec3(0.784,0.859,0.788),parch=vec3(0.984,0.980,0.953);' +
        'vec3 col=mix(ink,forest,smoothstep(0.0,0.34,band));' +
        'col=mix(col,sage,smoothstep(0.3,0.62,band));' +
        'col=mix(col,mist,smoothstep(0.6,0.86,band));' +
        'col=mix(col,parch,smoothstep(0.86,1.0,band));' +
        'gl_FragColor=vec4(col,1.0);}';
      const sh = (type, src) => { const o = gl.createShader(type); gl.shaderSource(o, src); gl.compileShader(o); return o; };
      const prog = gl.createProgram();
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
      gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(prog); gl.useProgram(prog);
      const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const uT = gl.getUniformLocation(prog, 'u_time'), uR = gl.getUniformLocation(prog, 'u_res');
      washResize = () => { washC.width = washC.clientWidth * DPR; washC.height = washC.clientHeight * DPR; gl.viewport(0, 0, washC.width, washC.height); };
      washResize();
      washRender = (t) => { gl.uniform1f(uT, t); gl.uniform2f(uR, washC.width, washC.height); gl.drawArrays(gl.TRIANGLES, 0, 3); };
    } else {
      washC.style.background = 'linear-gradient(180deg,#0E2419,#1F4D2E 40%,#C8DBC9 88%,#FBFAF3)';
    }

    /* ---- layer 2: Game-of-Life-inspired network (canvas 2D) ---- */
    const ctx = netC.getContext('2d');
    const LINK = 118, MAXN = 95, MINN = 30;
    let W, H, pts = [], pulses = [];
    const node = (x, y, e) => ({ x, y, vx: 0, vy: 0, energy: e == null ? 0.7 : e, age: 0, nb: 0 });
    const netResize = () => { W = netC.clientWidth; H = netC.clientHeight; netC.width = W * DPR; netC.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0); };
    netResize();
    for (let i = 0; i < 60; i++) pts.push(node(Math.random() * W, Math.random() * H, 0.5 + Math.random() * 0.5));
    const flow = (x, y, t) => Math.sin(x * 0.004 + t) * Math.cos(y * 0.005 - t * 0.7) * Math.PI;

    const lifeTick = () => {
      const newborns = [];
      for (const p of pts) {
        if (p.nb < 2) p.energy -= 0.32;
        else if (p.nb <= 3) {
          p.energy += 0.24;
          if (p.energy > 0.65 && pts.length + newborns.length < MAXN && Math.random() < 0.10) {
            let best = null, bd = 1e9;
            for (const q of pts) { if (q === p) continue; const d = Math.hypot(q.x - p.x, q.y - p.y); if (d < LINK && d < bd) { bd = d; best = q; } }
            if (best) { newborns.push(node((p.x + best.x) / 2, (p.y + best.y) / 2, 0.45)); p.energy -= 0.18; }
          }
        } else p.energy -= 0.28;
        p.energy = Math.max(0, Math.min(1, p.energy));
      }
      pts = pts.filter(p => p.energy > 0.02);
      for (const n of newborns) pts.push(n);
      while (pts.length < MINN) pts.push(node(Math.random() * W, Math.random() * H, 0.4 + Math.random() * 0.3));
      for (let k = 0; k < 6; k++) {
        const a = pts[(Math.random() * pts.length) | 0];
        const cand = [];
        for (const b of pts) { if (b !== a && Math.hypot(b.x - a.x, b.y - a.y) < LINK) cand.push(b); }
        if (cand.length) { const b = cand[(Math.random() * cand.length) | 0]; pulses.push({ a, b, t: 0, sp: 0.02 + Math.random() * 0.02 }); }
      }
    };

    let acc = 0;
    const netRender = (t) => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) p.nb = 0;
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < LINK) {
          a.nb++; b.nb++;
          const al = 0.5 * (1 - d / LINK) * Math.min(a.energy, b.energy) + 0.05;
          ctx.strokeStyle = 'rgba(255,255,255,' + al + ')'; ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      if (++acc >= 26) { lifeTick(); acc = 0; }
      for (const p of pts) {
        const ang = flow(p.x, p.y, t); p.vx += Math.cos(ang) * 0.05; p.vy += Math.sin(ang) * 0.05;
        if (m.px > -900) { const mdx = m.px - p.x, mdy = m.py - p.y, md = Math.hypot(mdx, mdy); if (md < 190) { p.vx += mdx / md * 0.5; p.vy += mdy / md * 0.5; } }
        p.vx *= 0.93; p.vy *= 0.93; p.x += p.vx; p.y += p.vy; p.age++;
        if (p.x < 0) p.x += W; if (p.x > W) p.x -= W; if (p.y < 0) p.y += H; if (p.y > H) p.y -= H;
      }
      pulses = pulses.filter(pl => {
        if (pts.indexOf(pl.a) < 0 || pts.indexOf(pl.b) < 0) return false;
        pl.t += pl.sp; const x = pl.a.x + (pl.b.x - pl.a.x) * pl.t, y = pl.a.y + (pl.b.y - pl.a.y) * pl.t;
        ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.beginPath(); ctx.arc(x, y, 1.8, 0, 7); ctx.fill();
        if (pl.t >= 1) { pl.b.energy = Math.min(1, pl.b.energy + 0.06); pl.a.energy = Math.max(0, pl.a.energy - 0.03); return false; }
        return true;
      });
      for (const p of pts) {
        const r = 1 + p.energy * 3.2, a = Math.min(1, 0.2 + p.energy * 0.75);
        ctx.fillStyle = 'rgba(255,255,255,' + a + ')'; ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 7); ctx.fill();
        if (p.age < 22) { const rr = r + (22 - p.age) * 0.9; ctx.strokeStyle = 'rgba(255,255,255,' + (0.5 * (1 - p.age / 22)) + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(p.x, p.y, rr, 0, 7); ctx.stroke(); }
      }
    };

    const onResize = () => { washResize && washResize(); netResize(); };
    window.addEventListener('resize', onResize);

    let raf = 0, running = false; const t0 = performance.now();
    const loop = () => { const t = (performance.now() - t0) / 1000; if (washRender) washRender(t); netRender(t); raf = requestAnimationFrame(loop); };
    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(loop); } };
    const stop = () => { if (running) { running = false; cancelAnimationFrame(raf); } };
    const io = new IntersectionObserver((es) => { es[0].isIntersecting ? start() : stop(); }, { threshold: 0 });
    io.observe(host);
    start();

    return () => {
      stop(); io.disconnect();
      window.removeEventListener('resize', onResize);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section ref={hostRef} className="living-hero" style={{ minHeight }}>
      <canvas ref={washRef} className="lh-wash"></canvas>
      <canvas ref={netRef} className="lh-net"></canvas>
      <div className="hero-fade"></div>
      <div className="container">{children}</div>
    </section>
  );
};

Object.assign(window, { LivingHero });
