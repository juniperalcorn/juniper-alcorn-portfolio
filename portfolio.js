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

//fullscreen nav
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

//mobilePages
const aboutMobile = document.getElementById('aboutMobile')
const portfolioMobile = document.getElementById('portfolioMobile')
const contactMobile = document.getElementById('contactMobile')
const resumeMobile = document.getElementById('resumeMobile')
const skillsMobile = document.getElementById('skillsMobile')
//mobile nav
const mobileAboutButton = document.getElementById('aboutButtonMobile')
const mobileSkillButton = document.getElementById('skillButtonMobile')
const mobilePortButton = document.getElementById('portButtonMobile')
const mobileResumeButton= document.getElementById('resumeButtonMobile')
const mobileContactButton= document.getElementById('contactButtonMobile')
//mobile nav functions
const goToMobileAbout = () => {
  console.log("go to about")
  aboutMobile.style.display="block"
  skillsMobile.style.display="none"
  portfolioMobile.style.display="none"
  contactMobile.style.display="none"
  resumeMobile.style.display="none"

  mobileAboutButton.style.color="white"
  mobileSkillButton.style.color="#9CBCAC"
  mobilePortButton.style.color="#9CBCAC"
  mobileResumeButton.style.color="#9CBCAC"
  mobileContactButton.style.color="#9CBCAC"
}
const goToMobileSkills = () => {
  console.log("go to skills")
  aboutMobile.style.display="none"
  skillsMobile.style.display="block"
  portfolioMobile.style.display="none"
  contactMobile.style.display="none"
  resumeMobile.style.display="none"

  mobileAboutButton.style.color="#9CBCAC"
  mobileSkillButton.style.color="white"
  mobilePortButton.style.color="#9CBCAC"
  mobileResumeButton.style.color="#9CBCAC"
  mobileContactButton.style.color="#9CBCAC"
}

const goToMobilePortfolio = () => {
  console.log("go to portfolio")
  aboutMobile.style.display="none"
  skillsMobile.style.display="none"
  portfolioMobile.style.display="flex"
  contactMobile.style.display="none"
  resumeMobile.style.display="none"

  mobileAboutButton.style.color="#9CBCAC"
  mobileSkillButton.style.color="#9CBCAC"
  mobilePortButton.style.color="white"
  mobileResumeButton.style.color="#9CBCAC"
  mobileContactButton.style.color="#9CBCAC"
}

const goToMobileContact = () => {
  console.log("go to contact")
  aboutMobile.style.display="none"
  skillsMobile.style.display="none"
  portfolioMobile.style.display="none"
  contactMobile.style.display="flex"
  resumeMobile.style.display="none"

  mobileAboutButton.style.color="#9CBCAC"
  mobileSkillButton.style.color="#9CBCAC"
  mobilePortButton.style.color="#9CBCAC"
  mobileResumeButton.style.color="#9CBCAC"
  mobileContactButton.style.color="white"
}

const goToMobileResume = () => {
  console.log("go to resume")
  aboutMobile.style.display="none"
  skillsMobile.style.display="none"
  portfolioMobile.style.display="none"
  contactMobile.style.display="none"
  resumeMobile.style.display="flex"

  mobileAboutButton.style.color="#9CBCAC"
  mobileSkillButton.style.color="#9CBCAC"
  mobilePortButton.style.color="#9CBCAC"
  mobileResumeButton.style.color="white"
  mobileContactButton.style.color="#9CBCAC"
}


mobileAboutButton.addEventListener('click', goToMobileAbout)
mobileSkillButton.addEventListener('click', goToMobileSkills)
mobilePortButton.addEventListener('click', goToMobilePortfolio)
mobileResumeButton.addEventListener('click', goToMobileResume)
mobileContactButton.addEventListener('click', goToMobileContact)