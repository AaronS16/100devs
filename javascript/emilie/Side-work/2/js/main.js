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
}

function tommyNext(){
	j.classList.add("hidden")
	carmy.classList.add("hidden")
	ryan.classList.add("hidden")
	zachary.classList.add("hidden")
	tommy.classList.toggle("hidden")
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
}
function zachNext(){
	tommy.classList.add("hidden")
	carmy.classList.add("hidden")
	ryan.classList.add("hidden")
	j.classList.add("hidden")
	zachary.classList.toggle("hidden")
}