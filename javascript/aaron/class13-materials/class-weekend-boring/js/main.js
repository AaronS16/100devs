//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', dayOfWeek)

function dayOfWeek () {

  const day = document.querySelector('#day').value.toLowerCase()

  if (day === 'monday' || day === 'wednesday' || day === 'friday') {
    document.querySelector('#placeToSee').innerText = "Boring day"
  }
  else if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerText = 'Class Day'
  }
  else if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerText = "Weekend Yay!!!"
  }
  else alert('Please enter in a day')
}