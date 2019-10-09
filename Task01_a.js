function cToF(c) {
  var f = (c * 9/5) + 32;
  return f
}

function cToK(c) {
  var  k = (c + 273.15)
    return k
}

function fToC(f) {
  var c = (f-32)*5/9;
  return c
}

function fToK(f){
  var k = (f-32)*5/9+273.15;
  return k
}
function kToC(k){
var  c = k-273.15;
  return c
}
function kToF(k){
var   f = (k-273.15)*9/5+32;
  return f
}


function performCalculation1(){
  var inputElement= document.getElementById("celiusValue1");
  var value = parseFloat(inputElement.value);
  var paragraphElement = document.getElementById("result1")
  paragraphElement.innerHTML = cToF(value);
}


function performCalculation2(){
  var inputElement= document.getElementById("celiusValue2");
  var value = parseFloat(inputElement.value);
  var paragraphElement = document.getElementById("result2")
  paragraphElement.innerHTML = cToK(value);
}

function performCalculation3(){
  var inputElement= document.getElementById("fahrenheitValue1");
  var value = parseFloat(inputElement.value);
  var paragraphElement = document.getElementById("result3")
  paragraphElement.innerHTML = fToC(value);
}
function performCalculation4(){
  var inputElement= document.getElementById("fahrenheitValue2");
  var value = parseFloat(inputElement.value);
  var paragraphElement = document.getElementById("result4")
  paragraphElement.innerHTML = fToK(value);
}

function performCalculation5(){
  var inputElement= document.getElementById("KelvinValue1");
  var value = parseFloat(inputElement.value);
  var paragraphElement = document.getElementById("result5")
  paragraphElement.innerHTML = kToC(value);
}

function performCalculation6(){
  var inputElement= document.getElementById("KelvinValue2");
  var value = parseFloat(inputElement.value);
  var paragraphElement = document.getElementById("result6")
  paragraphElement.innerHTML = kToF(value);
}
