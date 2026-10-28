export function initNavigation() {
  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();

  const countdown = document.querySelector("#countdown");
  const partyCount = document.querySelector("#party-count");
  const updateCountdown = () => {
    const now = new Date();
    const yearNow = now.getFullYear();
    const halloweenToday = now.getMonth() === 9 && now.getDate() === 31;
    let target = new Date(yearNow, 9, 31, 0, 0, 0);
    if (now >= target && !halloweenToday) target = new Date(yearNow + 1, 9, 31, 0, 0, 0);

    let text;
    if (halloweenToday) {
      text = "It's Halloween — let the haunting begin!";
    } else {
      const ms = Math.max(0, target - now);
      const days = Math.floor(ms / 86400000);
      const hours = Math.floor(ms / 3600000) % 24;
      const minutes = Math.floor(ms / 60000) % 60;
      text = `${days} days · ${hours} hours · ${minutes} minutes until Halloween`;
    }
    if (countdown) countdown.textContent = text;
    if (partyCount) partyCount.textContent = text;
  };
  updateCountdown();
  window.setInterval(updateCountdown, 60000);
}
