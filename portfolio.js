//pages
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')
const header = document.getElementById('headerScroll')

//navigation functions
function findOffset(element) {
    let top = 300, left = 0;
  
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
