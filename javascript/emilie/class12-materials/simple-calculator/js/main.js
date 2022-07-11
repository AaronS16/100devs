document.querySelector('#pumpkin').addEventListener('click', atzero)
document.querySelector('#dominosPizza').addEventListener('click', add1)
document.querySelector('#zebra').addEventListener('click', add5)
document.querySelector('#cantThinkOfAnything').addEventListener('click', add10)
document.querySelector('#apple').addEventListener('click', sub1)

function atzero () {
    total=0
   document.querySelector('#placeToPutResult').innerText = total 
}
function add1 (){
    total = total + 1
    document.querySelector('#placeToPutResult').innerText = total 
}
function add5 (){
    total = total+ 5
    document.querySelector('#placeToPutResult').innerText = total 
}
function add10 (){
    total = total + 10
    document.querySelector('#placeToPutResult').innerText =  total
}
function sub1 (){
    total = total - 2
    document.querySelector('#placeToPutResult').innerText = total
}