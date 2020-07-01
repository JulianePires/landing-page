(function() {
	'use strict';
	window.addEventListener('load', function() {
	// Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
	// Loop over them and prevent submission
	var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		    if (form.checkValidity() === false) {
		    	event.preventDefault();
		    	event.stopPropagation();
		    }
            $("#myModal").modal();
            form.classList.add('was-validated');
		}, false);
	});
}, false);
})();

// Set the date we're counting down to
var countDownDate = new Date("Jul 3, 2020 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Oferta Expirada!";
  }
}, 1000);

function fecharModal()
{
  document.getElementById('fundo').style.display = 'none';
  document.getElementById('modal').style.display = 'none';
}

function abrirModal()
{
  document.getElementById('fundo').style.display = 'block';
  document.getElementById('modal').style.display = 'block';
}