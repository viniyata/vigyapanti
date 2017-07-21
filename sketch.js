var isSample = 0;
var isSample1 = 0;
var isSample2 = 0;

function setup() {
  createCanvas(1500, 800);
background(0);
}

function draw() {
  if (key == "d") {
      if (isSample == 0) {
        sample.toMaster().start();
        isSample = 1;
      } else {
        sample.stop();
        isSample = 0;
  }
} else if (key == "f") {
    if (isSample1 == 0) {
      sample1.toMaster().start();
      isSample1 = 1;
    } else {
      sample1.stop();
      isSample1 = 0;
    }
  } else if (key == "g") {
    if (isSample2 == 0) {
      sample2.toMaster().start();
      isSample2 = 1;
    } else {
      sample2.stop();
      isSample2 = 0;
    }
  }
}
