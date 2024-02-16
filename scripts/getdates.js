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