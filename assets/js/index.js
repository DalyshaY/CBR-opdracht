//json array movement variable
var i = 0;
var correctCount = 0;
// generate from json array data with index
function generate(index){
document.getElementById("question").innerHTML = jsonData[index].q ;
document.getElementById("opt1").innerHTML = jsonData[index].opt1 ;
document.getElementById("opt2").innerHTML = jsonData[index].opt2 ;
document.getElementById("opt3").innerHTML = jsonData[index].opt3 ;
}

function checkanswer(){
   if(document.getElementById().checked && jsonData[i].opt1 == jsonData[i].answer){
   correctCount++;
   } 
   if(document.getElementById().checked && jsonData[i].opt2 == jsonData[i].answer){
    correctCount++;
   } 
   if(document.getElementById().checked && jsonData[i].opt3 == jsonData[i].answer){
    correctCount++;
   } 
   // increment i for next question
  i++;
  if(jsonData.length-1 < i){
    document.write("******Your score is: " +correctCount+"******");
  }
  //callback to generate
  generate(i);

   if(document.getElementById().checked && jsonData[i].opt1 != jsonData[i].answer){

   } 
   if(document.getElementById().checked && jsonData[i].opt2 != jsonData[i].answer){

   } 
   if(document.getElementById().checked && jsonData[i].opt3 != jsonData[i].answer){

   } 
}