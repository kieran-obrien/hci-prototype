export default function ControlsNode() {
  const bindings = [
    { action: "Move", keys: ["W", "A", "S", "D"] },
    { action: "Interact", keys: ["E"] },
    { action: "Jump", keys: ["Space"] },
    { action: "Pause", keys: ["Esc"] },
    { action: "Map", keys: ["M"] },
  ];

  return (
    <div className="mt-6">
      <h4 className="font-bold mb-3">Controls</h4>
      <div className="divider"></div>
      <div className="card bg-base-100 p-3 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {bindings.map((b) => (
            <div key={b.action} className="flex items-center gap-3">
              <div className="w-28 text-sm opacity-80">{b.action}</div>
              <div className="flex items-center gap-2">
                {b.keys.map((k) => (
                  <kbd key={k} className="kbd kbd-sm" aria-hidden>
                    {k}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs opacity-60 mt-3">
          You can rebind keys in-game (not implemented in prototype).
        </p>
      </div>
    </div>
  );
}
