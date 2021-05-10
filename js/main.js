// Toggle header class

const contactSubmitBtn = document.getElementById('contact_submit');
var scrollPosition = window.scrollY;
var mainHeader = document.getElementById('header');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        mainHeader.classList.add('header-scrolled');
    } else {
        mainHeader.classList.remove('header-scrolled');
    }

});

// Contact form
contactSubmitBtn.addEventListener('click', function() {
    var emailInput = document.getElementById('email_address');
    var footer = document.getElementById('footer');

    if (emailInput.value !== '') {
        if (!validateEmail(emailInput.value)) {
            footer.classList.add('footer-error');
        } else {
            footer.classList.remove('footer-error');
        }
    }
});

// Header mobile
const headerMobileTrigger = document.getElementById('header_mobile_trigger');

headerMobileTrigger.addEventListener('click', function(e) {

    e.preventDefault();

    let triggerIcon = document.querySelector("#header_mobile_trigger img");

    mainHeader.classList.toggle('header-mobile-menu');

    if (mainHeader.classList.contains('header-mobile-menu')) {
        triggerIcon.setAttribute('src', './images/icon-close.svg');
    } else {
        triggerIcon.setAttribute('src', './images/icon-hamburger.svg');
    }
});

window.addEventListener('resize', function(event) {
    if (mainHeader.classList.contains('header-mobile-menu')) {
        if (window.innerWidth > 768) {
            mainHeader.classList.remove('header-mobile-menu');
            document.querySelector("#header_mobile_trigger img").setAttribute('src', './images/icon-hamburger.svg');
        }
    }
}, true);

// FUNCTIONS

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}