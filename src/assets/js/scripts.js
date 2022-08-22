/* Using to disable on hover selector on touch devices */
var isTouch = 'ontouchstart' in window;
document.documentElement.className += isTouch ? ' touch ' : ' no-touch ';