const navbar = document.createElement("navbar");

navbar.innerHTML = `
    <nav role="navigation">
        <div class="nav-toggle">
            <button role="button" class="nav-button">
                <div class="nav-burgers">
                <div class="nav-burger nav-burger-1"></div>
                <div class="nav-burger nav-burger-2"></div>
                <div class="nav-burger nav-burger-3"></div>
                </div>
            </button>
            <img src="/javascript.webp" alt="Brand Image" class="nav-img-brand" />
        </div>
        <div class="nav-list nav-list-display">
        <a href="#section1" class="nav-link">Section 1</a>
        <a href="#section2" class="nav-link">Section 2</a>
        <a href="#section3" class="nav-link">Section 3</a>
        </div>
    </nav>
`;

class AppNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = navbar.innerHTML;
  }

  openMenu() {
    const navLinkList = document.querySelector(".nav-list");
    const burgers = document.querySelector(".nav-burgers").children;

    navLinkList.classList.toggle("nav-list-display");

    burgers[0].classList.toggle("nav-burger-a");
    burgers[1].classList.toggle("nav-burger-b");
    burgers[2].classList.toggle("nav-burger-c");
  }

  connectedCallback() {
    const userActions = ["click", "enter"];

    // toggle mobile menu
    userActions.forEach((action) =>
      this.querySelector(".nav-list").addEventListener(action, this.openMenu)
    );

    // close menu list when link clicked
    userActions.forEach((action) =>
      this.querySelector(".nav-button").addEventListener(action, this.openMenu)
    );
  }

  disconnectedCallback() {
    this.querySelector(".nav-list-display").removeEventListener();
    this.querySelector(".nav-button").removeEventListener();
  }
}

customElements.define("app-navbar", AppNavbar);
