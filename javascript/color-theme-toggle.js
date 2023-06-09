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
        // toggleBtn.innerHTML = ` <i class="fa-solid fa-moon"></i>`
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        toPersist('dark');
        // toggleBtn.innerHTML = ` <i class="fa-solid fa-sun"></i>`
    }
});