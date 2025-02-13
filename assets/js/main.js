/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

/*===== RESUME SECTION ANIMATION =====*/
document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.resume__container', {
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true
    });
});

/*===== CONTACT FORM ANIMATION =====*/
document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.contact__container', {
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true
    });

    const contactForm = document.querySelector(".contact__form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form from refreshing page

        // Simple form validation
        const name = contactForm.querySelector("input[name='name']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const message = contactForm.querySelector("textarea[name='message']").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        alert("Message sent successfully!");
        contactForm.submit(); // Submit the form after validation
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skills__bar span");
    const skillsSection = document.getElementById("skills");

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isElementInViewport(skillsSection)) {
            skillBars.forEach(bar => {
                bar.style.width = bar.getAttribute("data-width");
            });
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
});





sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
