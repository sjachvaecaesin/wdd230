document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const heroLabel = document.querySelector(".herolabel");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	heroLabel.style.top = "";
	if (hamButton.classList.contains('open')) {
		heroLabel.style.top = "350px";
	};
});

const visitsElement = document.querySelector(".visits");

let visits = Number(window.localStorage.getItem("visitList")) || 0;

if (visits == 0) {
	visitsElement.textContent = "Your first time here.";
}
else {
	visitsElement.textContent = visits;
}

visits++;

localStorage.setItem("visitList", visits);
