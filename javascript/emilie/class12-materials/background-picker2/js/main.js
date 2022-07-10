document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('red').onclick = partyRed 

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgb(41, 1, 43)'
    document.querySelector('body').style.color = white
}
function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgb(11, 73, 31)'
    document.querySelector('body').style.color = 'white'
  }
  
  function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgb(38, 84, 201)'
    document.querySelector('body').style.color = 'white'
  }
  function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'rgb(241, 241, 151)'
    document.querySelector('body').style.color = 'white'
  }
  function partyRed() {
    document.querySelector('body').style.backgroundColor = 'rgb(177, 82, 82)'
    document.querySelector('body').style.color = 'white'
  }