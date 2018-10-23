// $(document).ready(function () {
// 	let hiel = $('#hiTag').css('fontFamily','Tahoma');
// 	hiel.click(function () {
// 			hiel.append(' да-да.');
// 			//hiel.css('fontSize','30pt');
// 			hiel.css('fontSize','+=5pt');
// 	})
// 	hiel.dblclick(function () {
// 		hiel.append("АТЫНЕВЕРИЛ, ДА?")
// 	}) 
// 	hiel.contextmenu(function () {
// 		//hiel.css('background','#212121').css('color','#eee');
// 		hiel.html('<i class="fas fa-award"></i>');
// 	})
// 	hiel.change(function () {
// 		let c = 0;
// 		console.log('changes',c++);
// 	}) 
// })

// let Pad = {};

// Pad.name = "wacom";
// Pad.model = "CTL-471";
// Pad.DPI = 4096;
// Pad.draw = function () {
// 	console.log('drawing...');
// }

// for( attr in Pad) {
// 	console.log(Pad[attr]);
// }
// console.log('------------------------')

// let PadF = function (name,model) {
// 	this.name = name;
// 	this.model = model;
// 	this.draw = function () {
// 		console.log('drawing...');
// 	}
// }


// let wac = new PadF('wacom','CTL-471');
// console.log(wac.name,wac.model);
// wac.draw();
// console.log('--------------');

// let el = document.getElementById('nav-ul');
// console.log(el);
// console.log('--------------');
// let els = document.getElementsByTagName('li');
// console.log(els);
// console.log('--------------');

// for ( let el in els) {
// 	console.log(els[el])
// }

//console.log(document.forms);


let btn = document.getElementById('btn');
let inp = document.getElementById('inp');


btn.onclick = function(event) {
	event.preventDefault();
	console.log('click');
	// console.log(document.forms.test_form.test.value);
	// console.log('------------------------------------');
	// console.log(document.forms['test_form']['test'].value);
	// console.log('------------------------------------');
	// let data = new FormData(document.forms.test_form);
	// console.log(data);
	// console.log(data.get("test"));
	// console.log('------------------------------------');
}

btn.oncontextmenu = function() {
	console.log('contextMenu');
}

btn.onmousedown = function() {
	console.log('мышка нажата');
}
btn.onmouseup = function() {
	console.log('мышка опущена');
}

btn.onmouseleave = function() {
	console.log('мышка уведена');
}

btn.onmouseenter = function() {
	console.log('мышка Наведена');
}

inp.onkeydown = function() {
	console.log('click');
}

inp.onfocus = function() {
	console.log('focus');
}

inp.onblur = function() {
	console.log('blur');
}

window.onload = function() {
	console.log('window load');
}