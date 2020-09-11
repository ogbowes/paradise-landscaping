let menuButton = document.querySelector('#menu');
let links = document.querySelector('#links');
menuButton.addEventListener('click', () => {
	links.classList.toggle('display');
});