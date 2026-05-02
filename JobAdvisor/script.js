const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");

  sidebar.classList.toggle("active");
  main.classList.toggle("hide-main");
}

document.querySelectorAll(".sidebar .item").forEach(btn => {
  btn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      document.querySelector(".sidebar").classList.remove("active");
      document.querySelector(".main").classList.remove("hide-main");
    }
  });
});
// lidh automatikisht sidebar buttons me pages
document.querySelectorAll('.sidebar .item').forEach((btn, index) => {

  btn.addEventListener('click', () => {

    const pages = [
      "ballina",
      "puna",
      "aplikantet",
      "plan",
      "shto",
      "historia",
      "profili",
      "settings"
    ];

    const page = pages[index];

    // fshih të gjitha faqet
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('on');
    });

    // shfaq faqen e zgjedhur
    document.getElementById('page-' + page).classList.add('on');

    // active button
    document.querySelectorAll('.sidebar .item').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    // ndrysho titullin
    const titles = {
      ballina: "Ballina",
      puna: "Shpalljet e Punës",
      aplikantet: "Aplikantët",
      plan: "Plani i Shërbimit",
      shto: "Shto Pozitë",
      historia: "Historia",
      profili: "Profili i Kompanisë",
      settings: "Cilësimet"
    };

    document.getElementById("tbar-title").innerText = titles[page];
  });

});

const addBtn1 = document.querySelector('.ph-a');

if (addBtn1) {

  addBtn1.addEventListener('click', () => {
    // fshih të gjitha faqet
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('on');
    });
    // shfaq faqen "puna"
    document.getElementById('page-puna').classList.add('on');
    // aktivizo butonin përkatës në sidebar (i 2-ti)
    const buttons = document.querySelectorAll('.sidebar .item');

    buttons.forEach(b => b.classList.remove('active'));
    if (buttons[1]) buttons[1].classList.add('active');
    // ndrysho titullin sipër
    const t = document.getElementById("tbar-title");
    if (t) t.innerText = "Shpalljet e Punës";
  });
}

const addBtn2 = document.querySelector('.ph-b');
if (addBtn2) {

  addBtn2.addEventListener('click', () => {
    // fshih të gjitha faqet
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('on');
    });
    // shfaq faqen "shto"
    document.getElementById('page-shto').classList.add('on');
    // aktivizo butonin përkatës në sidebar (i 5-ti)
    const buttons = document.querySelectorAll('.sidebar .item');
    buttons.forEach(b => b.classList.remove('active'));
    if (buttons[4]) buttons[4].classList.add('active');
    // ndrysho titullin sipër
    const t = document.getElementById("tbar-title");
    if (t) t.innerText = "Shto Pozitë";
  });
}

const addBtn3 = document.querySelector('.ph-c');
if (addBtn3) {
  addBtn3.addEventListener('click', () => {
    // fshih të gjitha faqet
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('on');
    });
    // shfaq faqen "profili"
    document.getElementById('page-profili').classList.add('on');
    // aktivizo butonin përkatës në sidebar (i 7-ti)
    const buttons = document.querySelectorAll('.sidebar .item');
    buttons.forEach(b => b.classList.remove('active'));
    if (buttons[6]) buttons[6].classList.add('active');
    // ndrysho titullin sipër
    const t = document.getElementById("tbar-title");
    if (t) t.innerText = "Profili i Kompanisë";
  });
}


const addBtn = document.querySelector('.btn-p');

if (addBtn) {
  addBtn.addEventListener('click', () => {

    // fshih të gjitha faqet
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('on');
    });

    // shfaq faqen "shto"
    document.getElementById('page-shto').classList.add('on');



    // aktivizo butonin përkatës në sidebar (i 5-ti)
    const buttons = document.querySelectorAll('.sidebar .item');
    buttons.forEach(b => b.classList.remove('active'));
    if (buttons[4]) buttons[4].classList.add('active');

    // ndrysho titullin sipër
    const t = document.getElementById("tbar-title");
    if (t) t.innerText = "Shto Pozitë";
  });
}
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}
function shkoTeShpalljet() {
  const sidebar = document.getElementById("sidebarShpalljet");
  sidebar.classList.toggle("active");
}