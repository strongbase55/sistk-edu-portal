var images = [];
images[0] = "WEB TECHNOLOGIES(20CSO524)-020.png";
images[1] = "WEB TECHNOLOGIES(20CSO524)-021.png";
images[2] = "WEB TECHNOLOGIES(20CSO524)-022.png";
images[3] = "WEB TECHNOLOGIES(20CSO524)-023.png";
images[4] = "WEB TECHNOLOGIES(20CSO524)-024.png";
images[5] = "WEB TECHNOLOGIES(20CSO524)-025.png";
images[6] = "WEB TECHNOLOGIES(20CSO524)-026.png";
images[7] = "WEB TECHNOLOGIES(20CSO524)-027.png";
images[8] = "WEB TECHNOLOGIES(20CSO524)-028.png";
images[9] = "WEB TECHNOLOGIES(20CSO524)-029.png";
images[10] = "WEB TECHNOLOGIES(20CSO524)-030.png";
images[11] = "WEB TECHNOLOGIES(20CSO524)-031.png";
images[12] = "WEB TECHNOLOGIES(20CSO524)-032.png";
images[13] = "WEB TECHNOLOGIES(20CSO524)-033.png";
images[14] = "WEB TECHNOLOGIES(20CSO524)-034.png";
images[15] = "WEB TECHNOLOGIES(20CSO524)-035.png";
images[16] = "WEB TECHNOLOGIES(20CSO524)-036.png";
images[17] = "WEB TECHNOLOGIES(20CSO524)-037.png";
images[18] = "WEB TECHNOLOGIES(20CSO524)-039.png";
images[19] = "WEB TECHNOLOGIES(20CSO524)-040.png";
images[20] = "WEB TECHNOLOGIES(20CSO524)-041.png";
images[21] = "WEB TECHNOLOGIES(20CSO524)-042.png";

var i = 0;
var len = images.length - 1;
const go = (document.getElementById("pre").disabled = true);
const go1 = document.getElementById("next");
const go2 = (document.getElementById("quiz").disabled = true);

function goNext() {
  document.slider.src = images[i];
  if (i == len) {
    go1.disabled = true;
    document.getElementById("quiz").disabled = false;
  } else if (i > 0) {
    document.getElementById("pre").disabled = false;
    i++;
  } else {
    i++;
  }
}

function goPre() {
  document.slider.src = images[i];
  if (i <= 0) {
    go.disabled = true;
    go1.disabled = false;
  } else if (i == 0) {
    document.getElementById("pre").disabled = false;
  } else {
    i = i - 1;
  }
}

function goQuiz() {
  window.location.href = "4th-cse-waste-management-quiz-2.html";
}

window.onload = goPre;
window.onload = goNext;
