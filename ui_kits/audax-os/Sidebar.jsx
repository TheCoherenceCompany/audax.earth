/* Audax OS kit · Sidebar
   Left rail: brand, view nav, circles list, user. */

const Sidebar = ({ view, onView, circles }) => {
  const views = [
    { key: 'today',    label: 'Today',     icon: 'sun' },
    { key: 'circles',  label: 'Circles',   icon: 'users-round' },
    { key: 'practice', label: 'Practice',  icon: 'compass' },
    { key: 'library',  label: 'Library',   icon: 'book-open' },
    { key: 'pulse',    label: 'Pulse',     icon: 'orbit' }
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Logo size={28} />
        <span className="sidebar-brand-text">Audax OS</span>
      </div>

      <div className="side-section">
        {views.map(v => (
          <button
            key={v.key}
            className={`side-item${view === v.key ? ' active' : ''}`}
            onClick={() => onView(v.key)}
            type="button"
          >
            <i data-lucide={v.icon}></i>
            <span>{v.label}</span>
            {v.key === 'today' && <span className="count">3</span>}
            {v.key === 'circles' && <span className="count">{circles.length}</span>}
          </button>
        ))}
      </div>

      <div className="side-section">
        <h6>Circles</h6>
        {circles.map(c => (
          <div key={c.id} className="side-circle">
            <span className={`side-circle-dot ${c.status === 'now' ? 'lichen' : c.status === 'held' ? 'ink' : ''}`}></span>
            <span>{c.name}</span>
          </div>
        ))}
      </div>

      <div className="side-foot">
        <div className="side-user">
          <div className="side-avatar">MC</div>
          <div>
            <div className="side-user-name">Mira Castelletti</div>
            <div className="side-user-meta">Stewards · field-notes</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
