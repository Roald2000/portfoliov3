AOS.init();

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const scrollToTopBtn = document.querySelector('#scrollToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        scrollToTopBtn.style.display = 'block';
        document.querySelector('header').style.boxShadow = '0 3px 0 1px var(--background-button-hover)';
    } else {
        scrollToTopBtn.style.display = 'none';
        document.querySelector('header').style.boxShadow = '';
    }

});

// const myEmail = document.getElementById('myEmail');
// const copyEmail = () => {
//     navigator.clipboard.writeText(myEmail.textContent);
// }

// const telNumber = document.getElementById('telNumber');
// const copyTelNumber = () => {
//     navigator.clipboard.writeText(telNumber.textContent);
// }


// document.querySelectorAll('header ul li a').forEach(element => {
//     element.addEventListener('click', () => {
//         AOS.refresh();
//     })
// })