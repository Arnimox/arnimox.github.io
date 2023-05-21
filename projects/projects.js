const filters = {
    tmodloadermod: "tModLoader Mod",
    discordbot: "Discord Bot",
    consolegame: "Console Game",
    misc: "Misc.",
}

const projectInfo = [
    {
        "name": "Marvel Terraria Universe",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that adds transformations into super heroes, as well as many settings, events, objects, and mechanics from the Marvel Cinematic Universe."
    },
    {
        "name": "Lifted Difficulty Limitations",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that allows Journey Mode characters to enter non-Journey Mode worlds and non-Journey Mode characters to enter Journey Mode worlds."
    },
    {
        "name": "Character Loadouts",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that allows the player to select a premade loadout on character creation, which appears with the newly-made character upon joining a world."
    },
    {
        "name": "Dynamic DCU",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that changes the way the Drill Containment Unit works, making its pickaxe / axe / hammer power dependant on whatever tools are present in the player's inventory."
    },
    {
        "name": "Every Weapon Is A Tool",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that gives weapons and player-made projectiles the ability to mine tiles and walls."
    },
    {
        "name": "No More Pillars",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that removes the Lunar Invasion event and the bosses / enemies associated with it, granting the player Lunar Fragments as Lunatic Cultist drops."
    },
    {
        "name": "Achievement Trees",
        "thumbnail": "default.png",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that changes the way achievements are presented ingame, making a world-specific GUI that can be followed like a tree, similar to the Minecraft Advancement menues."
    },
    {
        "name": "All In One Crafting",
        "thumbnail": "default.png",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that allows the player to use crafting stations without having to place them down, being able to keep them in special designated item slots."
    },
    {
        "name": "Auto Hole Filler",
        "thumbnail": "default.png",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that adds a throwable bomb that fills up any hole it's thrown into, using the surrounding tiles to mimic the terrain."
    },
    {
        "name": "Terraria Dating Simulator",
        "thumbnail": "default.png",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that allows the player to date Town NPCs. Enough said."
    },
    {
        "name": "Mario Land Mod",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that adds transformations into characters, as well as many enemies, Power-Ups, objects, and mechanics from the Super Mario Bros. series of games."
    },
    {
        "name": "Torture",
        "thumbnail": "default.png",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that absolutely tortures the player audibly, visibly, and emotionally..."
    },
    {
        "name": "Versatile Cell Phone",
        "thumbnail": "default.png",
        "filter": filters.tmodloadermod,
        "description": "A Terraria mod that changes the Cell Phone into a GTA-style mobile phone, capable of many unique functions."
    },
    {
        "name": "2048 In Console",
        "filter": filters.consolegame,
        "description": "A Python script that allows the user to play 2048 in the console."
    },
    {
        "name": "Hangman Expert",
        "filter": filters.misc,
        "description": "A Python script that emulates a game of hangman, wherein the program uses several algorithms to try to guess the word in the least amount of turns."
    },
    {
        "name": "Lagrange Challenge",
        "filter": filters.misc,
        "description": "A .Net script that uses Lagrangian interpolation to figure out the simplest function curve that goes through a set of given points."
    },
    {
        "name": "Shove-It In Console",
        "filter": filters.consolegame,
        "description": "A Python script that allows the user to play Shove-It in the console."
    },
    {
        "name": "Snake In Console",
        "filter": filters.consolegame,
        "description": "A Python script that allows the user to play Snake in the console."
    },
    {
        "name": "Tetris In Console",
        "filter": filters.consolegame,
        "description": "A Python script that allows the user to play Tetris in the console."
    },
    {
        "name": "7-Segment Sign",
        "filter": filters.misc,
        "description": "A Javascript program that displays a given word using 7 segments, mimicing the look and limitations of 7-segment displays."
    },
    {
        "name": "TCreator",
        "thumbnail": "default.png",
        "filter": filters.misc,
        "description": "A desktop application written in ElectronJS that uses Visual Scripting and a WYSIWYG Drag n' Drop system to make creating Terraria mods simpler."
    },
    {
        "name": "Sequence Memory Game",
        "filter": filters.misc,
        "description": "An unpublished iOS app written in Swift that allows the user to play a sequential memory game."
    },
]

const CreateInfo = () => {
    projectInfo.sort((a, b) => a.name.localeCompare(b.name)).forEach(e => {
        const info = document.createElement("div");
        info.className = e.filter.replaceAll(" ", "");
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
    });
}

const CreateFilters = () => {
    Object.values(filters).forEach(e => {
        const filterButton = document.createElement("button");
        filterButton.type = "button";
        filterButton.textContent = e;
        filterButton.setAttribute("data-toggled", "false");
        document.getElementById("project-filters-container").appendChild(filterButton);

        filterButton.addEventListener("click", event => {
            const target = event.target;
            const currentState = target.getAttribute("data-toggled");

            target.parentNode.childNodes.forEach(sibling => {
                if (sibling != target) sibling.setAttribute("data-toggled", "false");
            });

            FilterProjects(currentState == "true" ? null : target.textContent.replaceAll(" ", ""));
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