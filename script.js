
document.querySelectorAll("#Close-menu").forEach(function(element) {
    element.addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("show-menu");
    });
});


function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


const animeTargets = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    animeTargets.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        }
    });
}

if (animeTargets.length) {
    window.addEventListener("scroll", animeScroll);
}


const themeToggle = document.getElementById('themeToggle');
let isDark = localStorage.getItem('theme') === 'dark';

function updateTheme() {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    updateTheme();
});


document.addEventListener('DOMContentLoaded', () => {
    updateTheme();
    animeScroll();
});