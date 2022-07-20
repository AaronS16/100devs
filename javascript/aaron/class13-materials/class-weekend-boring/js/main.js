document.querySelector('#check').addEventListener('click', dayOfWeek)

function dayOfWeek () {
    const day = document.querySelector('#day').value.toLowerCase()

    if (day === 'monday' || day === 'wednesday' || day === 'friday') {
        document.querySelector('#placeToSee').innerText = "Boring Day..."
    }
    else if (day === 'tuesday' || day === 'thursday') {
        document.querySelector('#placeToSee').innerText = 'Class tonight!'
    }
    else if (day === 'saturday' || day === 'sunday') {
        document.querySelector('#placeToSee').innerText = 'The WEEKEND!!!'
    }
    else alert('Please enter in a day of the week')
}