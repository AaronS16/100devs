total = 0

document.querySelector('#pumpkin').addEventListener('click', clearAll)
document.querySelector('#dominosPizza').addEventListener('click', add3)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('.wings').addEventListener('click', add5)
document.querySelector('.burgers').addEventListener('click', sub6)
document.querySelector('.ice').addEventListener('click', sub15)
document.querySelector('.jomboy').addEventListener('click', add8)


function clearAll () {
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}
function add3 () {
    total = total + 3
    document.querySelector('#placeToPutResult').innerText = total
}
function add9 () {
    total = total + 9
    document.querySelector('#placeToPutResult').innerText = total
}
function sub2 () {
    total = total - 2
    document.querySelector('#placeToPutResult').innerText = total
}
function add5 () {
    total = total + 5
    document.querySelector('#placeToPutResult').innerText = total
}
function sub6 () {
    total = total - 6
    document.querySelector('#placeToPutResult').innerText = total
}
function sub15 () {
    total = total - 15
    document.querySelector('#placeToPutResult').innerText = total
}
function add8 () {
    total = total + 8
    document.querySelector('#placeToPutResult').innerText = total
}