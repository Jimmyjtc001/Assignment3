function getCO2Condition(cO2) {
  if (cO2 >= 1600 && cO2 < 2100){
    return "Air Quality is BAD, Heavily contaminated indoor air, Ventailation required";
  }else if (cO2 <= 1600 && cO2 > 1100 ){
    return "MEDIOCRE, contamated indoor air, Ventailation recom";
  }else if (cO2 <= 1000 && cO2 > 700){
    return "GOOD";
  }else if (cO2 <=600){
    return "EXCELLENT";
  }
}

function performCalculation(){
  var inputElement= document.getElementById("value");
  var value = parseFloat(inputElement.value);
  var paragraphElement = document.getElementById("result")
  paragraphElement.innerHTML = getCO2Condition(value);

}
