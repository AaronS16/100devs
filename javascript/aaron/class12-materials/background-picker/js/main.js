document.querySelector('#purple').addEventListener('click', purpleParty)
document.querySelector('#green').addEventListener('click', greenParty)
document.querySelector('#blue').addEventListener('click', blueParty)
document.querySelector('#red').addEventListener('click', redParty)

function purpleParty () {
    document.querySelector('body').style.backgroundColor = "rgba(241,63,247,1)"
    document.querySelector('body').style.color = 'white'
}
function greenParty () {
    document.querySelector('body').style.backgroundColor = "rgba(0,253,81,1)"
    document.querySelector('body').style.color = 'white'
}
function blueParty () {
    document.querySelector('body').style.backgroundColor = "rgba(0,254,255)"
    document.querySelector('body').style.color = 'white'
}
function redParty () {
    document.querySelector('body').style.backgroundColor = "rgba(255,0,0)"
    document.querySelector('body').style.color ='white'
}