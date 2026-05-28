const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
};

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.onclick = e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
    .scrollIntoView({behavior:"smooth"});
  }
});

// animation on scroll
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el=>{
  observer.observe(el);
});