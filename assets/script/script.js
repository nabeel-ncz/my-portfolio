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

window.addEventListener('scroll',()=>{
    setShadow()
})

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
close.addEventListener('click',()=>{
    nav_container.classList.remove('nav-active')
})

connect_btn.addEventListener('click',()=>{
    sm_container.classList.toggle('active-sm-plus')
    if(connect_btn_arrow.classList.contains('bxs-chevron-left')){
        connect_btn_arrow.classList.add('bxs-chevron-right')
        connect_btn_arrow.classList.remove('bxs-chevron-left')
    }else{
        connect_btn_arrow.classList.remove('bxs-chevron-right')
        connect_btn_arrow.classList.add('bxs-chevron-left')
    }
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


function showError(){
    alert("Currently not available")
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