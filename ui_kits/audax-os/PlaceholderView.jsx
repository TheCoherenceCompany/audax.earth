/* Audax OS kit · simple placeholder views for tabs that aren't fully built.
   Each one keeps the brand vocabulary so the kit still feels whole. */

const PlaceholderView = ({ eyebrow, title, body, art }) => (
  <div className="circles-view">
    <div className="cv-header">
      <div className="section-eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</div>
      <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
      <p>{body}</p>
    </div>
    {art && (
      <div style={{
        marginTop: 32,
        height: 320,
        borderRadius: 16,
        background: `url(${art}) center/cover no-repeat`,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid var(--border-1)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 50%, rgba(20,19,14,0.35) 100%)'
        }}></div>
      </div>
    )}
  </div>
);

window.PlaceholderView = PlaceholderView;
