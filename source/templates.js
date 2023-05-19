const CreateHeader = (subpage) => {
  const headerHTML = `
    <header class="sticky">
    <div class="flex h-16 justify-between p-3 landscape:md:hidden">
      <a href=".${subpage ? "." : ""}/"> <img src=".${subpage ? "." : ""}/images/favicon.png" alt="Website favicon" class="h-full rounded-xl" /> </a>
      <button type="button" title="Toggle Header Menu" id="header-menu-button">
        <i class="fa-solid fa-bars my-auto h-8"></i>
      </button>
    </div>
    <nav id="header-menu" class="hidden flex-col gap-3 pb-3 landscape:md:m-auto landscape:md:flex landscape:md:h-16 landscape:md:w-max landscape:md:flex-row landscape:md:justify-evenly landscape:md:gap-20 landscape:md:p-0">
      <a href=".${subpage ? "." : ""}/">HOME</a>
      <a href=".${subpage ? "." : ""}/aboutme">ABOUT ME</a>
      <a href=".${subpage ? "." : ""}/projects">PROJECTS</a>
      <a href=".${subpage ? "." : ""}/contactme">CONTACT ME</a>
    </nav>
    </header>
    `;

  document.body.innerHTML = headerHTML + document.body.innerHTML;

  document.getElementById("header-menu-button").addEventListener("click", event => {
    const currentlyToggled = event.target.getAttribute("data-toggled");

    document.getElementById("header-menu").classList.toggle("flex", currentlyToggled != "true");
    document.getElementById("header-menu").classList.toggle("hidden", currentlyToggled == "true");
    event.target.setAttribute("data-toggled", currentlyToggled == "true" ? "false" : "true");
  });
}

const CreateFooter = () => {
  const footerHTML = `
    <footer class="m-auto mt-10 flex w-max flex-col gap-3">
    <div class="mx-auto h-[2px] w-72 max-w-[70vw] rounded-full bg-secondary"></div>
    <p id="copyright-text" class="m-auto"></p>
    </footer>
    `;

  document.body.innerHTML += footerHTML;

  document.getElementById("copyright-text").textContent = `Copyright © ${new Date().getFullYear()} Max Orin`;
}

CreateFooter();