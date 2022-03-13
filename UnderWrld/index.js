mybutton = document.getElementById("myBtn");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.form-group').submit(function(e){
  e.preventDefault();
  if(!$('.phone').val().match('[0-9]{12}')){
    alert("Please put 10 digit mobile number");
    return;
  }

});

function myFunction(){
  document.getElementById("myForm").submit();
  alert("Submitted! Thank you for your interest in UnderWrld. We'll contact you as soon as possible.")
}
