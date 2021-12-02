window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    hamburgerBtn.addEventListener('click', setMobileMenu);

    const darkModeBtn = document.getElementById('dark-mode-btn');
    darkModeBtn.addEventListener('click', setDarkMode);
}

function setMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if(hamburgerMenu.style.top === '2rem') {
        hamburgerMenu.style.top = null;
    } else {
        hamburgerMenu.style.top = '2rem';
    }
}

function setDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    darkModeBtn.classList.toggle('dark-mode');
    console.log('test');
}