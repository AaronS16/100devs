document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  //Conditionals go here


  if (day.toLowerCase() == "saturday" || day.toLowerCase() == "sunday")
    document.querySelector('#placeToSee').innerHTML = "Weekend!"

    else if (day.toLowerCase() == "monday" || day.toLowerCase() == "wednesday" || day.toLowerCase() == "Friday")
    document.querySelector('#placeToSee').innerHTML = "BORING!"

    else (day.toLowerCase() == 'tuesday' || day.toLowerCase() == "thursday")
    document.querySelector('#placeToSee').innerHTML = "Class day"

}
    