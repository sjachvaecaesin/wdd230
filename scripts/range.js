document.querySelector("#year").textContent = new Date().getFullYear();

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const kp1 = document.querySelector("#pwd");
const kp2 = document.querySelector("#confirm");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "Passwords do not match";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
        kp1.value = "";
		kp2.value = "";
		kp1.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
