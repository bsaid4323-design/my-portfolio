const toggle =
document.getElementById("themeToggle");

toggle.onclick = () => {

  document.body.classList.toggle("light");

};

const observer =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

document
.querySelectorAll(".fade")
.forEach(el => observer.observe(el));