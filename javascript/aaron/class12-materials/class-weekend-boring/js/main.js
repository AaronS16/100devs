document.querySelector('#check').addEventListener('click', check)
    

function check () {
    const day = document.querySelector('#day').value

if (day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
    document.querySelector('#placeToSee').innerText = 'Weekend Yay!'
    }
    else if (day.toLowerCase() === 'monday' || day.toLowerCase() === 'wednesday' || day.toLowerCase() === 'friday') {
    document.querySelector('#placeToSee').innerHTML = 'Boring Day'
    }
    else if (day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'thursday') {
    document.querySelector('#placeToSee').innerHTML = 'Class Day'
    }
    else {alert("Please enter in a day")
    }
   
}