import './css/reset.scss';
import './css/style.scss';
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
  console.log(pos - scrollPos)
  scrollPos = pos
})


menuToggle.addEventListener('click', () => {
  header.classList.toggle('open')
})
