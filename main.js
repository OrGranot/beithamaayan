import './css/reset.scss';
import './css/style.scss';
import { gsap } from "gsap";

const nav = document.querySelector('header')
const menuToggle = document.querySelector('.menu-toggle')
const header = document.querySelector('header')

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

const tl = gsap.timeline({defaults: { duration: 1 }})

tl
.to('.inner-glow img', {scale: 1.6, objectPosition: '0%', delay: 1})
.fromTo('.inner-glow img', {objectPosition: '0%'}, {objectPosition: '100%', duration: 2})
.to('.hero .inner-glow', {width: '65%' })
.to('.hero_text', { left: '5vh', duration: 1, alpha: 1})
