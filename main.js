song = "";
song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";
leftx=0;
lefty=0;
rightx=0;
righty=0;
scoreLeftWrist=0;
scoreRightWrist=0;


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    canvas.position(340, 250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scorerightWrist = " + scoreRightWrist +"scoreLeftWrist = " + scoreLeftWrist);

        leftx=results[0].pose.leftWrist.x;
        lefty=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftx + "LeftWristY = " + lefty);

        rightx=results[0].pose.rightWrist.x;
        righty=results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightx + "RightWristY = " + righty);
}}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function draw() {
    image(video, 0, 0, 600, 500);

fill("#FF0000");
stroke("#FF0000");
if(scoreRightWrist>0.2){
circle(rightx,righty,20); 
if(righty>0 && righty<=100){
document.getElementById("speed").innerHTML="speed = 0.5x";
song.rate(0.5);
song1.rate(0.5);
song2.rate(0.5);
song3.rate(0.5);
song4.rate(0.5);
song5.rate(0.5);
}
else if(righty>100 && righty<=200){
    document.getElementById("speed").innerHTML="speed = 1x";
    song.rate(1);
    song1.rate(1);
    song2.rate(1);
    song3.rate(1);
    song4.rate(1);
    song5.rate(1);
}
else if(righty>200 && righty<=300){
    document.getElementById("speed").innerHTML="speed = 1.5x";
    song.rate(1.5);
    song1.rate(1.5);
    song2.rate(1.5);
    song3.rate(1.5);
    song4.rate(1.5);
    song5.rate(1.5);
}
else if(righty>300 && righty<=400){
    document.getElementById("speed").innerHTML="speed = 2x";
    song.rate(2);
    song1.rate(2);
    song2.rate(2);
    song3.rate(2);
    song4.rate(2);
    song5.rate(2);
}
else if(righty>400 && righty<=500){
    document.getElementById("speed").innerHTML="speed = 2.5x";
    song.rate(2.5);
    song1.rate(2.5);
    song2.rate(2.5);
    song3.rate(2.5);
    song4.rate(2.5);
    song5.rate(2.5);
}
}
if(scoreLeftWrist>0.2){
circle(leftx,lefty,20);
InNumberlefty=Number(lefty);
remove_decimals=floor(InNumberlefty);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="Volume = "+volume;
song.setVolume(volume);
song1.setVolume(volume);
song2.setVolume(volume);
song3.setVolume(volume);
song4.setVolume(volume);
song5.setVolume(volume);
}}
function preload() {
    song = loadSound("Ed Sheeran - Perfect (Official Music Video).mp3");
    song1 = loadSound("Halsey - Castle.mp3");
    song2 = loadSound("music.mp3");
    song3 = loadSound("P!nk - Just Like Fire (Official Instrumental).mp3");
    song4 = loadSound("Shawn Mendes - Dream (Lyric Video).mp3");
    song5 = loadSound("ZOMBIES 2 - Cast - Call to the Wild (From ZOMBIES 2).mp3");
}

function play() {
    option = document.getElementById("options").value;
    if (option == "1") {
        song.play();
    }
    else if (option == "2") {
        song1.play()
    }
    else if (option == "3") {
        song2.play()
    }
    else if (option == "4") {
        song3.play()
    }
    else if (option == "5") {
        song4.play()
    }
    else if (option == "6") {
        song5.play()
    }

    song.setVolume(1);
    song1.setVolume(1);
    song2.setVolume(1);
    song3.setVolume(1);
    song4.setVolume(1);
    song5.setVolume(1);
song.rate(1);
song1.rate(1);
song2.rate(1);
song3.rate(1);
song4.rate(1);
song5.rate(1);
}

function stop() {
    song.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
}