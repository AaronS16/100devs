document.querySelector("#check").addEventListener("click", check)

function check(){
  const day = document.querySelector('#day').value.toLowerCase()

if ( day === "monday" || day === "wednesday" || day === "friday"){
  document.querySelector("#placeToSee").innerText = "It's a Boring Day!!"
}
  else if ( day === "tuesday" || day === "thursday") {
  document.querySelector("#placeToSee").innerText = "It's a Class Day!!"
}
  else document.querySelector("#placeToSee").innerText = "It's the WEEKEND!!"
}
