document.querySelector('#check').addEventListener('click', check)


function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
if ( day.toLowerCase() === "monday" || day.toLowerCase() === "wednesday" || day.toLowerCase() === "friday") {
  document.querySelector('#placeToSee').innerText = "It's a Boring Day"
}
else if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday") {
  document.querySelector('#placeToSee').innerText = "It's a Class Day"
}
else if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
  document.querySelector('#placeToSee').innerText = "It's the Weekend!!"
}
else{ alert('Try again. Please, type in a day of the week!')
}
}
