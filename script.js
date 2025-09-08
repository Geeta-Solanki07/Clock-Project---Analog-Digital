// Clock hands
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

// Digital clock & date
const digitalClock = document.getElementById("digital-clock");
const dateDay = document.getElementById("date-day");

function updateClock() {
  let now = new Date();

  // Analog Clock
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let hRotation = 30 * h + m / 2;
  let mRotation = 6 * m;
  let sRotation = 6 * s;

  hourHand.style.transform = `rotate(${hRotation}deg)`;
  minuteHand.style.transform = `rotate(${mRotation}deg)`;
  secondHand.style.transform = `rotate(${sRotation}deg)`;

  // Digital Clock
  let ampm = h >= 12 ? "PM" : "AM";
  let hour12 = h % 12 || 12;
  let formattedTime = 
      `${String(hour12).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')} ${ampm}`;
  digitalClock.textContent = formattedTime;

  // Date & Day
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateDay.textContent = now.toLocaleDateString("en-US", options);
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
