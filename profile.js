const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

function handleColor(evt){
	evt.preventDefault();
	
	alert("blue");
}
function handlePlace(evt){
	evt.preventDefault();
	
	alert("going to the beach");
}
function handleRitual(evt){
	evt.preventDefault();
	
	alert("praying");
}

colorBtn.addEventListener('click', handleColor);
placeBtn.addEventListener('click', handlePlace);
ritualBtn.addEventListener('click', handleRitual);