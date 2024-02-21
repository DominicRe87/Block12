const path =`${window.location.origin}/home.html`

setTimeout(() => {
  console.log(path)
  window.location.href = path
}, 5000)