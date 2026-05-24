/* Audax OS kit · primitives
   Small reusable atoms. Exported to window for sibling JSX files. */

const Logo = ({ size = 28, variant = "black" }) => {
  const src = variant === "white"
    ? "../../assets/audax-os-logo-white-512.png"
    : size <= 32
      ? "../../assets/audax-os-logo-128.png"
      : size <= 64
        ? "../../assets/audax-os-logo-256.png"
        : "../../assets/audax-os-logo-512.png";
  return <img src={src} width={size} height={size} alt="Audax OS" style={{ display: 'block' }} />;
};

const Eyebrow = ({ children, color }) => (
  <div className="section-eyebrow" style={color ? { color } : null}>{children}</div>
);

const Button = ({ children, variant = "primary", size, icon, iconLeft, onClick, disabled, type = "button" }) => (
  <button
    type={type}
    className={`btn btn-${variant}${size === "sm" ? " btn-sm" : ""}`}
    onClick={onClick}
    disabled={disabled}
  >
    {iconLeft && <i data-lucide={iconLeft}></i>}
    <span>{children}</span>
    {icon && <i data-lucide={icon}></i>}
  </button>
);

const IconBtn = ({ icon, onClick, title }) => (
  <button className="icon-btn" onClick={onClick} title={title} type="button">
    <i data-lucide={icon}></i>
  </button>
);

const Who = ({ people }) => (
  <span className="who">
    {people.map((p, i) =>
      p.agent
        ? <span key={i} className="agent" title={p.name}>·</span>
        : p.src
          ? <img key={i} src={p.src} alt={p.name} title={p.name} />
          : <span key={i} title={p.name}>{(p.name || '?')[0]}</span>
    )}
  </span>
);

Object.assign(window, { Logo, Eyebrow, Button, IconBtn, Who });
