export function Controls() {
  return (
    <header className="topbar">
      <button type="button" id="comfort" aria-pressed="false">
        Reading comfort
      </button>
      <button type="button" id="theme" aria-pressed="true">
        Dark mode
      </button>
    </header>
  );
}
