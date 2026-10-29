# Profit Pros website (profitpros.trade)

Static site: `index.html`, `styles.css`, `script.js`, and `media/` (web-compressed clips from
`Videos\mnq-clips` plus the logo). No build step. Deploy the folder to any static host
(Netlify, Cloudflare Pages, GitHub Pages) and point profitpros.trade at it.

Preview locally:

    python -m http.server 8765

To swap a clip, re-encode it the same way:

    ffmpeg -i in.mp4 -vf scale=-2:960 -c:v libx264 -crf 27 -c:a aac -b:a 96k -movflags +faststart media/name.mp4
    ffmpeg -ss 1.5 -i media/name.mp4 -frames:v 1 -q:v 4 media/name.jpg

To do: put your name in the About section (search for `[Your Name]`).
