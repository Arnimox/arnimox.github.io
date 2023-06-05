const GetJSONData = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./project-info.json", false);
    xhr.send();
    if (xhr.status === 200) return JSON.parse(xhr.responseText);
}

const projectInfo = GetJSONData();

const CreateInfo = () => {
    projectInfo.info.sort((a, b) => a.name.localeCompare(b.name)).forEach(e => {
        const info = document.createElement("div");
        info.className = e.filter;
        document.getElementById("project-info-container").appendChild(info);

        const name = document.createElement("h2");
        name.textContent = e.name;
        info.appendChild(name);

        const thumbnail = document.createElement("img");
        thumbnail.id = e.name.toLowerCase().replaceAll(" ", "");
        thumbnail.src = "../images/projects/" + (e.thumbnail ?? thumbnail.id + ".png");
        thumbnail.title = thumbnail.id;
        info.appendChild(thumbnail);

        const description = document.createElement("p");
        description.textContent = e.description;
        info.appendChild(description);

        // const infoButton = document.createElement("a");
        // infoButton.href = `./${e.name.toLowerCase().replaceAll(" ", "")}`;
        // infoButton.textContent = "More Info";
        // info.appendChild(infoButton);
    });
}

const CreateFilters = () => {
    Object.values(projectInfo.filters).forEach(e => {
        const filterButton = document.createElement("button");
        filterButton.type = "button";
        filterButton.textContent = e.name;
        filterButton.className = e.value;
        filterButton.setAttribute("data-toggled", "false");
        document.getElementById("project-filters-container").appendChild(filterButton);

        filterButton.addEventListener("click", event => {
            const target = event.target;
            const currentState = target.getAttribute("data-toggled");

            target.parentNode.childNodes.forEach(sibling => {
                if (sibling != target) sibling.setAttribute("data-toggled", "false");
            });

            FilterProjects(currentState == "true" ? null : target.className);
            target.setAttribute("data-toggled", currentState == "true" ? "false" : "true");
        });
    });
}

const FilterProjects = (filter) => {
    document.getElementById("project-info-container").childNodes.forEach(e => {
        if (filter != null) {
            if (e.classList != filter) e.style.display = "none";
            else e.style.display = "flex";
        }
        else e.style.display = "flex";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    CreateInfo();
    CreateFilters();
});