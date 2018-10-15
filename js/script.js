$(document).ready(function () {
	let hiel = $('#hiTag').css('fontFamily','Tahoma');
	hiel.click(function () {
			hiel.append(' да-да.');
			//hiel.css('fontSize','30pt');
			hiel.css('fontSize','+=5pt');
	})
	hiel.dblclick(function () {
		hiel.append("АТЫНЕВЕРИЛ, ДА?")
	}) 
	hiel.contextmenu(function () {
		//hiel.css('background','#212121').css('color','#eee');
		hiel.html('<i class="fas fa-award"></i>');
	})
	hiel.change(function () {
		let c = 0;
		console.log('changes',c++);
	}) 
})