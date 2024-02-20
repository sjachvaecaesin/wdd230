const tempElement = document.querySelector("#temp").innerHTML;
const windElement = document.querySelector("#wind").innerHTML;
const chillElement = document.querySelector("#chill");

let temp = tempElement.match(/\d/g);
temp = temp.join("");
let wind = windElement.match(/\d/g);
wind = wind.join("");

let chill = 35.74 + (0.6215 * temp) - (35.75 * wind**0.16) + (0.4275 * temp * wind**0.16);

chillElement.textContent = `Wind Chill: ${chill.toFixed(2)}`;
