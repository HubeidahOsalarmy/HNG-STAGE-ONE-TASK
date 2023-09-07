document.addEventListener("DOMContentLoaded", function () {
  const currentDayOfTheWeekElement = document.querySelector(
    `[data-testid="currentDayOfTheWeek"]`
  );
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayOfTheWeek = daysOfWeek[currentDate.getUTCDay()];
  currentDayOfTheWeekElement.textContent = currentDayOfTheWeek.toString();
});
const currentDaySpan = document.querySelector("#currentDay");

document.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    const currentUTCTimeElement = document.querySelector(
      `[data-testid="currentUTCTime"]`
    );
    const currentUTCTimeMilliseconds = new Date().getTime();

    currentUTCTimeElement.textContent = currentUTCTimeMilliseconds.toString();
  }, 1000);
});
const currentTimeSpan = document.querySelector("#currentTime");
console.log(currentDaySpan, currentTimeSpan);
