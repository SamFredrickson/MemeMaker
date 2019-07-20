
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	const show_custom = document.querySelector("#custom");
	const text_forms = document.querySelector("#text_forms");
	const select_items = document.querySelector("select");
	const switcher = document.querySelector(".switcher_slider");
	const background_slider = document.querySelector("#background");
	const face_slider = document.querySelector("#face");
	const img_background = document.getElementById("background").getElementsByTagName("img");
	const img_face = document.getElementById("face").getElementsByTagName("img");
	const change_all = document.querySelector("#change_all");
	let current_background;
	let current_face;

	function verticalWord(word, selector){

		for (var i = 0; i < word.length; i++) {

		selector.innerHTML += word[i] + "<br>";

		}

	}

	function ShowCustom(){

		if(text_forms.style.display == "none"){

			text_forms.style.display = "block";
			document.querySelector("#canvas").style.marginRight = "2%";
		}
		else {

			text_forms.style.display = "none";	
			document.querySelector("#canvas").style.marginRight = "0%";	
		}

	}
function setSelectColor(){


	for(var i = 0; i < select_items.children.length; i++){

		select_items.children[i].style.background = select_items.children[i].innerText;

	}

}

function ChangeSlider(){

	if(background_slider.style.display == "none"){

		switcher.innerText = "";
		verticalWord("Face", switcher);
		background_slider.style.display = "inline-block";
		face_slider.style.display = "none";

	}else{

		switcher.innerText = "";
		switcher.style.paddingTop = "3%";
		verticalWord("Back", switcher);
		face_slider.style.display = "inline-block";
		background_slider.style.display = "none";
	}

}

function NewBackground(){

	current_background = this.currentSrc;
	let back = new BackgroundWorker(null, this.currentSrc);
	back.ChangeBackground();
	if(current_face != undefined) {

		back.face_src = current_face;
		back.ChangeFace();
	}
}

function NewFace(){

	current_face = this.currentSrc;
	let face = new BackgroundWorker(this.currentSrc, current_background);
	face.ChangeBackground();
	face.ChangeFace();
}

function ChangeAll(){

		if(document.querySelector("#background_link").value.length > 1 && document.querySelector("#face_link").value.length > 1){
		current_face = document.querySelector("#face_link").value;
		current_background = document.querySelector("#background_link").value;
		const range = document.querySelector("#range").value;
		let text = new BackgroundWorker(current_face, current_background);
		text.ChangeBackground();
		text.ChangeFace();
		switch(document.querySelector("select").value){

			case "orange": text.ChangeText(document.querySelector("#text").value, range, "orange"); break;
			case "red": text.ChangeText(document.querySelector("#text").value, range, "red"); break;
			case "white": text.ChangeText(document.querySelector("#text").value, range, "white"); break;
			case "blue": text.ChangeText(document.querySelector("#text").value, range, "blue"); break;
			case "black": text.ChangeText(document.querySelector("#text").value, range, "black"); break;
			case "pink": text.ChangeText(document.querySelector("#text").value, range, "pink"); break;
			default: console.log(document.querySelector("select").value);
			}

		}else{

		const range = document.querySelector("#range").value;
		let text = new BackgroundWorker(current_face, current_background);
		text.ChangeBackground();
		text.ChangeFace();
		switch(document.querySelector("select").value){

			case "orange": text.ChangeText(document.querySelector("#text").value, range, "orange"); break;
			case "red": text.ChangeText(document.querySelector("#text").value, range, "red"); break;
			case "white": text.ChangeText(document.querySelector("#text").value, range, "white"); break;
			case "blue": text.ChangeText(document.querySelector("#text").value, range, "blue"); break;
			case "black": text.ChangeText(document.querySelector("#text").value, range, "black"); break;
			case "pink": text.ChangeText(document.querySelector("#text").value, range, "pink"); break;
			default: console.log(document.querySelector("select").value);
		}

		}

}


function RangeChange(){

		
		if(document.querySelector("#background_link").value.length > 1 && document.querySelector("#face_link").value.length > 1){
		current_face = document.querySelector("#face_link").value;
		current_background = document.querySelector("#background_link").value;
		const range = document.querySelector("#range").value;
		let text = new BackgroundWorker(current_face, current_background);
		text.ChangeBackground();
		text.ChangeFace();
		switch(document.querySelector("select").value){

			case "orange": text.ChangeText(document.querySelector("#text").value, range, "orange"); break;
			case "red": text.ChangeText(document.querySelector("#text").value, range, "red"); break;
			case "white": text.ChangeText(document.querySelector("#text").value, range, "white"); break;
			case "blue": text.ChangeText(document.querySelector("#text").value, range, "blue"); break;
			case "black": text.ChangeText(document.querySelector("#text").value, range, "black"); break;
			case "pink": text.ChangeText(document.querySelector("#text").value, range, "pink"); break;
			default: console.log(document.querySelector("select").value);
			}

		}else{

		const range = document.querySelector("#range").value;
		let text = new BackgroundWorker(current_face, current_background);
		text.ChangeBackground();
		text.ChangeFace();
		switch(document.querySelector("select").value){

			case "orange": text.ChangeText(document.querySelector("#text").value, range, "orange"); break;
			case "red": text.ChangeText(document.querySelector("#text").value, range, "red"); break;
			case "white": text.ChangeText(document.querySelector("#text").value, range, "white"); break;
			case "blue": text.ChangeText(document.querySelector("#text").value, range, "blue"); break;
			case "black": text.ChangeText(document.querySelector("#text").value, range, "black"); break;
			case "pink": text.ChangeText(document.querySelector("#text").value, range, "pink"); break;
			default: console.log(document.querySelector("select").value);
		}

		}
}

verticalWord("Custom", show_custom);
verticalWord("Face", switcher);

setSelectColor();

show_custom.addEventListener("click", ShowCustom);
switcher.addEventListener("click", ChangeSlider);
for(var i = 0; i < img_background.length; i++) img_background[i].addEventListener("click", NewBackground);
for(var i = 0; i < img_face.length; i++) img_face[i].addEventListener("click", NewFace);
change_all.addEventListener("click", ChangeAll);
document.querySelector("#range").addEventListener("change", RangeChange);