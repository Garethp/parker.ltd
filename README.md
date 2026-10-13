# parker.ltd
Welcome! This is the repository for my personal site, [parker.ltd](https://parker.ltd). I've got strong opinions on how
to build good software for various types of applications and when it comes to websites I believe foremost in accessibility
and performance. For that reason I'm using [Astro](https://astro.build/) to build static HTML out of the React
TypeScript source while targeting WCAG 2.2 AA standards while trying to achieve as much of AAA as reasonable.

## Accessibility
My personal philosophy is that accessibility is as core to functionality as rendering the page. If your website is read
out of order in a screen reader, it's similar to your visual rendering displaying components in the wrong places. If your
website is not keyboard navigable, it's a problem on the same level as a user not being able to use their mouse. For that
reason this site should meet WCAG 2.2 AA standards with the only exception holding me back from AAA is the
requirement for plain-language English (3.1.5), which can be difficult to word smoothly when describing a heavily technical
area.

While it doesn't cover all the accessibility checks, I don't think you can easily cover them all with automated tests, 
I do run automated accessibility tests on this site pre-deployment to verify at least what I can. You can find the tests
in the [`e2e/`](e2e/) directory.

## Performance
I'm a firm believer in front-end performance. A lot of the time your first stop will be to reduce bundle size (reducing
not just the time to download the bundle but also the time to load and parse it into V8). Where possible I like to have
Server Side Rendering that's progressively enhanced into functional Single Page Applications, allowing for a quick time
to first paint while also having a large degree of freedom in client-side code. That doesn't mean Next.js, it's a technique
that I've been applying since long before NextJS was a thing.

With that said, I lucked out in this case because I can just render the entire website in static HTML. This is the exact
kind of use-case that I believe best benefits from simplicity in user-interaction and design. So why overcomplicate it?
In fact with this approach, and hosting from GitHub Pages, I've got a TTFP of (x)ms.