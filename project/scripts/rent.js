const url = "https://sjachvaecaesin.github.io/wdd230/project/data/vehicles.json";

async function getRentals() {
    const response = await fetch(url);
    const data = await response.json();
    displayVehicles(data.companies);
}

const displayVehicles = (vehicles) => {
    vehicles.forEach((vehicle) => {
        console.log(vehicle);
    });
};

getRentals();