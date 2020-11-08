const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;


 var boxWidth ;
 var boxHeight ;

 
var boxes = [];
var gSlider;
 
 
function setup() {
   var canvas =  createCanvas(400, 400);


    engine = Engine.create();
    world = engine.world;
    
    

    gSlider = createSlider(0,100,50);
    gSlider.position(5, 380);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
   ground = new Ground(200,390,400,20);
    
    
}
 

function mousePressed(){ 
    var myx= random(10,60); 
    var myy= random(40,100); 
    if(mouseY<370) boxes.push(new Box(mouseX,mouseY,myx,myy));
 }

 
function draw() {
    // Draw all the elements including the slider that 

    background(10);
    Engine.update(engine);

        ground.display();
       
   
    for(var i = 0;i<boxes.length;i++){
        boxes[i].display();
    }
   

}
 


