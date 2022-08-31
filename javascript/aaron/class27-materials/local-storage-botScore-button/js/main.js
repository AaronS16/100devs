//Create a button that adds 1 to a botScore stored in localStorage 


document.querySelector('button').addEventListener('click', addOne)

function addOne(){
    localStorage.setItem('count', 1)
    
}