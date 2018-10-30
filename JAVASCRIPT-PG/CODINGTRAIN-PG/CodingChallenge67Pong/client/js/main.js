
let snow = []
let gravity;

let textures = [];
let file;
function preload(){
    file = loadImage('img/f32.png')

}


function setup() { 
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.03)
    for (let x = 0; x < file.width; x+= 32){
        for (let y = 0; y < file.height; y += 32 ){
            let img = file.get(x, y, 32, 32);
            image(img, x, y);
            textures.push(img)
        }

    }

    for(let i = 0; i < 600; i++){
        let x = random(width);
        let y = random(height);
        let design = random(textures);
        snow.push(new Snowflake(x, y, design));
    }


  } 



  
  function draw() { 
    background(0);
    // image(textures, 0, 0)
    for(flake of snow){
        flake.applyForce(gravity)
        flake.update();
        flake.render();
    }
  }