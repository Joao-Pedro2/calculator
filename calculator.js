function insert(num){

  var number = document.getElementById('view').innerHTML;
  document.getElementById('view').innerHTML = number + num;

};
function clean(){

  document.getElementById('view').innerHTML= "";
}
function back(){

  var sub= document.getElementById('view').innerHTML;

  document.getElementById('view').innerHTML= sub.substring(0,sub. length -1);
}
function calculate(){

  var result= document.getElementById('view').innerHTML;
  if(result){
    document.getElementById('view').innerHTML = eval(result)
  }
  else {
    document.getElementById('view').innerHTML = "Nada para calcular"
  }
};