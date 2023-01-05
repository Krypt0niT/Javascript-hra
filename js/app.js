window.onload = function start() {
    board = document.getElementById("canvas");
    board.width = 800;
    board.height = 800;
    context = board.getContext("2d");
    update();
    setInterval(update, 20);
    document.addEventListener("keydown", Move);
    document.addEventListener("keyup", Stop);

};
let moving = "";
function update() {
    draw(100 ,100,50,50,"red")
    console.log(moving);
}


function draw(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}
function Move(e) {
    
    if (e.code == "KeyA" || e.code == "ArrowLeft"){
        moving = "left";
    } 
     
    else if (e.code == "KeyD" || e.code == "ArrowRight"){
        moving = "right";
    }
    
}
function Stop(e) {
    moving = "";
}