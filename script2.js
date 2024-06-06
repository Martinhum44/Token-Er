opened = false

function show() {
  if (!opened) {
    document.getElementById("bars").classList.add("spin")
    document.getElementById("expid").classList.add("exp")
    setTimeout(() => {
      document.getElementById("bars").classList.remove("spin")
      document.getElementById("expid").classList.remove("exp")
      document.getElementById("bars").style.transform = "rotate(90deg)"
      document.getElementById("expid").style.top = "0px"
    }, 500)
    opened = true
  } else {
    document.getElementById("bars").classList.add("spinL")
    document.getElementById("expid").classList.add("shr")
    setTimeout(() => {
      document.getElementById("bars").classList.remove("spinL")
      document.getElementById("expid").classList.remove("shr")
      document.getElementById("bars").style.transform = "rotate(0deg)"
      document.getElementById("expid").style.top = "-500px"
    }, 500)
    opened = false
  }
}