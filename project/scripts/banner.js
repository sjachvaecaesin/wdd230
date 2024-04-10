const banner = document.querySelector("#banner");
const closeButton = document.querySelector("#close");

closeButton.addEventListener("click", () => {
    banner.style.display = "none";
});