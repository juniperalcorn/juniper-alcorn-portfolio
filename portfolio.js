//pages
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')
//buttons
const aboutButton = document.getElementById('aboutButton')
const portfolioButton = document.getElementById('portfolioButton')
const contactButton = document.getElementById('contactButton')
//navigation functions
let goHome = function(){
    aboutButton.style.display='none';
    about.style.display='block';
    portfolio.style.display='none';
    contact.style.display='none'
}
let goPortfolio = function(){
    aboutButton.style.display='flex';
    about.style.display='none';
    portfolio.style.display='flex';
    contact.style.display='none'
}
let goContact = function(){
    aboutButton.style.display='flex';
    about.style.display='none';
    portfolio.style.display='none';
    contact.style.display='flex'
}

//event listeners
aboutButton.addEventListener('click', goHome)
portfolioButton.addEventListener('click', goPortfolio)
contactButton.addEventListener('click', goContact)

//functions


