/* Audax OS · App
   The workspace shell: sidebar · main · agent rail. */

const CIRCLES = [
  {
    id: 'stewards', name: 'Stewards', tag: 'Governance',
    dek: 'Six humans, two agents. Holding the long arc of the network.',
    art: '../../assets/accent-images/The_Gathering_httpss.mj.runUUrabdnEXiY_abstract_landscape_cal_c9bf6229-f6fd-4195-a3ed-3d795594174d_0.png',
    humans: 6, agents: 2, met: 'met Mon',
    status: 'on', lichen: false,
    pulse: ['on','on','','on','','on','now'],
    who: [{ name: 'M' }, { name: 'K' }, { name: 'A' }, { name: 'I', agent: true }]
  },
  {
    id: 'field-notes', name: 'Field Notes', tag: 'Practice',
    dek: 'A working circle for the agents-in-research. The slow journal.',
    art: '../../assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_144cfefb-78ad-48eb-a73c-6baaff85c98f_0.png',
    humans: 4, agents: 1, met: 'met today',
    status: 'now', lichen: true,
    pulse: ['','on','on','on','','on','now'],
    who: [{ name: 'T' }, { name: 'M' }, { name: 'I', agent: true }]
  },
  {
    id: 'gathering', name: 'The Gathering', tag: 'Network',
    dek: 'A monthly ritual for the wider network — quiet, well-prepared.',
    art: '../../assets/accent-images/The_Gathering_httpss.mj.runN91XiUaHp8U_httpss.mj.runymEnd1koJ_35f5c6fc-fc1b-438c-b64e-1f39d340862f_1.png',
    humans: 18, agents: 3, met: 'met Apr 4',
    status: 'held',
    pulse: ['on','','on','','','','on'],
    who: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'I', agent: true }]
  },
  {
    id: 'mycelial', name: 'Mycelial', tag: 'Ecosystem',
    dek: 'Cross-network connectors. Quietly weaving threads between circles.',
    art: '../../assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_0.png',
    humans: 9, agents: 4, met: 'met Mon',
    status: 'on',
    pulse: ['on','on','on','on','','on','on'],
    who: [{ name: 'K' }, { name: 'L' }, { name: 'I', agent: true }, { name: 'R', agent: true }]
  }
];

const INITIAL_MESSAGES = [
  {
    from: 'agent', at: '9:12',
    body: 'good morning. you held three threads open yesterday \u2014 the <em>field notes brief</em>, the steward meeting, and the practice review. shall we look at them in that order?'
  },
  {
    from: 'user', at: '9:14',
    body: 'start with the practice review. just the shape of it.'
  },
  {
    from: 'agent', at: '9:14',
    body: 'good. it has three pieces of evidence and one open question. the question is whether the april cycle counts as a full practice review or a partial one. take a minute with that before i load the evidence.'
  }
];

const App = () => {
  const [view, setView] = React.useState('today');
  const [railCollapsed, setRailCollapsed] = React.useState(false);
  const [messages, setMessages] = React.useState(INITIAL_MESSAGES);

  // Always re-render lucide icons after React paints.
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  const send = (text) => {
    const now = new Date();
    const at = `${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;
    setMessages((m) => [...m, { from: 'user', body: text, at }]);
    // Tiny fake agent reply after a beat
    setTimeout(() => {
      const replies = [
        'noted. i\u2019ll hold that.',
        'good. let me sit with that for a moment.',
        'i can pull what i have on that \u2014 it\u2019s a small read.',
        'understood. shall i weave it into the next circle?'
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      const t = new Date();
      const at2 = `${t.getHours()}:${String(t.getMinutes()).padStart(2,'0')}`;
      setMessages((m) => [...m, { from: 'agent', body: reply, at: at2 }]);
    }, 900);
  };

  const crumbForView = {
    today:    { eyebrow: 'Tuesday',    path: ['Today'] },
    circles:  { eyebrow: 'Network',    path: ['Circles', 'All'] },
    practice: { eyebrow: 'Practice',   path: ['Practice'] },
    library:  { eyebrow: 'Library',    path: ['Library'] },
    pulse:    { eyebrow: 'Network',    path: ['Pulse'] }
  };

  let body;
  if (view === 'today') {
    body = <TodayView circles={CIRCLES} onOpenCircle={() => setView('circles')} />;
  } else if (view === 'circles') {
    body = <CirclesView circles={CIRCLES} />;
  } else if (view === 'practice') {
    body = <PlaceholderView
      eyebrow="The practice"
      title="A long arc, <em>tended weekly.</em>"
      body="The practice view holds your weekly rhythm — reflections, evidence, and the threads the agents have been weaving on your behalf. (Placeholder in the kit; the workspace renders the full surface here.)"
      art="../../assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_3741fb5e-98d9-4e2e-9d21-50390f539a13_1.png"
    />;
  } else if (view === 'library') {
    body = <PlaceholderView
      eyebrow="Library"
      title="Everything <em>held in common.</em>"
      body="Documents, notes, recordings, and the agent's distillations of them. Searchable by intent, not just keyword. (Placeholder in the kit.)"
      art="../../assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_087652a0-f921-4a1b-a659-60280f755139_1.png"
    />;
  } else {
    body = <PlaceholderView
      eyebrow="Pulse"
      title="The network, <em>breathing.</em>"
      body="A quiet, ambient read on every circle in the network — who is meeting, what is alive, what is held. Not a dashboard; a presence. (Placeholder in the kit.)"
      art="../../assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_ca2102c1-32f3-49e2-811c-9f046636f888_3.png"
    />;
  }

  return (
    <div className={`shell${railCollapsed ? ' rail-collapsed' : ''}`}>
      <Sidebar view={view} onView={setView} circles={CIRCLES} />
      <main className="main">
        <Topbar
          crumb={crumbForView[view]}
          onToggleRail={() => setRailCollapsed(c => !c)}
        />
        {body}
      </main>
      <AgentRail
        collapsed={railCollapsed}
        onToggle={() => setRailCollapsed(c => !c)}
        messages={messages}
        onSend={send}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
