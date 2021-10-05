function preload()
{
    img = loadImage('tv.jpeg');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function draw()
{
    image(img, 0,0, 380, 380);

     
    if (status_detection != "")
    {
        for(i = 0; i < objects.length; i++)
        {
        document.getElementById("status").innerHTML = "Status: Objects Detected";
        fill("#FF0000");
        percentage = floor(objects[i].confidence *100);
        text(objects[i].label + " " + percentage + "%", objects[i].x+15 , objects[i].y+15);
        noFill();
        stroke("#FFOOOO");
        rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);
    }
}
}

function backt()
{
    window.location = "home.html";
}

img = "";
status_detection = "";
objects = [];

function modelloaded()
{
    console.log("CocoSsd is loaded!!");
    status_detection = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.log(error);
    }

    console.log(results);
    objects = results;

}