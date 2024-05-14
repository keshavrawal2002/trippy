'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector('[data-overlay]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbar = document.querySelector('[data-navbar]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const navLinks = document.querySelectorAll('[data-nav-link]');

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function () {
      navbar.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

function goToLink(link) {
  window.location.href = link;
}

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('subscribeForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    // Call your subscribe function passing the email as a parameter
    subscribe(email);
  });

  function subscribe(email) {
    // Here you can perform the subscription process, for example, send a request to your server
    console.log('Subscribing with email:', email);
    // Display success message
    successMessage.style.display = 'block';
    setTimeout(function () {
      successMessage.style.display = 'none';
    }, 3000); // Hide success message after 3 seconds
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('bookingForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Call your subscribe function passing the email as a parameter
    book();
  });

  function book() {
    // Here you can perform the subscription process, for example, send a request to your server
    // Display success message
    successMessageBooking.style.display = 'block';
    setTimeout(function () {
      successMessageBooking.style.display = 'none';
      goToLink('/index.html');
    }, 3000); // Hide success message after 3 seconds
  }
});

/**
 * header sticky & go to top
 */

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 200) {
    header.classList.add('active');
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    goTopBtn.classList.remove('active');
  }
});
