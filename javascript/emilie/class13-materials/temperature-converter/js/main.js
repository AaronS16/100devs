//Write your pseduo code first! 
document.querySelector("#submit").addEventListener('click', numberConvert)

function numberConvert() {
    let infoNumb = document.querySelector('#celciusText').value
    let temp = infoNumb * 9/5 + 32

  document.querySelector("#placeResultsHere").innerText = temp 
}