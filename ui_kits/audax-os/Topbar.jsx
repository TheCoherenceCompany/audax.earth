/* Audax OS kit · Topbar
   Sticky breadcrumb / view label, search, settings, agent toggle. */

const Topbar = ({ crumb, onToggleRail, onCmdK }) => (
  <header className="topbar">
    <div className="crumb">
      <span className="crumb-eyebrow">{crumb.eyebrow}</span>
      {crumb.path.map((p, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          <span className={i === crumb.path.length - 1 ? 'last' : ''}>{p}</span>
        </React.Fragment>
      ))}
    </div>
    <div className="topbar-right">
      <IconBtn icon="search" title="Search (⌘K)" onClick={onCmdK} />
      <IconBtn icon="bell" title="Notifications" />
      <IconBtn icon="settings" title="Settings" />
      <IconBtn icon="panel-right" title="Toggle agent" onClick={onToggleRail} />
    </div>
  </header>
);

window.Topbar = Topbar;
