# Rakhi Journey — Dev & Four Sisters

One cinematic Rakshabandhan website, with a personal link for each sister so
Yashika, Riddhi, Bhakti, and Shraddha each only ever see their own letter.

## Deploy (Vercel, free)
1. Go to vercel.com, sign up/log in, click **Add New → Project**.
2. Import this folder (drag-and-drop it, or push it to a GitHub repo first and import that repo — either works).
3. Before deploying, open **Environment Variables** and add:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
4. Click Deploy. You'll get a URL like `https://your-project.vercel.app`.

`api/order.js` automatically becomes a serverless function — no extra setup needed.

## Sending each sister her own link
Don't share the plain URL — share it with `?to=<name>` at the end so it opens
straight into her own story and letter, skipping the name picker entirely:

- `https://your-project.vercel.app/?to=yashika`
- `https://your-project.vercel.app/?to=riddhi`
- `https://your-project.vercel.app/?to=bhakti`
- `https://your-project.vercel.app/?to=shraddha`

With these links, each sister never sees the picker screen or the other
three names — it's her letter and her flow only. (The plain URL with no
`?to=` still shows the name picker as a fallback, in case you ever need it.)

## On phone
The site is built mobile-first — full-screen scenes, no pinch-zooming
needed, text and buttons resize automatically for narrower screens. Just
open the link in the phone's browser (Chrome/Safari); no app needed.

## Flow
1. Sister's own story opens directly (bike ride → distance → memories → arrival → tying the rakhi)
2. Full personal letter from Dev, unique per sister
3. Gift step, branches by sister:
   - **Yashika, Riddhi, Bhakti** → pick two chocolates (hidden ₹200 budget) → delivery address form → confirmation
   - **Shraddha** → no chocolates; just a text box to send Dev a blessing → confirmation

## Editing a sister's letter
Open `script.js` and edit the `SISTERS` object near the top — each entry has
a `letter` array (one string per paragraph) and a `signoff` line. Set
`hasGift: false` to route a sister to the blessing-only flow instead of the
chocolate/delivery flow.

The chocolate prices are used only by the server/client to enforce the hidden ₹200 limit; they are never displayed in the UI. Blessing messages skip the address form entirely and go straight to Telegram.
