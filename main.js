$(function() {
  $('.draggable').draggable()
})

		function randomFromTo(from, to){
			return Math.floor(Math.random() * (to - from + 1) + from);
		}
  
		function moveRandom(e) {
      
			/* get container position and size
			 * -- access method : cPos.top and cPos.left */
			var cPos = $('.container').offset();
			var cHeight = $('.container').height();
			var cWidth = $('.container').width();
			
			// get box padding (assume all padding have same value)
			var pad = parseInt($('.container').css('padding-top').replace('px', ''));
			
			// get movable box size
			var bHeight = e.height();
			var bWidth = e.width();
			
			// set maximum position
			maxY = cPos.top + cHeight - bHeight - pad;
			maxX = cPos.left + cWidth - bWidth - pad;
			
			// set minimum position
			minY = cPos.top + pad;
			minX = cPos.left + pad;
			
			// set new position			
			newY = randomFromTo(minY, maxY);
			newX = randomFromTo(minX, maxX);
			e.animate({
				top: newY,
				left: newX
				}, 0);
		}

$('.draggable').each(function(){
   moveRandom($(this));
});

// // randomize position on load

// function randomFromTo(from, to) {
//   return Math.floor(Math.random() * (to - from + 1) + from)
// }

// function moveRandom(id) {
//   /* get container position and size
// 			 * -- access method : cPos.top and cPos.left */
//   var cPos = $('.container').offset()
//   var cHeight = $('.container').height()
//   var cWidth = $('.container').width()

//   // get box padding (assume all padding have same value)
//   var pad = parseInt(
//     $('.container')
//       .css('padding-top')
//       .replace('px', '')
//   )

//   // get movable box size
//   var bHeight = $(id).height()
//   var bWidth = $(id).width()

//   // set maximum position
//   maxY = cPos.top + cHeight - bHeight - pad
//   maxX = cPos.left + cWidth - bWidth - pad

//   // set minimum position
//   minY = cPos.top + pad
//   minX = cPos.left + pad

//   // set new position
//   newY = randomFromTo(minY, maxY)
//   newX = randomFromTo(minX, maxX)

//   $(id).animate(
//     {
//       top: newY,
//       left: newX
//     },
//     0,
//     function() {}
//   )
// }

// moveRandom('#latestblock1')
// moveRandom('#latestblock2')
// moveRandom('#latestblock3')
