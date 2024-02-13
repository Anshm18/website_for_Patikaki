var countDownDate = new Date("feb 15, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element
  var times = hours + ": " + minutes + ": " + seconds;
  document.getElementById("timer").innerText = times;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerText = "EXPIRED";
  }
}, 1000);

setTimeout(function () {
  document.getElementById('container2').classList.add('active');
  document.getElementById('container1').classList.add('fad');
},15000)

document.getElementById("close-btn").addEventListener('click',function () {
  document.getElementById('container2').classList.remove('active');
  document.getElementById('container1').classList.remove('fad');
})