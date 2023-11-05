var images = [];
images[0] = "WEB TECHNOLOGIES(20CSO524)-001.png";
images[1] = "WEB TECHNOLOGIES(20CSO524)-002.png";
images[2] = "WEB TECHNOLOGIES(20CSO524)-003.png";
images[3] = "WEB TECHNOLOGIES(20CSO524)-004.png";
images[4] = "WEB TECHNOLOGIES(20CSO524)-005.png";
images[5] = "WEB TECHNOLOGIES(20CSO524)-006.png";
images[6] = "WEB TECHNOLOGIES(20CSO524)-007.png";
images[7] = "WEB TECHNOLOGIES(20CSO524)-008.png";
images[8] = "WEB TECHNOLOGIES(20CSO524)-009.png";
images[9] = "WEB TECHNOLOGIES(20CSO524)-010.png";
images[10] = "WEB TECHNOLOGIES(20CSO524)-011.png";
images[11] = "WEB TECHNOLOGIES(20CSO524)-012.png";
images[12] = "WEB TECHNOLOGIES(20CSO524)-013.png";
images[13] = "WEB TECHNOLOGIES(20CSO524)-014.png";
images[14] = "WEB TECHNOLOGIES(20CSO524)-015.png";
images[15] = "WEB TECHNOLOGIES(20CSO524)-016.png";
images[16] = "WEB TECHNOLOGIES(20CSO524)-017.png";
images[17] = "WEB TECHNOLOGIES(20CSO524)-018.png";
images[18] = "WEB TECHNOLOGIES(20CSO524)-019.png";



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
  window.location.href = "4th-cse-waste-management-quiz.html";
}

window.onload = goPre;
window.onload = goNext;
