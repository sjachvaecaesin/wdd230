const baseURL = "https://sjachvaecaesin.github.io/wdd230/";
const linksURL = "https://sjachvaecaesin.github.io/wdd230/data/links.json";
const listElement = document.querySelector("#list");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let list = document.createElement("li");
        let att = document.createElement("a");
        console.log(week);
    });
}

getLinks();