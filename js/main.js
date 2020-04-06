let img;
let bloom, tex;
var container;

var imgWidth = window.innerWidth/100*23;
var imgHeight = (imgWidth/864)*1296;
var imgWidthMedium = window.innerWidth/100*35;
var imgHeightMedium = (imgWidthMedium/864)*1296;
var imgWidthMovil = window.innerWidth/100*55;
var imgHeightMovil = (imgWidthMovil/864)*1296;


function preload() {
		bloom = loadShader("./shaders/base.vert", "./shaders/glitch01.frag");
}

function setup() {

	// ------------ Sketch Media Queries --------------
	if(window.innerWidth >= 1060) {
		var canvas = createCanvas(imgWidth, imgHeight, WEBGL);
		canvas.parent('sketch-holder');
		img = loadImage("./assets/image01.jpg");
		tex = createGraphics(imgWidth, imgHeight, WEBGL);
		tex.noStroke();
	} if(window.innerWidth <= 1060 && window.innerWidth >= 600) {
		var canvas = createCanvas(imgWidthMedium, imgHeightMedium, WEBGL);
		canvas.parent('sketch-holder');
		img = loadImage("./assets/image01.jpg");
		tex = createGraphics(imgWidthMedium, imgHeightMedium, WEBGL);
		tex.noStroke();
	} if(window.innerWidth <= 600){
		var canvas = createCanvas(imgWidthMovil, imgHeightMovil , WEBGL);
		canvas.parent('sketch-holder');
		img = loadImage("./assets/image01.jpg");
		tex = createGraphics(imgWidthMovil, imgHeightMovil , WEBGL);
		tex.noStroke();
	}

	// --------- Sketch Holder Media Queries -----------
	if (window.innerWidth >= 1060) {
		document.getElementById("sketch-holder").style.height = imgHeight+'px';
		document.getElementById("sketch-holder").style.width = imgWidth+'px';
	} if (window.innerWidth <= 1060 && window.innerWidth >= 600){
		document.getElementById("sketch-holder").style.height = imgHeightMedium+'px';
		document.getElementById("sketch-holder").style.width = imgWidthMedium+'px';
 	} if (window.innerWidth <= 600){
		document.getElementById("sketch-holder").style.height = imgHeightMovil+'px';
		document.getElementById("sketch-holder").style.width = imgWidthMovil+'px';
 	}

	// ----------------- Center Content -----------------
	var contentHeight = document.getElementById("cuadroRojo1").offsetHeight;
	var totalHeight = document.documentElement.scrollHeight;
	margin = (totalHeight-(contentHeight/5*6))/2;
	marginMedium = (totalHeight-(contentHeight/5*9))/2;
	marginMovil = (totalHeight-(contentHeight/5*12))/2;

	// --------- Center Content Media Queries -----------
	if (window.innerWidth >= 1060) {
		document.getElementById('center').style.top = margin+'px';
	} if (window.innerWidth <= 1060 && window.innerWidth >= 600){
		document.getElementById('center').style.top = marginMedium+'px';
	} if (window.innerWidth <= 600){
		document.getElementById('center').style.top = 10+'vw';
	}

}

function draw() {
		shader(bloom);
		bloom.setUniform('tex0', img);
		bloom.setUniform('mover', mouseY / height + mouseX / width);
		rect(0, 0, 0, 0);
}

function windowResized() {
	imgWidth = window.innerWidth/100*23;
	imgHeight = (imgWidth/864)*1296;
	imgWidthMedium= window.innerWidth/100*35;
	imgHeightMedium = (imgWidthMedium/864)*1296;
	imgWidthMovil= window.innerWidth/100*55;
	imgHeightMovil = (imgWidthMovil/864)*1296;

	// -----------------Reize Sketch-----------------
	 if (window.innerWidth >= 1060) {
		resizeCanvas(imgWidth, imgHeight);
	 } if (window.innerWidth <= 1060 && window.innerWidth >= 600){
		resizeCanvas(imgWidthMedium, imgHeightMedium);
	} if (window.innerWidth <= 600){
		resizeCanvas(imgWidthMovil, imgHeightMovil);
	}

	if (window.innerWidth >= 1060) {
		document.getElementById("sketch-holder").style.height = imgHeight+'px';
		document.getElementById("sketch-holder").style.width = imgWidth+'px';
	} if (window.innerWidth <= 1060 && window.innerWidth >= 600){
		document.getElementById("sketch-holder").style.height = imgHeightMedium+'px';
	  document.getElementById("sketch-holder").style.width = imgWidthMedium+'px';
 } if (window.innerWidth <= 600){
	  document.getElementById("sketch-holder").style.height = imgHeightMovil+'px';
	  document.getElementById("sketch-holder").style.width = imgWidthMovil+'px';
 }

  // -----------------Center Page Content-----------------
	var contentHeight = document.getElementById("cuadroRojo1").offsetHeight;
	var totalHeight = document.documentElement.scrollHeight;
	margin = (totalHeight-(contentHeight/5*6))/2;
	marginMedium = (totalHeight-(contentHeight/5*9))/2;
	marginMovil = (totalHeight-(contentHeight/5*12))/2;

	if (window.innerWidth >= 1060) {
		document.getElementById('center').style.top = margin+'px';
	} if (window.innerWidth <= 1060 && window.innerWidth >= 600){
		document.getElementById('center').style.top = marginMedium+'px';
 	} if (window.innerWidth <= 600){
		document.getElementById('center').style.top = 10+'vw';
 	}
}


var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?73c27e26f610eb3c9f3feb0c75b03925";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();
