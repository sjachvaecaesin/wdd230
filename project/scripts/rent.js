const url = "https://sjachvaecaesin.github.io/wdd230/project/data/vehicles.json";
const metroTitle = document.querySelector("#metro-title");
const metroOcc = document.querySelector("#metro-occ");
const metroReHalf = document.querySelector("#metro-re-half");
const metroReFull = document.querySelector("#metro-re-full");
const metroWaHalf = document.querySelector("#metro-wa-half");
const metroWaFull = document.querySelector("#metro-wa-full");
const dioTitle = document.querySelector("#dio-title");
const dioOcc = document.querySelector("#dio-occ");
const dioReHalf = document.querySelector("#metro-re-half");
const dioReFull = document.querySelector("#metro-re-full");
const dioWaHalf = document.querySelector("#metro-wa-half");
const dioWaFull = document.querySelector("#metro-wa-full");
const pcxTitle = document.querySelector("#pcx-title");
const pcxOcc = document.querySelector("#pcx-occ");
const pcxReHalf = document.querySelector("#pcx-re-half");
const pcxReFull = document.querySelector("#pcx-re-full");
const pcxWaHalf = document.querySelector("#pcx-wa-half");
const pcxWaFull = document.querySelector("#pcx-wa-full");
const pioneerTitle = document.querySelector("#pioneer-title");
const pioneerOcc = document.querySelector("#pioneer-occ");
const pioneerReHalf = document.querySelector("#pioneer-re-half");
const pioneerReFull = document.querySelector("#pioneer-re-full");
const pioneerWaHalf = document.querySelector("#pioneer-wa-half");
const pioneerWaFull = document.querySelector("#pioneer-wa-full");
const fourTitle = document.querySelector("#four-door-title");
const fourOcc = document.querySelector("#four-door-occ");
const fourReHalf = document.querySelector("#four-door-re-half");
const fourReFull = document.querySelector("#four-door-re-full");
const fourWaHalf = document.querySelector("#four-door-wa-half");
const fourWaFull = document.querySelector("#four-door-wa-full");
const twoTitle = document.querySelector("#two-door-title");
const twoOcc = document.querySelector("#two-door-occ");
const twoReHalf = document.querySelector("#two-door-re-half");
const twoReFull = document.querySelector("#two-door-re-full");
const twoWaHalf = document.querySelector("#two-door-wa-half");
const twoWaFull = document.querySelector("#two-door-wa-full");
const rentals = [];

async function getRentals() {
    const response = await fetch(url);
    const data = await response.json();
    displayVehicles(data.rentals);
}

const displayVehicles = (vehicles) => {
    vehicles.forEach((vehicle) => {
        rentals.push(vehicle);
    });
    metroTitle.innerHTML = `${rentals[0].name}`;
    metroOcc.innerHTML = `${rentals[0].occupancy}`;
    metroReHalf.innerHTML = `${rentals[0].reserve-half}`;
    metroReFull.innerHTML = `${rentals[0].reserve-full}`;
    metroWaHalf.innerHTML = `${rentals[0].walk-half}`;
    metroWaFull.innerHTML = `${rentals[0].walk-full}`;
};

getRentals();