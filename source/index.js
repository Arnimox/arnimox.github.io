const RandomColorHex = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

const ShuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const CreatePills = () => {
    const pillContents = [
        "M",
        Math.floor((new Date() - new Date('09/26/2005')) / (1000 * 60 * 60 * 24) / 365),
        "New York"
    ].concat(ShuffleArray(
        [
            "C#",
            ".NET",
            "Python",
            "Javascript",
            "Typescript",
            "HTML",
            "CSS",
            "Swift",
            "NodeJS",
            "DiscordJS",
            "tModLoader"
        ]
    ));

    pillContents.forEach(e => {
        const randomColor = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

        const pill = document.createElement("div");
        pill.textContent = e;
        pill.classList.add("home-page-pill");
        pill.style.borderColor = randomColor;
        pill.style.backgroundColor = randomColor + "80";

        document.getElementById("home-page-pill-container").appendChild(pill);
    });
}

const CreateSocialButtons = () => {
    const socialContents = [
        { name: "instagram", color: "#833AB4", link: "https://www.instagram.com/max.a.2023/" },
        { name: "github", color: "#000000", link: "https://github.com/Arnimox" },
        { name: "spotify", color: "#1DB954", link: "https://open.spotify.com/user/g0lfyn59675wgm7bbybmn3r2y" },
        { name: "youtube", color: "#FF0000", link: "https://www.youtube.com/channel/UCu-Z9KaUWKAzTFeoMCOlMVA" },
        { name: "twitch", color: "#9146FF", link: "https://www.twitch.tv/arnimox" },
        { name: "steam", color: "#0066CC", link: "https://steamcommunity.com/id/arnimox/" },
        { name: "discord", color: "#5865F2", link: "https://discordapp.com/users/509509052573810720" }
    ]

    ShuffleArray(socialContents).forEach(e => {
        const social = document.createElement("a");
        social.href = e.link;
        social.target = "_blank";
        social.classList.add("social");
        social.style.borderColor = e.color;
        social.style.backgroundColor = e.color + "80";

        document.getElementsByClassName("social-container")[0].appendChild(social);

        const socialIcon = document.createElement("i");
        socialIcon.className = `fa-brands fa-${e.name} m-auto h-4/6`;
        social.appendChild(socialIcon);
    });
}