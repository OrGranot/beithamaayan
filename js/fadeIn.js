const fadeables = document.querySelectorAll('.fade-in')

const fadeablesOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px"
}

const fadeablesObserver = new IntersectionObserver((entries, fadeablesObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove('fade-in')
      fadeablesObserver.unobserve(entry.target)
    }
  })
}, fadeablesOptions)

fadeables.forEach(fadeable => {
  fadeablesObserver.observe(fadeable)
})
