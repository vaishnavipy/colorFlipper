
window.onload = function(){ 


  
   let color_array;let randomcolor;

   
document.getElementById("btn").onclick = function displayColor(){

    
    let random_num = Math.floor(Math.random()*4);

    color_array = ["red","green","#F15025","rgba(133,122,200)"];

    randomcolor= color_array[random_num];
  

    document.getElementById("hex_color").innerHTML = randomcolor;
    document.getElementById("body").style.backgroundColor = randomcolor;

}




};