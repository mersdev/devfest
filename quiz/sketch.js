// The video
let video;
// For displaying the label
let label = "Processing the data...";
// The classifier
let classifier;
let modelURL = "https://teachablemachine.withgoogle.com/models/QDcMNsnKu/";
let index = 1;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + "model.json");
}

function setup() {
  let width = 0;
  if (window.innerWidth > 540) {
    width = 600;
  } else {
    width = window.innerWidth - 20;
  }
  let canvas = createCanvas(width, 520);
  canvas.parent("content");
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  let answer = document.getElementsByClassName("answer")[0].innerHTML;
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  console.log(results);
  if (results[0].confidence > 0.98) {
    label = results[0].label;
    if (label == answer) {
      getQuestion((index += 1));
    }
  } else {
    label = "Waiting...";
  }

  classifyVideo();
}
