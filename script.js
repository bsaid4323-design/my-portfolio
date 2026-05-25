console.log("Welcome to Said Brahimi's Portfolio!");
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = '#ecf0f1';
    });
    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = 'white';
    });
});