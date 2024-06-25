function setup() {
    createCanvas(600, 600);
    backgroud("black"); 
 }

 function draw() {
   stroke("blue");
   fill("red");
        
   if(mouseIsPressed){
     Reflect(mouseX, mouseY, 20, 35);
    }  


 }