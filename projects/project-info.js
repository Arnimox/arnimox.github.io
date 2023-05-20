const projectInfo = [
    {
        "name": "Marvel Terraria Universe",
        "description": "A Terraria mod that adds transformations into super heroes, as well as many settings, events, objects, and mechanics from the Marvel Cinematic Universe."
    },
    {
        "name": "Lifted Difficulty Limitations",
        "description": "A Terraria mod that allows Journey Mode characters to enter non-Journey Mode worlds and non-Journey Mode characters to enter Journey Mode worlds."
    },
    {
        "name": "Character Loadouts",
        "description": "A Terraria mod that allows the player to select a premade loadout on character creation, which appears with the newly-made character upon joining a world."
    },
    {
        "name": "Dynamic DCU",
        "description": "A Terraria mod that changes the way the Drill Containment Unit works, making its pickaxe / axe / hammer power dependant on whatever tools are present in the player's inventory."
    },
    {
        "name": "Every Weapon Is A Tool",
        "description": "A Terraria mod that gives weapons and player-made projectiles the ability to mine tiles and walls."
    },
    {
        "name": "No More Pillars",
        "description": "A Terraria mod that removes the Lunar Invasion event and the bosses / enemies associated with it, granting the player Lunar Fragments as Lunatic Cultist drops."
    },
    {
        "name": "Achievement Trees",
        "thumbnail": "default.png",
        "description": "A Terraria mod that changes the way achievements are presented ingame, making a world-specific GUI that can be followed like a tree, similar to the Minecraft Advancement menues."
    },
    {
        "name": "All In One Crafting",
        "thumbnail": "default.png",
        "description": "A Terraria mod that allows the player to use crafting stations without having to place them down, being able to keep them in special designated item slots."
    },
    {
        "name": "Auto Hole Filler",
        "thumbnail": "default.png",
        "description": "A Terraria mod that adds a throwable bomb that fills up any hole it's thrown into, using the surrounding tiles to mimic the terrain."
    },
    {
        "name": "Terraria Dating Simulator",
        "thumbnail": "default.png",
        "description": "A Terraria mod that allows the player to date Town NPCs. Enough said."
    },
    {
        "name": "Mario Land Mod",
        "description": "A Terraria mod that adds transformations into characters, as well as many enemies, Power-Ups, objects, and mechanics from the Super Mario Bros. series of games."
    },
    {
        "name": "Torture",
        "thumbnail": "default.png",
        "description": "A Terraria mod that absolutely tortures the player audibly, visibly, and emotionally..."
    },
    {
        "name": "Versatile Cell Phone",
        "thumbnail": "default.png",
        "description": "A Terraria mod that changes the Cell Phone into a GTA-style mobile phone, capable of many unique functions."
    },
    {
        "name": "2048 In Console",
        "thumbnail": "default.png",
        "description": "A Python script that allows the user to play 2048 in the console."
    },
    {
        "name": "Hangman Expert",
        "thumbnail": "default.png",
        "description": "A Python script that emulates a game of hangman, wherein the program uses several algorithms to try to guess the word in the least amount of turns."
    },
    {
        "name": "Lagrange Challenge",
        "thumbnail": "default.png",
        "description": "A .Net script that uses Lagrangian interpolation to figure out the simplest function curve that goes through a set of given points."
    },
    {
        "name": "Shove-It In Console",
        "thumbnail": "default.png",
        "description": "A Python script that allows the user to play Shove-It in the console."
    },
    {
        "name": "Snake In Console",
        "thumbnail": "default.png",
        "description": "A Python script that allows the user to play Snake in the console."
    },
    {
        "name": "Tetris In Console",
        "thumbnail": "default.png",
        "description": "A Python script that allows the user to play Tetris in the console."
    },
    {
        "name": "7-Segment Sign",
        "thumbnail": "default.png",
        "description": "A Javascript program that displays a given word using 7 segments, mimicing the look and limitations of 7-segment displays."
    },
    {
        "name": "TCreator",
        "thumbnail": "default.png",
        "description": "A desktop application written in ElectronJS that uses Visual Scripting and a WYSIWYG Drag n' Drop system to make creating Terraria mods simpler."
    },
    {
        "name": "Sequence Memory Game",
        "thumbnail": "default.png",
        "description": "An unpublished iOS app written in Swift that allows the user to play a sequential memory game."
    },
]

CreateInfo = () => {
    projectInfo.sort((a, b) => a.name.localeCompare(b.name)).forEach(e => {
        const info = document.createElement("div");
        document.getElementById("project-info-container").appendChild(info);

        const name = document.createElement("h2");
        name.textContent = e.name;
        info.appendChild(name);

        const thumbnail = document.createElement("img");
        thumbnail.src = "../images/projects/" + (e.thumbnail ?? e.name.toLowerCase().replaceAll(" ", "") + ".png");
        info.appendChild(thumbnail);

        const description = document.createElement("p");
        description.textContent = e.description;
        info.appendChild(description);
    });
}

CreateInfo();