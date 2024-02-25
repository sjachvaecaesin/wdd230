const visitsElement = document.querySelector("#visits");
const currentDate = new Date();
const msToDays = 84600000;

let visits = Number(window.localStorage.getItem("visitList")) || 0;
let today = Date.now();
let lastDate = window.localStorage.getItem("lastDate");
let difference = today - lastDate;
let days = difference / msToDays;

console.log(today);
console.log(lastDate);
console.log(difference);
console.log(visits);
console.log(currentDate);

if (visits == 0) {
   visitsElement.textContent = "Welcome! Let us know if you have any questions."
} else if (difference < msToDays) {
    visitsElement.textContent = "Back so soon! Awesome!";
} else if (difference >= msToDays) {
    if (days < 2) {
        visitsElement.textContent = `You last visited ${Math.floor(days)} day ago.`;
    } else {
        visitsElement.textContent = `You last visited ${Math.floor(days)} days ago.`;
    }
}

visits++;

localStorage.setItem("visitList", visits);
localStorage.setItem("lastDate", today);