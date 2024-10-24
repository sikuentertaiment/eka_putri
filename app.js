let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

const overlay = document.querySelector('.overlay');

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  // Menambahkan class sticky ke header saat melakukan scroll
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Highlight link yang aktif di navbar berdasarkan section yang sedang di-scroll
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*='" + id + "']")
          .classList.add("active");
      });
    }
  });

  // Menghapus class "bx-x" dari ikon menu dan menutup navbar saat scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
let darkModeIcon = document.querySelector("#darkMode-icon");

let darkOn = false;

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
  darkOn = !darkOn;
  if(darkOn){
    document.querySelectorAll('.value').forEach((item)=>{item.style.color = 'white';});
    document.querySelectorAll('.title').forEach((item)=>{item.style.color = 'white';})
    document.querySelectorAll('.timeline-title').forEach((item)=>{item.style.color = 'white';});
  }else{
    document.querySelectorAll('.value').forEach((item)=>{item.style.color = '#333';});
    document.querySelectorAll('.timeline-title').forEach((item)=>{item.style.color = '#333';});
    document.querySelectorAll('.title').forEach((item)=>{item.style.color = '#333';});
  }
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .education-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  ".home-content h1, .about-img img, .education-container", // Removed extra comma
  { origin: "left" }
);
ScrollReveal().reveal(".home-content h3, .about-content p", {
  // Removed misplaced comma
  origin: "right",
});

// working on overlay fit height

const height = innerHeight;


overlay.style.borderBottom = `${Math.floor(innerHeight/2)}px solid var(--main-color)`;
overlay.style.borderTop = `${Math.floor(innerHeight/2)}px solid var(--main-color)`;