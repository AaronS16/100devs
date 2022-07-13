document.querySelector('#purple').addEventListener('click', purpleParty)
document.querySelector('#green').addEventListener('click', greenParty)
document.querySelector('#blue').addEventListener('click', blueParty)
document.querySelector('#red').addEventListener('click', redParty)

function purpleParty () {
    document.querySelector('body').style.backgroundColor = 'rgba(155, 3, 160)'
    document.querySelector('body').style.color = 'white'
}
function greenParty () {
    document.querySelector('body').style.backgroundColor = "rgba(1, 102, 33)"
    document.querySelector('body').style.color = 'white'
}
function blueParty () {
    document.querySelector('body').style.backgroundColor = 'rgba(12, 0, 182)'
    document.querySelector('body').style.color = 'white'
}
function redParty () {
    document.querySelector('body').style.backgroundColor = 'rgba(255,0,0)'
    document.querySelector('body').style.color = 'white'
}