function getTVOCCondition(tVOC) {
  if (tVOC >= 2000 && tVOC < 2500){
    return "Level-5 Unhealty,Hygienic Rating - Situation not acceptable Recommendation - Use only if unavoidable/Intense ventilation necessary, Exposure Limit - Hours";
  }else if (tVOC <= 2200 && tVOC > 660 ){
    return "Level-4 ,Poor, Hygienic Rating - Major objections, Recommendation - Intensitied ventilation/airing necessary - Seach for sources, Exposure Limit - <1 month";
  }else if (tVOC <= 660 && tVOC > 220){
    return "Level-3, Moderate, Hygienic Rating - Some objections,Recommendation - Intensitied ventilation/airing recommended - Seach for sourcesExposure Limit - <12 month";
  }else if (tVOC <= 220 && tVOC > 65){
    return "Level-2, good, Hygienic Rating - No relevant objections, Recommendation - Ventilation/airing recommended, Exposure Limit - no limit";
  }else if (tVOC <=65){
    return "Level-4", "Excellend, Hygienic Rating - No objections,Recommendation - Target value, Exposure Limit - no limit";
  }
}

function performCalculation(){
  var inputElement= document.getElementById("value");
  var value = parseFloat(inputElement.value);
  var paragraphElement = document.getElementById("result")
  paragraphElement.innerHTML = getTVOCCondition(value);

}
