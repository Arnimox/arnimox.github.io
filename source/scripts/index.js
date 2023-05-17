document.getElementById("header-menu-button").addEventListener("click", event => {
    const currentlyToggled = event.target.getAttribute("data-toggled");

    document.getElementById("header-menu").classList.toggle("flex", currentlyToggled != "true");
    document.getElementById("header-menu").classList.toggle("hidden", currentlyToggled == "true");
    event.target.setAttribute("data-toggled", currentlyToggled == "true" ? "false" : "true");
});

const pillContents = [
    { name: "M", color: "#FF7F50" },
    { name: Math.floor((new Date() - new Date('09/26/2005')) / (1000 * 60 * 60 * 24) / 365), color: "#008080" },
    { name: "New York", color: "#40E0D0" },
    { name: "C#", color: "#FFDB58" },
    { name: "Python", color: "#BCB88A" },
    { name: "Javascript", color: "#E2725B" },
    { name: "Webdev", color: "#E0B0FF" },
    { name: "Swift", color: "#808000" },
    { name: "NodeJS", color: "#B7410E" },
    { name: "DiscordJS", color: "#DE5D83" },
    { name: "tModLoader", color: "#F7E7CE" }
]

pillContents.forEach(e => {
    const pill = document.createElement("div");
    pill.textContent = e.name;
    pill.classList.add("home-page-pill");
    pill.style.borderColor = e.color;
    pill.style.backgroundColor = `${e.color}80`;

    document.getElementById("home-page-pill-container").appendChild(pill);
});

const socialContents = [
    { name: "instagram", color: "#833AB4", link: "https://www.instagram.com/max.a.2023/" },
    { name: "github", color: "#000000", link: "https://github.com/Arnimox" },
    { name: "spotify", color: "#1DB954", link: "https://open.spotify.com/user/g0lfyn59675wgm7bbybmn3r2y" },
    { name: "youtube", color: "#FF0000", link: "https://www.youtube.com/channel/UCu-Z9KaUWKAzTFeoMCOlMVA" },
    { name: "twitch", color: "#9146FF", link: "https://www.twitch.tv/arnimox" },
    { name: "steam", color: "#0066CC", link: "https://steamcommunity.com/id/arnimox/" }
]

socialContents.forEach(e => {
    const social = document.createElement("a");
    social.href = e.link;
    social.target = "_blank";
    social.classList.add("home-page-social");
    social.style.borderColor = e.color;
    social.style.backgroundColor = `${e.color}80`;

    document.getElementById("home-page-social-container").appendChild(social);

    const socialIcon = document.createElement("i");
    socialIcon.className = `fa-brands fa-${e.name} m-auto h-4/6`;
    social.appendChild(socialIcon);
});

document.getElementById("copyright-text").textContent = `Copyright © ${new Date().getFullYear()} Max Orin`