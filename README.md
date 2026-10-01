# Dawson Richie portfolio

A static HTML, CSS, and JavaScript portfolio. No npm, framework, or build step.

## Open in Visual Studio Code

1. Extract this folder and open it in VS Code.
2. Open `index.html` in a browser, or use the VS Code Live Server extension.
3. Keep the folder structure intact. All pages share `styles.css` and `script.js`.

## Files

- `index.html`: homepage
- `work.html`: selected work
- `flicker.html`: Flicker (2025), credits and Vimeo player
- `no-soliciting.html`: No Soliciting (2026), rotating crew roles and Vimeo player
- `about.html`: biography and production focus
- `contact.html`: email contact and copy button
- `styles.css`: shared responsive styles
- `script.js`: mobile navigation and email copy interaction
- `assets/favicon.svg`: site icon

## GitHub Pages

Upload the contents of this folder to your repository, with `index.html` at the repository root. In repository Settings → Pages, select Deploy from a branch and your main branch / root. Relative links support both repository project URLs and a custom domain.

Only configure `dawsonrichie.com` as a custom domain after you own it and are ready to connect DNS. This package does not register a domain or publish the website.

## Video and images

Vimeo embeds use the supplied video IDs. Each player includes a Watch on Vimeo fallback. Vimeo privacy settings must allow embedding on the final domain. Playback also depends on the videos remaining available.

Project images currently use the actual Vimeo poster URLs. These are external images. For permanent control, download approved film frames to `assets/` and replace each image `src` with a local path. The about page uses a typographic monogram until a portrait is available.

## Add another project

Copy a film page, update its title, description, Vimeo ID, credits, and year. Add its card to `work.html` and optionally `index.html`. Update the next-film links as desired.

## Content

Flicker: writing, directing, cinematography, lighting, editing; independent production.
No Soliciting: directing, cinematography, lighting during different portions of a collaborative classroom shoot with rotating roles.
Contact: ddrichie@iu.edu.
