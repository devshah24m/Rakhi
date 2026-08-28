# Happy Rakshabandhan 🎁

A small site: each sister types her name, sees the message you wrote for her,
then picks one chocolate (every option is ₹200 or under — the price is never
shown). Her pick + delivery address land in your Telegram.

## 1. Fill in your content

- **`data.js`** — add one entry per sister: `name` (what she'll type) and
  `message` (what you write for her). Two example entries are in there —
  replace or delete them. She types her own delivery address on the gift
  page, so you don't set it here.
- **`chocolates.js`** — the gift list. Two examples are filled in with real
  products; edit freely, just keep everything ₹200 or under.

## 2. Connect Telegram (~2 minutes)

1. In Telegram, message **@BotFather** → send `/newbot` → follow the
   prompts. It gives you a token like `123456789:AAHk9x...`.
2. Search for your new bot by its username and send it any message (e.g.
   "hi") — bots can't message you first.
3. Open this in a browser, swapping in your token:
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
   Find `"chat":{"id": 123456789 ...}` — that number is your chat ID.
4. Paste both into **`config.js`**.

> Heads up: this is a public GitHub Pages site, so the token in `config.js`
> is visible to anyone who views the page source. That's a normal trade-off
> for a small personal bot like this — just don't reuse a token from
> anything sensitive, and you can regenerate it anytime via `/revoke` in
> BotFather.

## 3. Publish to GitHub Pages

```bash
# from inside this folder
git init
git add .
git commit -m "Rakshabandhan site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy
from a branch → Branch: main / (root) → Save**. Your site goes live at
`https://<your-username>.github.io/<repo-name>/` within a minute or two.

## 4. Share it

Send that one link to everyone — each sister just types her own name.

## Files

| File | What it's for |
|---|---|
| `index.html` | Page structure (login → message → gift) |
| `style.css` | All styling and the thread-tie animation |
| `app.js` | Login matching, view switching, Telegram send |
| `data.js` | **Edit:** sisters' names, addresses, messages |
| `chocolates.js` | **Edit:** gift options (icons drawn in CSS/SVG, no images needed) |
| `config.js` | **Edit:** Telegram bot token + chat ID |
