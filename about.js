console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted");
}

function handleHover(evt){
	alert("You're amazing!")
}


let form = document.querySelector('#contact');
const image = document.querySelector('img');
image.addEventListener('mouseover', handleHover)
form.addEventListener('submit', handleSubmit);