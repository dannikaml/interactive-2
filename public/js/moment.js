const time = moment();
const currentTimeElement = document.getElementById("current-time");
currentTimeElement.textContent = time.format('MMMM Do YYYY, h:mm:ss a');
