// ============================= typing animation =====================

const text = document.querySelector(".typing");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "web developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 4000);
}

textLoad();
setInterval(textLoad, 8000);

// ============================= Aside ====================================

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click", function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        // console.log(this);
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    // console.log(element.getAttribute("href").split("#"));
    const target = element.getAttribute("href").split("#")[1];
    // console.log(target);
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
    // console.log(element.getAttribute("href").split("#")[1]);
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex);
    // console.log(this);
    showSection(this);
    updateNav(this);
})
// ====================== nav-toggler ==========================

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// =========================== Send Form Data ========================
document.querySelector('.btn').addEventListener('click', (e) => {
    alert('Your download will start shortly!');
});