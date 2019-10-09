const POWER_ARR = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2]
/**
*  The function will get the list of numbers and return
*  the median. Source code taken from:
*  https://stackoverflow.com/a/45309555
*/
function getMedian(values){
 if(values.length ===0) return 0;
 values.sort(function(a,b){
   return a-b;
 });
 var half = Math.floor(values.length / 2);
 if (values.length % 2)
   return values[half];
 return (values[half - 1] + values[half]) / 2.0;
}
var meanElement = document.getElementById("median");
meanElement.innerHTML = getMedian(POWER_ARR);
