canvas=createCanvas(500,500)
function preload()
{

}
function setup()
{
    canvas=createCanvas(500,500)
    canvas.position(110,250)
    video=createCapture(VIDEO)
}
function take_snapshot(){
    save('student_name_png');
}
function rectangle()
{
    z=30;
    rect(110, 200, z, 65);
    z=z+10;
}