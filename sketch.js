const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;
var slingShot;
var polygon;
var score = 0;
var oof = "white";
function preload(){

}
function setup(){
    createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height, width, 20);

    stand1 = new Ground(390, 315, 240, 20)
    stand2 = new Ground(750, 200, 180, 20)

    //bottom
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);
    //level 2
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    //level 3
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    //cap
    block16 = new Block(390, 155, 30, 40);

    //stack but again
    //bottom stack 2
    block17 = new Block(690, 170, 30, 40);
    block18 = new Block(720, 170, 30, 40);
    block19 = new Block(750, 170, 30, 40);
    block20 = new Block(780, 170, 30, 40);
    block21 = new Block(810, 170, 30, 40);
    //level 2 stack 2
    block22 = new Block(720, 130, 30, 40);
    block23 = new Block(750, 130, 30, 40);
    block24 = new Block(780, 130, 30, 40);
    //cap stack 2
    block25 = new Block(750, 90, 30, 40);

    polygon = new Polygon(50, 200, 20);

    slingshot = new SlingShot(polygon.body,{x:140, y:180});

}
function draw(){
    //getTime();
    background("pink");
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
    fill("cyan");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("orange");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("purple");
    block13.display();
    block14.display();
    block15.display();
    fill("green");
    block16.display();

    //stack2
    fill("cyan");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("orange");
    block22.display();
    block23.display();
    block24.display();
    fill("purple");
    block25.display();

    polygon.display();

    slingshot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    


    text("Score : " + score, 100,100);
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/america/new_york")
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour < -06 && hour > -18){
        oof =  0;
    } else {
        oof = 100;
    }

    console.log(hour);
}