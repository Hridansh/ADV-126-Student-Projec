song = "";

leftWristX = 0;
leftWristY = 0;

function preload(){
    song = loadSound("Lukas-Gram-7-Years.mp3", "AnneMarie-2002.mp3", "Memories Mp3 By and Maroon 5.mp3", "Imagine+Dragons+Thunder.mp3");
}

song.play();

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function gotPose(results){
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + " Left Wrist Y = " + leftWristY);
    }
}

function modelLoaded(){
    console.log("PoseNet Model is loaded!!!");
}

function draw(){
    image(video, 0, 0, 600, 500);
}