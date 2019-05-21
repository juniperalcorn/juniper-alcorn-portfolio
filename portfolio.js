//pages
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')
const header = document.getElementById('headerScroll')
//buttons
const aboutButton = document.getElementById('aboutButton')
const portfolioButton = document.getElementById('portfolioButton')
const contactButton = document.getElementById('contactButton')
//other variables

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

function findOffset(element) {
    let top = 0, left = 0;
  
    do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);
  
    return {
      top: top,
      left: left
    };
}
  
window.onload = function () {
    let stickyHeader = document.getElementById('headerScroll');
    let headerOffset = findOffset(stickyHeader);
    console.log(headerOffset)
    window.onscroll = function() {
        // body.scrollTop is deprecated and no longer available on Firefox
        const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (bodyScrollTop > headerOffset.top) {
        stickyHeader.classList.add('fixed');
        } else {
        stickyHeader.classList.remove('fixed');
    }
};
}
