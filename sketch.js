function setup() {
    createCanvas(400, 400);
    background("rgb(255,251,251)");
  }
  
  function draw() {
    
     stroke("rgb(33,33,36)"); 
    fill("pink");
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
      
    }
  }
    