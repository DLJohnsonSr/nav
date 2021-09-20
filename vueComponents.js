"use strict";
const app = Vue.createApp({});

const links = [
  { name: "Section 1", href: "#section1" },
  { name: "Section 2", href: "#section2" },
  { name: "Section 3", href: "#section3" },
];

app.component("app-nav", {
  data() {
    return {
      links: links,
    };
  },
  template: `
    <nav role="navigation" class="navbar">
        <input type="checkbox" id="menuToggle" />
        <label for="menuToggle">
        <div class="nav-menu-icon">
            <div class="nav-hash nav-hash-1"></div>
            <div class="nav-hash nav-hash-2"></div>
            <div class="nav-hash nav-hash-3"></div>
        </div>
        </label>
        <div class="nav-brand">
        <img src="/javascript.webp" alt="Brand Image" class="nav-img-brand" />
        </div>
        <div class="nav-list">
        <a v-for="link in links" :key="link.id" :href="link.href" class="nav-link"> {{ link.name }} </a>
        </div>
    </nav>`,
});
// <a href="#section1" class="nav-link">Section 1</a>
// <a href="#section2" class="nav-link">Section 2</a>
// <a href="#section3" class="nav-link">Section 3</a>
app.mount("#app");
