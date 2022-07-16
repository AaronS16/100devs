let total = 0 

document.querySelector("#pumpkin").addEventListener('click', addzero)
document.querySelector("#dominosPizza").addEventListener('click', addone)
document.querySelector("#zebra").addEventListener('click', addfive)
document.querySelector("#orange").addEventListener('click', addten)
document.querySelector("#apple").addEventListener('click', subtwo)

function addzero() {
    total = 0 
    document.querySelector("#placeToPutResult").innerText = total
}
function addone() {
    total = total + 1 
    document.querySelector("#placeToPutResult").innerText = total
}

function addfive() {
    total = total + 5 
    document.querySelector("#placeToPutResult").innerText = total
}

function addten() {
    total = total + 10
    document.querySelector("#placeToPutResult").innerText = total
}

function subtwo() {
    total = total - 2
    document.querySelector("#placeToPutResult").innerText = total
}