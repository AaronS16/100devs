document.querySelector("#purple").addEventListener("click" , colorPurple)
document.querySelector("#green").addEventListener("click" , colorGreen)
document.querySelector("#blue").addEventListener("click" , colorBlue)
document.querySelector("#yellow").addEventListener("click" , colorYellow)
document.querySelector("#red").addEventListener("click" , colorRed)

function colorPurple(){
document.querySelector('body').style.backgroundColor ="rgb(41, 1, 43)"
document.querySelector('body').style.color = "white"
}

function colorGreen(){
    document.querySelector('body').style.backgroundColor ="rgb(11, 73, 31)"
    document.querySelector('body').style.color = "white"
    }
    
function colorBlue(){
        document.querySelector('body').style.backgroundColor ="rgb(38, 84, 201)"
        document.querySelector('body').style.color = "white"
        }

function colorYellow(){
            document.querySelector('body').style.backgroundColor ="rgb(241, 241, 151)"
            document.querySelector('body').style.color = "white"
            }

function colorRed(){
                document.querySelector('body').style.backgroundColor ="rgb(177, 82, 82)"
                document.querySelector('body').style.color = "white"
                }