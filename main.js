x = 30;
y = 300;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  video.position(150, 240);

  canvas = createCanvas(550, 550);
  canvas.position(500, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + " noseY = " + noseY);

    leftWrist = results[0].pose.leftWrist.X;
    rightWrist = results[0].pose.rightWrist.X;
    difference = floor(leftWrist - rightWrist);

    console.log(
      "leftWristX  = " +
        leftWristX +
        " rightWristX = " +
        rightWristX +
        " difference = " +
        difference
    );
  }
}

function draw() {
  background("#969A97");

  document.getElementById("square_side").innerHTML =
    "Size of font will be = " + difference + "px";
  fill("#F90093");
  stroke("#F90093");
  text(noseX, noseY, difference);
  text("Sheethal", 40, 200);
}
