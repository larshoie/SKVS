// $('img').each(function(){
// 		$(this).removeAttr('width')
// 		$(this).removeAttr('height');
// 	});
//
// $("iframe[src^='https://www.youtube.com']").each(function(){
// 		$(this).removeAttr('width');
// 		$(this).removeAttr('height');
//     $(this).height('200vh');
// });


// Find all YouTube videos
// var $allVideos = $("iframe[src^='https://www.youtube.com']"),
//
//     // The element that is fluid width
//     $fluidEl = $(".topp-bilde");
//
// // Figure out and save aspect ratio for each video
// $allVideos.each(function() {
//
//   $(this)
//     .data('aspectRatio', this.height / this.width)
//
//     // and remove the hard coded width/height
//     .removeAttr('height')
//     .removeAttr('width');
//
// });
//
// // When the window is resized
// $(window).resize(function() {
//
//   var newWidth = $fluidEl.width();
//
//   // Resize all videos according to their own aspect ratio
//   $allVideos.each(function() {
//
//     var $el = $(this);
//     $el
//     .width(newWidth)
//     .height(newWidth * $el.data('aspectRatio'));
//
//     console.log('width:' + newWidth);
//     console.log('width:' + newWidth * $el.data('aspectRatio'));
//   });
//
//
//
//
// // Kick off one resize to fix all videos on page load
// }).resize();
