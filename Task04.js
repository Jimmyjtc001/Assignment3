const PRESSURE_ARR = [80, 90, 100, 150, 120, 110, 160, 110, 10];
function getMean() {
   var sumNumber = 0
   for (var i = 0; i < PRESSURE_ARR.length; i++) {
       var number = PRESSURE_ARR[i];
       sumNumber += number;
   }
   return sumNumber / PRESSURE_ARR.length;
}
var meanElement = document.getElementById("mean");
meanElement.innerHTML = getMean();
