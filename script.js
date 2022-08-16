// create variables to hold each hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
// variable for date to display in digital form
const lazyClock = new Date();
const digitalDisplay = document.querySelector('.digital');
digitalDisplay.innerHTML = lazyClock;

// function to set hands to each respective time signiture
function setDate() {
  const now = new Date();
  // setting the seconds hand
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // setting the minutes hand
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // setting the hours hand
  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // console logs tests to show each seconds, minutes and hours instance
  // console.log(seconds);
  // console.log(minutes);
  // console.log(hours);
}
// set to 1000 milliseconds
setInterval(setDate, 1000);
