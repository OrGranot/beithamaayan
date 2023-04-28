const files = document.querySelectorAll('[data-src]')

function preload(file) {
  const src = file.getAttribute("data-src")
  if(!src) {
    return;
  }
  file.src = src
}


const fileOptions = {
  threshold: 0,
  rootMargin: "0px 0px 400px 0px"
}

const fileObserver = new IntersectionObserver((entries, fileObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preload(entry.target)
      fileObserver.unobserve(entry.target)
    }
  })
}, fileOptions)

files.forEach(file => {
  fileObserver.observe(file)
})
