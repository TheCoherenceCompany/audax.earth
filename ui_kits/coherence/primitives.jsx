/* Coherence UI Kit · primitives
   Tiny reusable components shared across the kit.
   Exported to window for sibling JSX files. */

const Logo = ({ size = 32, variant = "black" }) => {
  const src = variant === "white"
    ? "../../assets/coherence-logo-white.svg"
    : variant === "teal"
      ? "../../assets/coherence-logo-teal.svg"
      : "../../assets/coherence-logo.svg";
  return <img src={src} width={size} height={size} alt="The Coherence Company" />;
};

const Eyebrow = ({ children, color }) => (
  <div className="eyebrow" style={color ? { color } : null}>{children}</div>
);

const Button = ({ children, variant = "primary", size, icon, onClick, disabled, type = "button" }) => (
  <button
    type={type}
    className={`btn btn-${variant}${size === "sm" ? " btn-sm" : ""}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
    {icon && <i data-lucide={icon}></i>}
  </button>
);

const Chip = ({ children, active, onClick }) => (
  <button
    className={`chip${active ? " active" : ""}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

const Field = ({ label, type = "text", value, onChange, placeholder, multiline, rows = 4, name }) => (
  <div className="field">
    <label htmlFor={name}>{label}</label>
    {multiline ? (
      <textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} rows={rows} />
    ) : (
      <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    )}
  </div>
);

Object.assign(window, { Logo, Eyebrow, Button, Chip, Field });
