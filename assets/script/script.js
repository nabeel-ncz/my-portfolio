let home = document.getElementById('home_link')
let contact = document.getElementById('contact_link')
let about = document.getElementById('about_link')
let portfolio = document.getElementById('portfolio_link')
const menu_button = document.getElementById('check')
const nav_container = document.querySelector('.nav-links-container')
const header_main = document.getElementsByTagName('nav')[0];


home.addEventListener('click',()=>{
    activeHome()
    nav_container.classList.toggle('nav-active')
})
about.addEventListener('click',()=>{
    activeAbout()
    nav_container.classList.toggle('nav-active')
})
contact.addEventListener('click',()=>{
    activeContact()
    nav_container.classList.toggle('nav-active')
})
portfolio.addEventListener('click',()=>{
    activePorfolio()
    nav_container.classList.toggle('nav-active')
})


menu_button.addEventListener('click',()=>{
    nav_container.classList.toggle('nav-active')
})
function setShadow(){
if(window.scrollY >= 100){
    header_main.classList.add('bottom-shadow')
}else{
    header_main.classList.remove('bottom-shadow')
}
}







function activeHome(){
    home.classList.toggle('active')
    about.classList.remove('active')
    contact.classList.remove('active')
    portfolio.classList.remove('active')
}
function activeAbout(){
    about.classList.toggle('active')
    home.classList.remove('active')
    contact.classList.remove('active')
    portfolio.classList.remove('active')
}
function activeContact(){
    contact.classList.toggle('active')
    home.classList.remove('active')
    about.classList.remove('active')
    portfolio.classList.remove('active')
}
function activePorfolio(){
    portfolio.classList.toggle('active')
    home.classList.remove('active')
    about.classList.remove('active')
    contact.classList.remove('active')
}