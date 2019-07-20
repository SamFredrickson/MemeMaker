"use strict";

var image = new Image();
var face = new Image();

const face_src = "https://www.stickpng.com/assets/images/5a50f8da6e23dd9ffe00cd41.png";
const image_src = "http://www.sclance.com/backgrounds/background-meme/background-meme_215594.png";


class BackgroundWorker {

	constructor(face_src, background_src){

		this.face_src = face_src;
		this.background_src = background_src;

	}

	set Face(newSrc_face){

		this.face_src = newSrc_face;
		
	}

	set Background(newSrc_Background){

		this.background_src = newSrc_background;
	}

	ChangeBackground(){

		image.onload = function(){

			ctx.drawImage(image, 0, 0, 400, 500);

		}

		image.src = this.background_src;
	}

	ChangeFace(){

		face.onload = function(){

			ctx.drawImage(face, 100, 150, 200, 200);
		}

		face.src = this.face_src;
	}

	ChangeText(text, fontsize, color){

		image.onload = function(){

		//ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, 0, 0, 400, 500);
		ctx.fillStyle = color;
    	ctx.font = `Bold ${fontsize}pt Times New Roman`;
    	ctx.textAlign = "center";
    	ctx.fillText(text.toUpperCase(), canvas.width / 2, 450);

		}

	}

}


