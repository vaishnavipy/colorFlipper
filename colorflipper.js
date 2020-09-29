
window.onload = function(){ 


  
    var simple=false; var color_array;var randomcolor;

    document.getElementById("simple").onclick = function simpleDisplay(){
        console.log("simple clicked")
        simple = true;
       
      
        
        }
       





document.getElementById("btn").onclick = function displayColor(){

    console.log("entered")
    
   if( document.getElementById("simple").clicked === true){
    console.log("is true")
    let random_num = Math.floor(Math.random()*4);

    color_array = ["red","green","#F15025","rgba(133,122,200)"];

    randomcolor= color_array[random_num];

    }else{

    randomcolor = (Math.random()*0xfffff * 1000000).toString(16);
    randomcolor = "#"+randomcolor.slice(0,6);
    }
         

    document.getElementById("hex_color").innerHTML = randomcolor;
    document.getElementById("body").style.backgroundColor = randomcolor;

}




};