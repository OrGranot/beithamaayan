import './css/reset.scss';
import './css/style.scss';
import { gsap } from "gsap";

const nav = document.querySelector('header')
const menuToggle = document.querySelector('.menu-toggle')
const header = document.querySelector('header')
const readMore = document.querySelector('.read-more .btn')
const links = document.querySelectorAll('a')
let clicked = false


let scrollPos = 0


window.addEventListener('scroll', (e) => {
  const pos = window.pageYOffset
  if (pos - scrollPos > 0) {
    nav.classList.add('hide')
  }
  else {
    nav.classList.remove('hide')
  }
  scrollPos = pos
})


menuToggle.addEventListener('click', () => {
  header.classList.toggle('open')
})

// readMore.addEventListener('click', () => {
//   const schoolSec = document.querySelector('.school')

//   if (!schoolSec.classList.contains('open')) {
//     schoolSec.classList.add('open')
//     readMore.innerText="קרא פחות"
//   } else {
//     schoolSec.classList.remove('open')
//     schoolSec.scrollIntoView()
//     readMore.innerText="קרא עוד"
//   }
// })




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



const hero = gsap.timeline({defaults: { duration: 1 }})
const video = gsap.timeline()


let mm = gsap.matchMedia();

mm.add("(min-width: 72.5rem)", () => {
  hero
  // .to('.inner-glow img', {scale: 1.6, objectPosition: '0%', delay: 1})
  .to('.hero .inner-glow img', {scale: 1.5, delay: 0.5 })
  .fromTo('.hero .inner-glow img', {objectPosition: '0%'}, {objectPosition: '100%', duration: 2})
  .to('.hero .inner-glow img', {objectPosition: '50%', duration: 2})
  .to('.hero .inner-glow', {width: '65%', duration: 2 }, '-=2')
  .to('.hero_text', {top: 0, duration: 1, alpha: 1}, '-=0.5');
});
