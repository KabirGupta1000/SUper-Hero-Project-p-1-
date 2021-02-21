var Canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_width = 30;
block_height = 30;
player_object = "";
block_img_object = "";
function Player_Update() {
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;
    });
}