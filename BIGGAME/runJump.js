var canvas;
var ctx; 
var x = 500; 
var y = 250; 
var mx = .5; 
var my = .5; 
var screenWidth = 700;
var screenHeight = 350;
var characterHeigth = 50; 
var characterWidth = 50;
var charPosX = 70;
var charPosY = 250;
var jumpLimit = 20;
var charSpeed = 20;
var jump_y  = charPosY;
var goingDown = false;
var jumping;
var character1 = new Image(); 
character1.src = "images/koalagood.png"; 
function drawBorder() {
    ctx.rect(0, 0, screenWidth, screenHeight); 
    ctx.stroke(); 
}
function character(x, y) {
    ctx.drawImage(character1, x, y); 
}
 function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 3);
}
function clear() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
}
//hello
function draw() {
    clear(); 
    drawBorder();
    character(charPosX, charPosY);
    if (x + mx > screenWidth - characterWidth || x + mx < 0)
                mx = -mx;
    if (y + my > screenHeight - characterHeigth || y + my < 0)
                my = -my;
}

var jump = function(){
    if(charPosY > jumpLimit && !goingDown){
        charPosY -= 5;
    }else{
        goingDown = true;
        charPosY += 5;
        if(charPosY > jump_y){
            clearInterval(jumping);
            goingDown = false;
        }
    }
}

 function doKeyDown(event)
            {
            switch (event.keyCode) 
                {
                case 38:  /* Up arrow was pressed */
                    jumping = setInterval(jump, 20)
                    if (charPosY < 0)
                        {
                            charPosY = 0;
                        }
                    break;
                case 40:  /* Down arrow was pressed */
                    charPosY += charSpeed;
                    if (charPosY > 250 )
                        {
                            charPosY = 250;
                        }
                    break;
                case 37:  /* Left arrow was pressed */
                    charPosX -= charSpeed;
                    if (charPosX < 0     )
                        {
                            charPosX = 0;
                        }
                    break;
                case 39:  /* Right arrow was pressed */
                    charPosX += charSpeed;
                    if (charPosX > 600     )
                        {
                            charPosX = 600;
                        }
                    break;
                }
            }
init();
window.addEventListener("keydown", doKeyDown, true);