function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

<<<<<<< HEAD

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

function greet(timeStr) {
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
=======
/* End Given Code, don't edit above here...*/
function greet() 
/* Write your implementation of greet() */
function greet(timeStr) {
  const hour =parseInt(timeStr, 10);
   if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
  
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
   document.getElementById('#greeting').innerText =str
>>>>>>> 3766c059f4a065de8945e55b7bed950070c9a9fc
}