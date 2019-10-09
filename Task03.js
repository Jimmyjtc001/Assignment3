const TEMPERATURES_ARR = [21, 23, 26, 22, 25, 20, 19, 23];
function getMinimum() {
   return Math.min(...TEMPERATURES_ARR);
}
function getMaximum() {
   return Math.max(...TEMPERATURES_ARR);
}
var minElement = document.getElementById("min");
minElement.innerHTML = getMinimum();
var maxElement = document.getElementById("max");
maxElement.innerHTML = getMaximum();
