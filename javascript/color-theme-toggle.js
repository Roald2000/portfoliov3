function toPersist(mode) {
    localStorage.setItem('theme', mode);
}

function isPersisting(mode) {
    return localStorage.getItem('theme') === mode;
}

const toggleBtn = document.querySelector('#toggleBtn');
const htmlElement = document.documentElement;


if (isPersisting('dark')) {
    htmlElement.setAttribute('data-theme', 'dark');
}


toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('dark');
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        toPersist('light');
        toggleBtn.textContent = '🌛'
        // toggleBtn.src = './assets/dark-mode.png';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        toPersist('dark');
        toggleBtn.textContent = '😎'
        // toggleBtn.src = './assets/light-mode.png';
    }
});