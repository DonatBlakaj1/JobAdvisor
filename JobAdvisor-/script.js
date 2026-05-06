const pages = [
  "ballina", "puna", "aplikantet", "plan", "shto", "historia", "profili", "settings"
];

const titles = {
  ballina: "Ballina", puna: "Shpalljet e Punës", aplikantet: "Aplikantët",
  plan: "Plani i Shërbimit", shto: "Shto Pozitë", historia: "Historia",
  profili: "Profili i Kompanisë", settings: "Cilësimet"
};

const sidebarItems = document.querySelectorAll(".sidebar .item");
const pageElements = document.querySelectorAll('.page');
const topbarTitle = document.getElementById("tbar-title");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");

function navigateToPage(pageIndex) {
  if (pageIndex < 0 || pageIndex >= pages.length) return;
  const page = pages[pageIndex];

  // Hide all pages and show target
  pageElements.forEach(p => p.classList.remove('on'));
  const targetPage = document.getElementById('page-' + page);
  if (targetPage) targetPage.classList.add('on');

  // Update sidebar active state
  sidebarItems.forEach(b => b.classList.remove('active'));
  if (sidebarItems[pageIndex]) sidebarItems[pageIndex].classList.add('active');

  // Update title
  if (topbarTitle) topbarTitle.innerText = titles[page];

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("active");
    main.classList.remove("hide-main");
  }
}

// Bind sidebar items
sidebarItems.forEach((btn, index) => {
  btn.addEventListener("click", () => navigateToPage(index));
});

// External navigation buttons mapping (selector -> page index)
const externalRoutes = [
  { selector: '.ph-a', pageIndex: 1 }, // Shiko të gjitha -> Shpalljet e Punës
  { selector: '.ph-b', pageIndex: 4 }, // Shto të Re -> Shto Pozitë
  { selector: '.ph-c', pageIndex: 6 }, // Edito (Profili) -> Profili
  { selector: '.btn-p', pageIndex: 4 } // + Shto Pozitë -> Shto Pozitë
];

externalRoutes.forEach(route => {
  const btns = document.querySelectorAll(route.selector);
  btns.forEach(btn => {
    btn.addEventListener('click', () => navigateToPage(route.pageIndex));
  });
});

// Global functions for inline HTML handlers
window.toggleSidebar = function () {
  sidebar.classList.toggle("active");
  main.classList.toggle("hide-main");
};

window.nav = function (pageId, btnEl) {
  const index = pages.indexOf(pageId);
  if (index !== -1) navigateToPage(index);
};

window.filterAppl = function (btn, filterType) {
  // Update active state of filter buttons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
};
