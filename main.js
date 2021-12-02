window.addEventListener('load', main);

/**
 * State
 */
 const messages = ['Front-End Developer.', 'Digital designer.'];
 const typeSpeed = 100;
 const nextMessageDelay = 2000;
 let charIndex = 0;
 let messageIndex = 0;

function main() {
    setTypeEffect();
    addEventListeners();
}

/**
 * Function with a typeEffect that will loop through messages array and return and display a single character at a time.
 * When message name is completed the function will reset and start over with next array index.
 * The modulus operator operator makes sure that it wont loop over the array index, instead it will start over.
 */
 function setTypeEffect() {
    const text = document.getElementById("typetext"); //get element and save in variable text
    const message = messages[messageIndex]; //get messages variable and its index which by default is set to 0
    if(charIndex < message.length) { // checks if charIdex is smaller than message.lenght which by default is total lenght of index item 0 which in turn has a lenght of 20 characters.
        text.innerHTML += message.charAt(charIndex); //get the first character of index 0 which is the letter F and gives it to text.innerHTML.
        charIndex++; //adds 1 to current value of charIndex
        setTimeout(setTypeEffect, typeSpeed); //calls the function again after 150ms.
    }

    else {
        charIndex = 0; //sets charIndex to 0 which by now is about 20
        messageIndex = (messageIndex + 1) % messages.length; //messageIndex is increased by 1 modulus the messages lenght 2 which returns a restvalue of 1. If messageIndex is 2 the modulus of 2 will set messageIndex to 0.
        setTimeout(function() { //setTimeout function calls an anonymous function which in turn sets text.innerHTML to empty string and calls setTypeEffect function after nextMessageDelay which is 2000ms.
            text.innerHTML = "";
            setTypeEffect();
        }, nextMessageDelay);
    }
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
    document.body.classList.toggle('dark-mode');
}