const j = document.querySelector('#j')
const tommy = document.querySelector('#tommy')
const carmy = document.querySelector('#carmy')
const ryan = document.querySelector('#ryan')
const zachary = document.querySelector('#zachary')

document.querySelector('#jNext').addEventListener('click', jNext)
document.querySelector('#tommyNext').addEventListener('click',  tommyNext)
document.querySelector('#carmyNext').addEventListener('click', carmyNext)
document.querySelector('#rrNext').addEventListener('click', rrNext)
document.querySelector('#zachNext').addEventListener('click', zachNext)

function jNext(){
	tommy.classList.add("hidden")
	carmy.classList.add("hidden")
	ryan.classList.add("hidden")
	zachary.classList.add("hidden")
	j.classList.toggle("hidden")
	document.querySelector('body').style.backgroundColor ="rgb(214, 99, 118)"
}

function tommyNext(){
	j.classList.add("hidden")
	carmy.classList.add("hidden")
	ryan.classList.add("hidden")
	zachary.classList.add("hidden")
	tommy.classList.toggle("hidden")
	document.querySelector('body').style.backgroundColor ="rgb(71, 4, 15)"
}

function carmyNext(){
	tommy.classList.add("hidden")
	j.classList.add("hidden")
	ryan.classList.add("hidden")
	zachary.classList.add("hidden")
	carmy.classList.toggle("hidden")
	
}
function rrNext(){
	tommy.classList.add("hidden")
	carmy.classList.add("hidden")
	j.classList.add("hidden")
	zachary.classList.add("hidden")
	ryan.classList.toggle("hidden")
	document.querySelector('body').style.backgroundColor ="rgb(173, 78, 94)"
}
function zachNext(){
	tommy.classList.add("hidden")
	carmy.classList.add("hidden")
	ryan.classList.add("hidden")
	j.classList.add("hidden")
	zachary.classList.toggle("hidden")
	document.querySelector('body').style.backgroundColor ="rgb(133, 21, 40)"
}