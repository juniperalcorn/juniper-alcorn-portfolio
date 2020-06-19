//pages
const about = document.getElementById('about')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')
const header = document.getElementById('headerScroll')
const skills = document.getElementById('skills')

//nav
const skillButton = document.getElementById('skillButton')
const portButton = document.getElementById('portButton')
const resumeButton = document.getElementById('resumeButton')
const contactButton = document.getElementById('contactButton')

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
    goToSkills()
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

const goToSkills = () => {
  skills.style.display="block"
  portfolio.style.display="none"
  contact.style.display="none"
  resume.style.display="none"

  skillButton.style.color="white"
  portButton.style.color="#9CBCAC"
  resumeButton.style.color="#9CBCAC"
  contactButton.style.color="#9CBCAC"
}

const goToPortfolio = () => {
  skills.style.display="none"
  portfolio.style.display="flex"
  contact.style.display="none"
  resume.style.display="none"

  skillButton.style.color="#9CBCAC"
  portButton.style.color="white"
  resumeButton.style.color="#9CBCAC"
  contactButton.style.color="#9CBCAC"
}

const goToContact = () => {
  skills.style.display="none"
  portfolio.style.display="none"
  contact.style.display="flex"
  resume.style.display="none"

  skillButton.style.color="#9CBCAC"
  portButton.style.color="#9CBCAC"
  resumeButton.style.color="#9CBCAC"
  contactButton.style.color="white"
}

const goToResume = () => {
  skills.style.display="none"
  portfolio.style.display="none"
  contact.style.display="none"
  resume.style.display="block"

  skillButton.style.color="#9CBCAC"
  portButton.style.color="#9CBCAC"
  resumeButton.style.color="white"
  contactButton.style.color="#9CBCAC"
}

skillButton.addEventListener('click', goToSkills)
portButton.addEventListener('click', goToPortfolio)
contactButton.addEventListener('click', goToContact)
resumeButton.addEventListener('click', goToResume)

//RESUME
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