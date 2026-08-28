(function () {
  "use strict";

  /* ---------- helpers ---------- */
  function normalize(str) {
    return (str || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function findSister(typedName) {
    const target = normalize(typedName);
    if (!target) return null;
    return SISTERS.find((s) => normalize(s.name) === target) || null;
  }

  function showView(id) {
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- state ---------- */
  let currentSister = null;
  let selectedChocolate = null;

  /* ---------- LOGIN ---------- */
  const loginForm = document.getElementById("login-form");
  const nameInput = document.getElementById("name-input");
  const loginError = document.getElementById("login-error");
  const tieIcon = document.getElementById("tie-icon");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const match = findSister(nameInput.value);

    if (!match) {
      loginError.classList.add("show");
      tieIcon.classList.remove("tied");
      nameInput.focus();
      return;
    }

    loginError.classList.remove("show");
    currentSister = match;
    tieIcon.classList.add("tied");

    // let the thread-tie animation play briefly before moving on
    setTimeout(() => {
      renderMessage();
      showView("view-message");
    }, 550);
  });

  nameInput.addEventListener("input", () => loginError.classList.remove("show"));

  /* ---------- MESSAGE VIEW ---------- */
  function renderMessage() {
    document.getElementById("msg-name").textContent = currentSister.name;
    document.getElementById("msg-text").textContent = currentSister.message;
  }

  document.getElementById("btn-back-login").addEventListener("click", () => {
    currentSister = null;
    nameInput.value = "";
    tieIcon.classList.remove("tied");
    showView("view-login");
    nameInput.focus();
  });

  document.getElementById("btn-go-gift").addEventListener("click", () => {
    renderGiftGrid();
    showView("view-gift");
  });

  /* ---------- GIFT VIEW ---------- */
  const giftGrid = document.getElementById("gift-grid");
  const confirmBtn = document.getElementById("btn-confirm-gift");
  const giftStatus = document.getElementById("gift-status");
  const giftCard = document.getElementById("gift-card");
  const confirmPanel = document.getElementById("confirm-panel");

  function chocolateIcon(shape, color) {
    if (shape === "truffle") {
      return `<svg viewBox="0 0 46 46"><circle cx="23" cy="23" r="16" fill="${color}"/><circle cx="23" cy="23" r="16" fill="none" stroke="#c9962e" stroke-width="1.5" stroke-dasharray="3 3"/></svg>`;
    }
    if (shape === "triangle") {
      return `<svg viewBox="0 0 46 46"><polygon points="23,7 40,36 6,36" fill="${color}"/></svg>`;
    }
    // default: bar
    return `<svg viewBox="0 0 46 46"><rect x="8" y="10" width="30" height="26" rx="4" fill="${color}"/><line x1="8" y1="23" x2="38" y2="23" stroke="#fbf1e1" stroke-width="1.5"/><line x1="23" y1="10" x2="23" y2="36" stroke="#fbf1e1" stroke-width="1.5"/></svg>`;
  }

  function renderGiftGrid() {
    giftGrid.innerHTML = "";
    selectedChocolate = null;
    confirmBtn.disabled = true;
    giftStatus.textContent = "";
    giftStatus.className = "status-line";
    giftCard.hidden = false;
    confirmPanel.hidden = true;
    document.getElementById("address-input").value = "";

    CHOCOLATES.forEach((choc) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gift-option";
      btn.dataset.id = choc.id;
      btn.innerHTML = `
        ${chocolateIcon(choc.shape, choc.wrapper)}
        <span class="gift-option__name">${choc.name}</span>
        <span class="gift-option__note">${choc.note}</span>
      `;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".gift-option").forEach((el) => el.classList.remove("selected"));
        btn.classList.add("selected");
        selectedChocolate = choc;
        confirmBtn.disabled = false;
      });
      giftGrid.appendChild(btn);
    });
  }

  confirmBtn.addEventListener("click", async function () {
    if (!currentSister || !selectedChocolate) return;

    const address = document.getElementById("address-input").value.trim();
    if (!address) {
      giftStatus.textContent = "Add an address so it actually reaches you!";
      giftStatus.className = "status-line error";
      document.getElementById("address-input").focus();
      return;
    }

    confirmBtn.disabled = true;
    confirmBtn.textContent = "Sending…";
    giftStatus.textContent = "";
    giftStatus.className = "status-line";

    const text =
      `🎁 Rakshabandhan pick\n` +
      `From: ${currentSister.name}\n` +
      `Chocolate: ${selectedChocolate.name}\n` +
      `Send to: ${address || "(no address on file)"}`;

    try {
      await sendToTelegram(text);
      showConfirmPanel();
    } catch (err) {
      giftStatus.textContent = "Couldn't send that just now — please try again in a moment.";
      giftStatus.className = "status-line error";
      confirmBtn.disabled = false;
      confirmBtn.textContent = "Confirm my pick";
    }
  });

  function showConfirmPanel() {
    giftCard.hidden = true;
    confirmPanel.hidden = false;
    document.getElementById("confirm-body").textContent =
      `${selectedChocolate.name} is on its way to you, ${currentSister.name}. Happy Rakshabandhan! 🎉`;
  }

  /* ---------- Telegram ---------- */
  async function sendToTelegram(text) {
    if (
      !CONFIG ||
      !CONFIG.TELEGRAM_BOT_TOKEN ||
      CONFIG.TELEGRAM_BOT_TOKEN.indexOf("PASTE_") === 0 ||
      !CONFIG.TELEGRAM_CHAT_ID ||
      String(CONFIG.TELEGRAM_CHAT_ID).indexOf("PASTE_") === 0
    ) {
      throw new Error("Telegram is not configured yet — edit config.js");
    }

    const url = `https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CONFIG.TELEGRAM_CHAT_ID, text }),
    });

    if (!res.ok) {
      throw new Error("Telegram API error: " + res.status);
    }
  }
})();
