//pages
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')
const header = document.getElementById('headerScroll')

const resume = document.getElementById("resume")
const resumePic = document.getElementById("resumePic")
const downloadButton = document.getElementById("download")

const githublinks=document.querySelectorAll(".screen")

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

resumePic.addEventListener("mouseover", function(e){
  downloadButton.classList.add("visibleButton")
  resumePic.classList.add("hoveredResume")
})

resumePic.addEventListener("mouseout", function(e){
  downloadButton.classList.remove("visibleButton")
  resumePic.classList.remove("hoveredResume")
})

downloadButton.addEventListener("mouseover", function(e){
  resumePic.classList.add("hoveredResume")
})

githublinks.addEventListener("mouseover", function(e){
  githublinks.classList.add("hoveredResume")
})