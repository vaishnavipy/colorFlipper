
window.onload = function(){ 


  
    let randomcolor;

document.getElementById("btn").onclick = function displayColor(){


    randomcolor = (Math.random()*0xfffff * 1000000).toString(16);
    randomcolor = "#"+randomcolor.slice(0,6);
    
         

    document.getElementById("hex_color").innerHTML = randomcolor;
    document.getElementById("body").style.backgroundColor = randomcolor;

}




};