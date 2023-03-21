import './style.scss'

// const horizontal_content = document.querySelector('.horizontal-content')
// const horizontal_items = gsap.utils.toArray(".panel")
// // const horizontal_content = horizontal_content.querySelector(".horizontal-content")

// gsap.to(horizontal_items, {
//   xPercent: 200,
//   wase: "sign.out",
//   scrollTrigger: {
//     trigger: horizontal_content,
//     pin: true,
//     scrub: 1,
//     snap: (horizontal_items.lenght),
//     end: () => `+=${horizontal_content.offsetHeight}`
//     // markers: true
//   }
// })

// console.log(horizontal_items.length - 1)
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()
})
