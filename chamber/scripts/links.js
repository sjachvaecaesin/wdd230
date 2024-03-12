const listElement = document.querySelector("#list");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#file");
const url = "https://sjachvaecaesin.github.io/wdd230/data/members.json";

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        console.log(company);
        let li = document.createElement("li");
        let a = document.createElement("a");
        let article = document.createElement("article");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        h3.textContent = company.name;
        img.setAttribute("src", company.image);
        img.setAttribute("alt", "Company picture");
        p.textContent = `${company.address}<br>${company.phone}<br>${company.level}<br>${company.optional}`
        a.setAttribute("href", company.url);
        a.setAttribute("alt", "Company website")

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(a);
        article.classList.add("card");

        li.appendChild(article);

        listElement.appendChild(li);
    });
};

getMembers();

// gridButton.addEventListener("click", showList);

// listButton.addEventListener("click", showGrid);

// function showList() {
//     display.classList.add("file");
//     display.classList.remove("grid");
// }

// function showGrid() {
//     display.classList.add("grid");
//     display.classList.remove("file");
// }