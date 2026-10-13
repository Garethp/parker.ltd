import { Controls } from "./Controls";
import { Footer } from "./Footer";

export function NotFound() {
  return (
    <div className="page">
      <Controls />
      <main id="main" className="stack">
        <header className="intro">
          <div>
            <h1>Page not found</h1>
            <p className="pitch">There's nothing at this address. It may have moved, or the link may have a typo.</p>
            <ul className="actions">
              <li>
                <a className="primary" href="/">
                  Go to the home page
                </a>
              </li>
            </ul>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
}
