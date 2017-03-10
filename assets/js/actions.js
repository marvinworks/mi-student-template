var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var site = document.getElementById('site');
var imprintLink = document.getElementById('imprintLink');
var footerExit = document.getElementById('footerExit');
var footer = document.getElementById('footer');

if(!isFirefox) {
  site.classList.add('mw-init__site');
}


imprintLink.addEventListener("click", function() {
  site.classList.add('mw-actions__footer--show');
  // disableScroll();
  // enableScrollFooter();
});

footerExit.addEventListener("click", function() {
  site.classList.remove('mw-actions__footer--show');
  window.location.href.substr(0, window.location.href.indexOf('#'));
  // enableScroll();
});



// // left: 37, up: 38, right: 39, down: 40,
// // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};
//
// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//       e.preventDefault();
//   e.returnValue = false;
// }
//
// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }
//
// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }
//
// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }
//
// function enableScrollFooter() {
//     if (footer.removeEventListener)
//         footer.removeEventListener('DOMMouseScroll', preventDefault, false);
//     footer.onmousewheel = footer.onmousewheel = null;
//     footer.onwheel = null;
//     footer.ontouchmove = null;
//     footer.onkeydown = null;
// }
