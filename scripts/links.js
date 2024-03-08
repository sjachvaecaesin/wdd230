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
        week.links.forEach((link) => {
            let li = document.createElement("li");
            let a = document.createElement("a");

            console.log(link);
            a.setAttribute("href", link.url);
            a.textContent = link.title;

            li.appendChild(a);
            listElement.appendChild(li);
        });
    });
}

getLinks();