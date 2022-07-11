document.querySelector('#check').addEventListener('click', check)

function check () {
    const day = document.querySelector('#day').value

if (day.toLowerCase() === 'sunday' || day.toLowerCase() === 'saturday'){
    document.querySelector('#placeToSee').innerText = "Weekend YAY!!!"
    }
    else if (day.toLowerCase() === 'monday' || day.toLowerCase() === 'wednesday' || day.toLowerCase() === 'friday'){
        document.querySelector('#placeToSee').innerText = 'Boring Days...'
    }
    else if (day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'thursday') {
        document.querySelector('#placeToSee').innerText = 'Learning Today'
    }
    else (alert("Please enter in a day"))
}