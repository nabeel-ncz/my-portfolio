let home = document.getElementById('home_link')
let contact = document.getElementById('contact_link')
let about = document.getElementById('about_link')
let portfolio = document.getElementById('portfolio_link')
const menu_button = document.getElementById('check')
const nav_container = document.querySelector('.nav-links-container')
const header_main = document.getElementsByTagName('header')[0];
const close = document.getElementById('close-btn')
const connect_btn = document.getElementById('connect-btn')
const sm_container = document.querySelector('.active-social-media')
const connect_btn_arrow = document.getElementById('connect-btn-arrow')





// Helper function to handle the animation
function animateElement(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

// Function to handle intersection changes
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateElement(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

// Set up the Intersection Observer
const options = {
    threshold: 0.5, // Adjust this value based on your needs
};

const observer = new IntersectionObserver(handleIntersection, options);

// Add the observed elements
const section_1 = document.getElementById('about');
const section_2 = document.getElementById('portfolio');
const section_3 = document.getElementById('contact');
const section_4 = document.getElementById('home');
const box = document.getElementById('cards-1');

observer.observe(section_1);
handleIntersection([{ target: section_1 }], observer);
observer.observe(section_2);
handleIntersection([{ target: section_2 }], observer);
observer.observe(section_3);
handleIntersection([{ target: section_3 }], observer);
observer.observe(section_4);
handleIntersection([{ target: section_4 }], observer);


const cards_1 = document.getElementById('skills-cards');
const all_cards = document.querySelectorAll('.card');
const last_card = all_cards[all_cards.length - 1];
const scrollDuration = 3000; // Animation duration in milliseconds
const scrollStep = 20;

// Animate the scrolling
let startTime = null;

function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1);
    const scrollDistance = scrollPosition * progress;

    cards_1.scrollLeft = scrollDistance;

    if (progress < 1) {
        requestAnimationFrame(animateScroll);
    }
}

requestAnimationFrame(animateScroll);


const scrollPosition = last_card.offsetLeft - cards_1.offsetLeft;

home.addEventListener('click', () => {
    activeHome()
    nav_container.classList.toggle('nav-active')
})
about.addEventListener('click', () => {
    activeAbout()
    nav_container.classList.toggle('nav-active')
})
contact.addEventListener('click', () => {
    activeContact()
    nav_container.classList.toggle('nav-active')
})
portfolio.addEventListener('click', () => {
    activePorfolio()
    nav_container.classList.toggle('nav-active')
})
close.addEventListener('click', () => {
    nav_container.classList.remove('nav-active')
})

connect_btn.addEventListener('click', () => {
    sm_container.classList.toggle('active-sm-plus')
    if (connect_btn_arrow.classList.contains('bxs-chevron-left')) {
        connect_btn_arrow.classList.add('bxs-chevron-right')
        connect_btn_arrow.classList.remove('bxs-chevron-left')
    } else {
        connect_btn_arrow.classList.remove('bxs-chevron-right')
        connect_btn_arrow.classList.add('bxs-chevron-left')
    }
})

menu_button.addEventListener('click', () => {
    nav_container.classList.toggle('nav-active')
})



function setShadow() {
    if (window.scrollY >= 100) {
        header_main.classList.add('bottom-shadow')
    } else {
        header_main.classList.remove('bottom-shadow')
    }
}


function showError() {
    alert("Currently not available")
}




function activeHome() {
    home.classList.toggle('active')
    about.classList.remove('active')
    contact.classList.remove('active')
    portfolio.classList.remove('active')
}
function activeAbout() {
    about.classList.toggle('active')
    home.classList.remove('active')
    contact.classList.remove('active')
    portfolio.classList.remove('active')
}
function activeContact() {
    contact.classList.toggle('active')
    home.classList.remove('active')
    about.classList.remove('active')
    portfolio.classList.remove('active')
}
function activePorfolio() {
    portfolio.classList.toggle('active')
    home.classList.remove('active')
    about.classList.remove('active')
    contact.classList.remove('active')
}