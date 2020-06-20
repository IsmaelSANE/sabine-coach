$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 1000,
	    singleItem:true,
	    autoPlay: 18000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  var all = document.getElementById("all");
  var clown = document.getElementById("clown");
  var arlette = document.getElementById("arlette");

  //To hide an element, set the style display property to “none”.
  document.getElementById("clown").style.display = "none";
  //To show an element, set the style display property to “block”.
  //document.getElementById("clown").style.display = "block";
  arlette.onclick = function(){
      clown.style.display = "block";
  }
  all.onclick = function(){
      clown.style.display = "none";
  }
});




