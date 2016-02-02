
var numDots = 100;

for(var i=0; i < numDots; i++){

	//setTimeout(createDot, Math.random()*5000)
	
}

setInterval(createDot, 50);

function createDot(){

	var $dot = $('<div>',{class:'dot'});
	$('.dot-container').append($dot);

	//var randomCenterX = $(window).width()/2 + 50 - Math.random()*100;
	//var randomCenterY = $(window).height()/2 + 50 - Math.random()*100;

	$dot.css({
		x: $(window).width()/2,
		y:$(window).height()/2,
	 	scale: 0.2,
	 	opacity: 0
	});

	setTimeout(function(){
		$dot.css({ opacity:1});

	},Math.random()*200);

	var numDirection = Math.ceil(Math.random()*4);

		var dX;
		var dY;

	var randomScale = 0.5+Math.random();

	if(numDirection === 1){
		//top
		dY = -20;
		dX =  Math.random()*$(window).width();

	} else if (numDirection === 2){
		//right
		 dX = $(window).width()+20;
		 dY = Math.random()*$(window).height();

	}  else if (numDirection === 3){
		//bottom
		dX = Math.random()*$(window).width();
		dY = $(window).height()+20;

	} else if (numDirection === 4){
		// left
		 dX = -20;
		 dY = Math.random()*$(window).height();
	}

	$dot.transition({x: dX, y: dY, scale: randomScale }, 2500,'easeInSine');

}