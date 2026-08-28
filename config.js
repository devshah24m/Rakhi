/* ============================================================
   EDIT ME — Telegram setup (takes ~2 minutes)

   1. In Telegram, search for "BotFather" and open a chat with it.
   2. Send /newbot and follow the prompts (any name/username works).
   3. BotFather replies with a token that looks like:
        123456789:AAHk9x...   ← copy this into TELEGRAM_BOT_TOKEN
   4. Search for your new bot by its username and send it any
      message (e.g. "hi") so it can message you back.
   5. Visit this URL in your browser, replacing <TOKEN>:
        https://api.telegram.org/bot<TOKEN>/getUpdates
      In the response, find "chat":{"id": 123456789, ...}
      That number is your TELEGRAM_CHAT_ID.

   Note: this file ships inside a public GitHub Pages site, so
   anyone who views the page source can read this token. That's
   fine for a low-stakes bot that only messages you — just don't
   reuse a token from a bot connected to anything sensitive, and
   you can regenerate it anytime via BotFather (/revoke).
   ============================================================ */

const CONFIG = {
  TELEGRAM_BOT_TOKEN: "8636395369:AAGXHlsUqXSydQC_Sv5W0irmdjylO_ai7TE",
  TELEGRAM_CHAT_ID: "968569455",
};
