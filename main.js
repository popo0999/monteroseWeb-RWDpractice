
window.onscroll = function(){
var t = document.documentElement.scrollTop || document.body.scrollTop;
var hambar = document.getElementsByClassName("hambar");
if (t >= 300) {
hambar.style.color= 'black';
}
else {
hambar.style.color = 'white';
}
} 