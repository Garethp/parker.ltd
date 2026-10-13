// The share card that link previews show (public/og.png, 1000x630), drawn as a
// JSX element. scripts/make-og.ts renders it and saves a screenshot. If you
// change the size, update og:image:width and og:image:height in
// src/layouts/Base.astro; if you change the text, update og:image:alt there too.
export function ShareImage({ font }: { font: string }) {
  const css = `
    @font-face { font-family: Mono; font-weight: 200 800; src: url(${font}) format("woff2"); }
    html, body { margin: 0; }
    body { width: 1000px; height: 630px; background: #111318; display: grid; align-content: center; padding: 0 96px; box-sizing: border-box; font-family: Mono, monospace; }
    .big { color: #eef0f4; font-size: 84px; font-weight: 500; letter-spacing: -0.01em; }
    .sub { color: #7cc0ff; font-size: 36px; margin-top: 28px; }
    .domain { color: #b9bfcc; font-size: 28px; position: absolute; left: 96px; bottom: 64px; }
  `;
  return (
    <html lang="en-GB">
      <head>
        <meta charSet="utf-8" />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: our own CSS, which React would otherwise escape */}
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div className="big">&lt;GarethParker</div>
        <div className="sub">&nbsp;&nbsp;&nbsp;&nbsp;role="Principal Engineer"</div>
        <div className="sub">&nbsp;&nbsp;&nbsp;&nbsp;since=&#123;2010&#125;</div>
        <div className="sub">&nbsp;&nbsp;&nbsp;&nbsp;testDriven</div>
        <div className="domain">parker.ltd</div>
        <div className="big">/&gt;</div>
      </body>
    </html>
  );
}
