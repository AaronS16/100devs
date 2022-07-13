document.querySelector('#check').addEventListener('click', dayCheck)

function dayCheck () {

    const day = document.querySelector('#day').value.toLowerCase()

if (day === 'monday' || day === 'wednesday' || day === 'friday'){
    document.querySelector('#placeToSee').innerText = "Boring Day"
    }
    else if (day === 'saturday' || day === 'sunday') {
        document.querySelector('#placeToSee').innerText = "Weekend YAY!!!"
    }
    else if (day === 'tuesday' || day === 'thursday') {
        document.querySelector('#placeToSee').innerText = "Class Day"
    }
    else alert('Please enter in a day of the week')
}