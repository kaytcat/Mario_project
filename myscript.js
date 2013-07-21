var findPos = function(findClass) {
  var startElement = $(findClass);
  var startEleft = startElement.position().left;
  var startLoc = startEleft  + "px";
  return startLoc;
}

$(document).ready(function() {
	move1();
	move2();
});

function move1() {
		$('.clouds div:first-child').animate(
		{left: '+=100px'}, 5000); 
		$('.clouds div:first-child').animate(
		{left: '-=100px'}, 5000); 
		window.setTimeout(function() {move1()}, 500);
};

function move2() {
		$('.clouds div:nth-child(2)').animate(
		{left: '-=80px'}, 5000); 
		$('.clouds div:nth-child(2)').animate(
		{left: '+=80px'}, 5000); 
		window.setTimeout(function() {move2()}, 500);
};

		
$(document).ready(function() {
    $(document).keydown(function(event) {
        switch(event.which) {
			case 65: case 37: //"A"
				$('.character').animate({right: "+=10px"}, .01);
				break;
			case 83: case 40://"S"
				$('.character').animate({bottom: "-=10px"}, .01);
				break;
			case 87: case 38 ://"W"
				$('.character').animate({bottom: "+=10px"}, .01);
				break;
			case 68: case 39://"D"
				$('.character').animate({right: "-=10px"}, .01);
				break;
			default:
				break;
		}
	});
});


		