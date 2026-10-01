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
})();
