//pages
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')
const header = document.getElementById('header')
//buttons
const aboutButton = document.getElementById('aboutButton')
const portfolioButton = document.getElementById('portfolioButton')
const contactButton = document.getElementById('contactButton')
//other variables
const sticky = header.offsetTop

//navigation functions
let goHome = function(){
    aboutButton.style.display='none';
    portfolioButton.style.display='flex';
    // contactButton.style.display='flex';
    about.style.display='block';
    portfolio.style.display='none';
    // contact.style.display='none'
}
let goPortfolio = function(){
    aboutButton.style.display='flex';
    portfolioButton.style.display='none';
    // contactButton.style.display='flex';
    about.style.display='none';
    portfolio.style.display='flex';
    // contact.style.display='none'
}
let goContact = function(){
    aboutButton.style.display='flex';
    portfolioButton.style.display='flex';
    // contactButton.style.display='none';
    about.style.display='none';
    portfolio.style.display='none';
    // contact.style.display='flex'
}

let scrolling = function(){
    if (window.pageYOffset > sticky){
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}
//event listeners
aboutButton.addEventListener('click', goHome)
portfolioButton.addEventListener('click', goPortfolio)
contactButton.addEventListener('click', goContact)

window.onscroll = function() {scrolling()}
//functions


