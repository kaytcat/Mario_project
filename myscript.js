var findPos = function(findClass, pos) {
  var startElement = $(findClass);
  var startEleft = startElement.position()[pos];
  console.log(startElement.position());
  var startLoc = startEleft;
  return startLoc;
}

var findPostop = function(findClass) {
  var startElement = $(findClass);
  var startEleft = startElement.position().top;
  var startLoctop = startEleft;
  return startLoctop;
}



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
	move1();
	move2();
    $(document).keydown(function(event) {

	        switch(event.which) {
				case 65: case 37: //"A"
					if (findPos(".character", "left") > 0) {
					$('.character').css({left: "-=10px"});
					}
					break;
				case 83: case 40://"S"
					console.log(findPos(".character","top"));
					if (findPos(".character", "top") < 400) {
					$('.character').css({top: "+=10px"});
					}
					break;
				case 87: case 38 ://"W"
					if (findPos(".character", "top") > 410) {
					$('.character').css({top: "-=10px"});
					}
					break;
				case 68: case 39://"D"
					if (findPos(".character", "left") < 980) {
					$('.character').css({left: "+=10px"});
					}
					break;
				case 32: //jump (space)
					$('.character').animate({top: "-=100px"}, 500);
					$('.character').animate({top: "+=100px"}, 500);

				default:
					break;
		}	
	});
});


function setPos(object, side, position) {
	$(object).css({side: position});

}







