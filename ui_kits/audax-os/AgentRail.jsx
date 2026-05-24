/* Audax OS kit · AgentRail
   Right rail. The agent (Iris) is a persistent presence.
   Collapsed → just the sigil. Expanded → conversation + composer. */

const AgentRail = ({ collapsed, onToggle, messages, onSend }) => {
  const [draft, setDraft] = React.useState('');
  const taRef = React.useRef(null);
  const send = () => {
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft('');
  };
  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  // Auto-resize textarea
  React.useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(140, el.scrollHeight) + 'px';
  }, [draft]);

  // Keep the stream pinned to the bottom
  const streamRef = React.useRef(null);
  React.useEffect(() => {
    const el = streamRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  if (collapsed) {
    return (
      <aside className="rail collapsed">
        <IconBtn icon="panel-left" title="Open agent" onClick={onToggle} />
      </aside>
    );
  }

  return (
    <aside className="rail">
      <div className="rail-head">
        <div className="rail-agent">
          <Logo size={24} />
          <div>
            <div className="rail-agent-name">Iris</div>
            <div className="rail-agent-meta">agent · listening</div>
          </div>
        </div>
        <IconBtn icon="panel-right" title="Collapse" onClick={onToggle} />
      </div>

      <div className="rail-stream" ref={streamRef}>
        {messages.map((m, i) => (
          <div key={i} className={`bubble-row ${m.from === 'agent' ? 'agent' : 'user'}`}>
            {m.from === 'agent' && (
              <div className="bubble-meta">
                <Logo size={12} />
                <span className="name">Iris</span>
                <span style={{ color: 'var(--ink-400)', fontWeight: 400, letterSpacing: '0.04em' }}>· {m.at}</span>
              </div>
            )}
            <div
              className={`bubble${m.from === 'agent' ? ' agent' : ''}`}
              dangerouslySetInnerHTML={{ __html: m.body }}
            />
          </div>
        ))}
      </div>

      <div className="composer">
        <div className="composer-box">
          <textarea
            ref={taRef}
            placeholder="ask iris, or hold a thought…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKey}
            rows={1}
          />
          <div className="composer-foot">
            <div className="composer-tools">
              <IconBtn icon="paperclip" title="Attach" />
              <IconBtn icon="quote" title="Quote thread" />
            </div>
            <button className="composer-send" onClick={send} disabled={!draft.trim()}>
              <span>Send</span>
              <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

window.AgentRail = AgentRail;
