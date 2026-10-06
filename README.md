# RAJIB TV
Static IPTV site (HTML/CSS/JS). Works on GitHub Pages — no backend.

## Update the playlist
Open `script.js`, find `// RAJIB TV PLAYLIST`, and replace the text inside `PLAYLIST` with any M3U/M3U8 (full URLs work as-is).
Channels, categories, search, favorites and recents rebuild automatically.

## Deploy on GitHub Pages
1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `assets/`, `README.md`.
3. Open **Settings → Pages**.
4. Under *Build and deployment*, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Click **Save**.
6. Open the URL GitHub shows (`https://USERNAME.github.io/REPO/`).

## Notes
- Your playlist has `#EXTVLCOPT:http-referrer` lines. Browsers cannot send a custom Referer, and the streams use `wmsAuthSign=` tokens, so some may be blocked by CORS/hotlink checks or expire. Those channels show "Unable to play this stream". This is a limit of static hosting, not a bug.
- GitHub Pages is HTTPS; HTTP-only streams will be blocked as mixed content.
