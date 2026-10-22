(() => {
  "use strict";

  const targetDate = new Date("2026-10-24T00:00:00").getTime();
  const units = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };
  const waitingMessage = document.getElementById("waiting-message");
  const birthdayMessage = document.getElementById("birthday-message");
  const lockMessage = document.getElementById("lock-message");
  const surpriseAccess = document.getElementById("surprise-access");
  let timerId;

  const format = (value) => String(value).padStart(2, "0");

  function showBirthdayState() {
    Object.values(units).forEach((unit) => {
      unit.textContent = "00";
    });
    waitingMessage.hidden = true;
    birthdayMessage.hidden = false;
    lockMessage.hidden = true;
  }

  function updateCountdown() {
    const remaining = Math.max(0, targetDate - Date.now());

    if (remaining === 0) {
      showBirthdayState();
      window.clearInterval(timerId);
      return false;
    }

    const totalSeconds = Math.floor(remaining / 1000);
    units.days.textContent = format(Math.floor(totalSeconds / 86400));
    units.hours.textContent = format(Math.floor((totalSeconds % 86400) / 3600));
    units.minutes.textContent = format(Math.floor((totalSeconds % 3600) / 60));
    units.seconds.textContent = format(totalSeconds % 60);
    return true;
  }

  if (updateCountdown()) {
    timerId = window.setInterval(updateCountdown, 1000);
  }

  // Ecuador continental uses UTC-5. This fixed UTC instant cannot be moved by
  // changing the clock or time zone of the visitor's device.
  const releaseTimestamp = Date.parse("2026-10-24T05:00:00Z");
  const serverTimeInterval = 60_000;
  const signalInterval = 30_000;
  const errorRetryInterval = 120_000;
  let availabilityTimer;
  let checkInProgress = false;
  let trustedReleaseReached = false;
  let surpriseAvailable = false;

  const createNonce = () => Math.random().toString(36).slice(2);

  function readServerTime(response) {
    const serverDate = response.headers.get("Date");
    const timestamp = serverDate ? Date.parse(serverDate) : Number.NaN;
    return Number.isFinite(timestamp) ? timestamp : null;
  }

  function scheduleAvailabilityCheck(delay) {
    window.clearTimeout(availabilityTimer);
    if (!surpriseAvailable) {
      availabilityTimer = window.setTimeout(checkSurpriseAvailability, delay);
    }
  }

  async function requestTrustedServerTime() {
    const timeUrl = new URL(window.location.href);
    timeUrl.hash = "";
    timeUrl.search = "";
    timeUrl.searchParams.set("_hora", createNonce());

    const response = await window.fetch(timeUrl, {
      method: "HEAD",
      cache: "no-store",
    });

    return readServerTime(response);
  }

  async function requestPublicationSignal() {
    const signalUrl = new URL("./sorpresa-lista.json", window.location.href);
    signalUrl.searchParams.set("_comprobar", createNonce());

    const response = await window.fetch(signalUrl, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    const serverTime = readServerTime(response);

    if (serverTime === null || serverTime < releaseTimestamp || !response.ok) {
      return false;
    }

    const contentType = response.headers.get("Content-Type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return false;
    }

    const signal = await response.json();
    return (
      signal?.karelysSurprise === "sorpresa-completa-2026" &&
      signal?.published === true
    );
  }

  function openFreshSurprise() {
    const freshUrl = new URL(window.location.href);
    freshUrl.hash = "";
    freshUrl.search = "";
    freshUrl.searchParams.set("abrir", createNonce());
    window.location.replace(freshUrl.href);
  }

  function showSurpriseAccess() {
    if (surpriseAvailable) {
      return;
    }

    surpriseAvailable = true;
    window.clearTimeout(availabilityTimer);
    showBirthdayState();

    const panel = document.createElement("div");
    panel.className = "surprise-access__panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "surprise-access-title");

    const sparkle = document.createElement("span");
    sparkle.className = "surprise-access__sparkle";
    sparkle.setAttribute("aria-hidden", "true");
    sparkle.textContent = "✦ ✦ ✦";

    const title = document.createElement("h2");
    title.id = "surprise-access-title";
    title.className = "surprise-access__title";
    title.textContent = "Karelys, llegó tu momento 💗";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "surprise-access__button";
    button.textContent = "🎁 Abrir mi sorpresa";
    button.addEventListener("click", openFreshSurprise);

    panel.append(sparkle, title, button);
    surpriseAccess.replaceChildren(panel);
    surpriseAccess.hidden = false;

    window.requestAnimationFrame(() => {
      surpriseAccess.classList.add("is-visible");
      button.focus({ preventScroll: true });
    });
  }

  async function checkSurpriseAvailability() {
    if (checkInProgress || surpriseAvailable) {
      return;
    }

    checkInProgress = true;
    let nextDelay = errorRetryInterval;

    try {
      if (!trustedReleaseReached) {
        const serverTime = await requestTrustedServerTime();

        if (serverTime === null || serverTime < releaseTimestamp) {
          nextDelay = serverTimeInterval;
          return;
        }

        trustedReleaseReached = true;
      }

      if (await requestPublicationSignal()) {
        showSurpriseAccess();
        return;
      }

      nextDelay = signalInterval;
    } catch {
      nextDelay = errorRetryInterval;
    } finally {
      checkInProgress = false;
      scheduleAvailabilityCheck(nextDelay);
    }
  }

  scheduleAvailabilityCheck(1_500);
})();
