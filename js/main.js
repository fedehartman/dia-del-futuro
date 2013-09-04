/*--| HIDE ADDRESS BAR (solo para ver en la web) (en la app final no va)
---------------------------------------------------------------------------------------------- |--*/

/*
* Normalized hide address bar for iOS & Android
* (c) Scott Jehl, scottjehl.com
* MIT License
*/
(function( win ){
var doc = win.document;

// If there's a hash, or addEventListener is undefined, stop here
if( !location.hash && win.addEventListener ){

//scroll to 1
window.scrollTo( 0, 1 );
var scrollTop = 1,
getScrollTop = function(){
return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
},

//reset to 0 on bodyready, if needed
bodycheck = setInterval(function(){
if( doc.body ){
clearInterval( bodycheck );
scrollTop = getScrollTop();
win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
}
}, 15 );

win.addEventListener( "load", function(){
setTimeout(function(){
//at load, if user hasn't scrolled more than 20 or so...
if( getScrollTop() < 20 ){
//reset to hide addr bar at onload
win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
}
}, 0);
} );
}
})( this );




$(document).ready(function () {

$(".main-header nav").click(function(e) {
  e.preventDefault();
  $('.main-nav').toggleClass('main-nav-desplegado');
  $('.main-nav ul li.lesmots').toggleClass('none');
  return false;
  });

$(".actividades .tabs ul li").click(function(e) {
  e.preventDefault();
  $(".actividades .tabs ul li").removeClass('active');
  $(this).addClass('active');
  $(".actividades .tabs-content article").addClass('none');
  return false;
  });

$(".actividades .tabs ul li:nth-child(1)").click(function(e) {
  e.preventDefault();
  $(".actividades .tabs-content article:nth-child(1)").removeClass('none');
  return false;
  });

$(".actividades .tabs ul li:nth-child(2)").click(function(e) {
  e.preventDefault();
  $(".actividades .tabs-content article:nth-child(2)").removeClass('none');
  return false;
  });

$(".actividades .tabs ul li:nth-child(3)").click(function(e) {
  e.preventDefault();
  $(".actividades .tabs-content article:nth-child(3)").removeClass('none');
  return false;
  });

$(".actividades .tabs ul li:nth-child(4)").click(function(e) {
  e.preventDefault();
  $(".actividades .tabs-content article:nth-child(4)").removeClass('none');
  return false;
  });

$(".actividades .tabs ul li:nth-child(5)").click(function(e) {
  e.preventDefault();
  $(".actividades .tabs-content article:nth-child(5)").removeClass('none');
  return false;
  });

$(".actividades .tabs ul li:nth-child(6)").click(function(e) {
  e.preventDefault();
  $(".actividades .tabs-content article:nth-child(6)").removeClass('none');
  return false;
  });

});

