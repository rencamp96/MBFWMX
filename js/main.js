let img;
let bloom, tex;
var container;

// var imgHeight = window.innerWidth/3;
// var imgWidth = (imgHeight/1296)*864;

var imgWidth = window.innerWidth/4*1;
var imgHeight = (imgWidth/864)*1296;

function preload() {
		bloom = loadShader("./shaders/base.vert", "./shaders/glitch01.frag");
}

function setup() {
		var canvas = createCanvas(imgWidth, imgHeight, WEBGL);
		canvas.parent('sketch-holder');
		img = loadImage("./img/image01.jpg");
		tex = createGraphics(imgWidth, imgHeight, WEBGL);
		tex.noStroke();
}

function draw() {
		shader(bloom);
		bloom.setUniform('tex0', img);
		bloom.setUniform('mover', mouseY / height);
		rect(0, 0, 0, 0);
}

function windowResized() {
	 imgWidth = window.innerWidth/4*1;
	 imgHeight = (imgWidth/864)*1296;
	 resizeCanvas(imgWidth, imgHeight);
}


var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?73c27e26f610eb3c9f3feb0c75b03925";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();
