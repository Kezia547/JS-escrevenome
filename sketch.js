function setup() {
    createCanvas(500, 500);
    background("black");
  }
  
  function draw() {
      stroke("black")
      fill( "rgb(250,0,158)");
    
      // console.log(mouseIsPressed)
      if(mouseIsPressed){
         rect(mouseX, mouseY, 10, 30)
    }
  
  }
  