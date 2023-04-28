import './css/reset.scss';
import './css/style.scss';
import "./js/lazyload";
import "./js/fadeIn";
import '@fortawesome/fontawesome-free/css/all.css';


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** GSAP **/



let mm = gsap.matchMedia();

window.onload = () => {
  mm.add("(min-width: 72.5rem)", () => {

    const hero = gsap.timeline({defaults: { duration: 1 }})
    hero
    // .to('.inner-glow img', {scale: 1.6, objectPosition: '0%', delay: 1})
    .to('.hero .inner-glow img', {scale: 1.5, delay: 0.5 })
    .fromTo('.hero .inner-glow img', {objectPosition: '0%'}, {objectPosition: '100%', duration: 2})
    .to('.hero .inner-glow img', {objectPosition: '50%', duration: 2}, '-=2')
    .to('.hero .inner-glow', {width: '65%', duration: 2 }, '-=2')
    .to('.hero_text', {top: 0, duration: 1, alpha: 1}, '-=0.5');


    // const about = gsap.timeline({
    //     // yes, we can add it to an entire timeline!
    //     scrollTrigger: {
    //       trigger: ".about",
    //       // pin: true,   // pin the trigger element while active
    //       start: "0% 40%",
    //       end: "10% 20%",
    //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //     }
    //   });

    //   about
    //     .from('.about_text', {alpha: 0, scale: 0.4, duration: 1})
    //     .from('.about_cards .card', {alpha: 0, y: '2em', duration: 1, stagger: 1})
    //     // .to('iframe', {alpha: 0, scale: 0.4, duration: 1}, '+=2')




    // const video = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".video",
    //       start: "0% 90%",
    //       end: "50% 20%",
    //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //     }
    //   });

    //   video
    //         .from('.video h2', {alpha: 0, scale: 0.2})

  });
}



















/** MENU **/


const menuToggle = document.querySelector('.menu-toggle')
const header = document.querySelector('header')



let scrollPos = 0


window.addEventListener('scroll', (e) => {
  const pos = window.pageYOffset
  if (pos < 20) {
    header.classList.remove('hide')
    return
  }

  if (pos - scrollPos >= 0) {
    header.classList.add('hide')
  }
  else {
    header.classList.remove('hide')
    header.classList.remove('open')
  }
  scrollPos = pos
})


menuToggle.addEventListener('click', () => {
  header.classList.toggle('open')
})


/** EXPANDABLES **/

const expandBtns = document.querySelectorAll('.toggle-expand')
expandBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.closest('.school_section')

    if (!content.classList.contains('expand')) {
      content.classList.add('expand')
      btn.innerText = 'קרא פחות'
    } else {
      content.classList.remove('expand')
      btn.innerText = 'קרא עוד'
    }
  })
})






/** MODAL **/

const modal = document.getElementById("photoModal");
const closeBtn = modal.querySelector('.close');
const images = document.querySelectorAll('img')

images.forEach(img => {
  if (img.dataset.open == "false") {
    return
  }
  img.setAttribute('tabindex', 0)
  img.style.setProperty('cursor', 'pointer')
  img.addEventListener('click', (e) => {
  openMoadal(e)
  })
  img.addEventListener('keydown', (e) => {
    if (e.key != 'Enter' && e.key) {
      return
    }
    openMoadal(e)
  })
})

closeBtn.addEventListener('click', closeModal)

function openMoadal(e) {
  modal.querySelector('img').src = e.target.src
  modal.style.display = "flex";

  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      document.removeEventListener('keydown', closeModal())
    }
  })
}

function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/** EMAIL TO CLIPBOARD **/

const email = document.querySelector('[data-email]')
email.addEventListener('click', () => {
  copyContent(email.innerHTML)
  email.classList.add('clicked')

  setTimeout(() => {
    console.log('ok')
    email.classList.remove('clicked')
  }, 2000);
})
const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
  }
}
