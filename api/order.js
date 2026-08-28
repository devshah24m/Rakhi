const PRODUCTS = {
  kisses: ["Kisses", 50],
  "5star": ["5 Star", 43],
  kitkat: ["KitKat", 72],
  silkoreo: ["Silk Oreo", 100],
  dairymilk: ["Dairy Milk", 26],
  munchmax: ["Munch Max", 20],
  galaxy: ["Galaxy", 62]
};

const escapeTelegram = value =>
  String(value).replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: "Telegram is not configured" });
  }

  try {
    const body = req.body || {};
    const type = body.type === "blessing" ? "blessing" : "order";

    let message;

    if (type === "blessing") {
      // ---- Blessing-only flow (no gift, no delivery address) ----
      const { sister, message: blessing } = body;

      if (!sister || !blessing || !String(blessing).trim()) {
        return res.status(400).json({ error: "Please write your blessing first." });
      }

      message =
`🙏 *RAKHI BLESSING RECEIVED*

👩 *From:* ${escapeTelegram(sister)}

💬 *Message:*
${escapeTelegram(blessing)}

❤️ For Dev`;

    } else {
      // ---- Chocolate gift + delivery flow ----
      const { sister, name, phone, address, city, state, pin, chocolates } = body;

      if (!name || !phone || !address || !city || !state || !pin ||
          !Array.isArray(chocolates) || chocolates.length !== 2) {
        return res.status(400).json({ error: "Please choose two chocolates and complete the details." });
      }

      let total = 0;
      const items = [];

      for (const item of chocolates) {
        const product = PRODUCTS[item.id];
        if (!product) {
          return res.status(400).json({ error: "Invalid chocolate selection." });
        }
        total += product[1];
        items.push(`• ${escapeTelegram(product[0])}`);
      }

      if (total > 200) {
        return res.status(400).json({ error: "Surprise budget exceeded." });
      }

      message =
`🎁 *NEW RAKSHABANDHAN ORDER*

👩 *From:* ${escapeTelegram(sister || name)}

📱 *Phone:* ${escapeTelegram(phone)}

🍫 *Two favourites:*
${items.join("\n")}

📍 *Delivery Address:*
${escapeTelegram(address)}
${escapeTelegram(city)}, ${escapeTelegram(state)}
PIN: ${escapeTelegram(pin)}

❤️ From Dev`;
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "MarkdownV2"
        })
      }
    );

    const result = await telegramResponse.json();

    if (!telegramResponse.ok || !result.ok) {
      console.error("Telegram error:", result);
      return res.status(502).json({ error: "Telegram notification failed" });
    }

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
