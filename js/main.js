// Toggle header class

var scrollPosition = window.scrollY;
var logoContainer = document.getElementById('header');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        logoContainer.classList.add('header-scrolled');
    } else {
        logoContainer.classList.remove('header-scrolled');
    }

});

// Contact form
const contactSubmitBtn = document.getElementById('contact_submit');

contactSubmitBtn.addEventListener('click', function() {
    var emailInput = document.getElementById('email_address');
    var footer = document.getElementById('footer');

    if (!validateEmail(emailInput.value)) {
        footer.classList.add('footer-error');
    } else {
        footer.classList.remove('footer-error');
    }
});

console.log(document.getElementById('email_address').value)

// FUNCTIONS

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}