// The two display toggles. They render as plain buttons, which the CSS hides
// until the script in the layout's <head> marks the page as having JavaScript
// (data-js on <html>), before first paint. The script at the end of the layout
// wires them up and remembers the choice.
// They sit before <main> as the page's banner, since they aren't page content.
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
