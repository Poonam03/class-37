//var ball,postion;
var database; 
var form, player, game,playerCount;
var gameState=0;
var allPlayers;
var distance=0;

var car1,car2,car3,car4

var cars;

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);
    database=firebase.database();
    console.log(database);
    game=new Game();
    game.getState();
    game.start();
   /* ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=database.ref('ball/positions');
    ballPosition.on("value",readPosition, showError);*/ 


    


}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }

    
    /*if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();*/
}

/*function writePosition(x,y){
    database.ref('ball/positions').set({
        x : position.x + x,
        y : position.y + y
    });
   
}

function readPosition(data){
    position=data.val();
    console.log(position);
    ball.x=position.x;
    ball.y=position.y;
    
}

function showError(){
    console.log('error');
}*/