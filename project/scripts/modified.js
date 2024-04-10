document.querySelector("#lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const modeButton = document.querySelector("#mode");
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});