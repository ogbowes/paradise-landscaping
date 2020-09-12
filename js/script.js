let menuButton = document.querySelector('#menu');
let menu = document.querySelector('#links');
menuButton.addEventListener('click', () => {
	menu.classList.toggle('display');
});

let gallery = document.querySelector('.gallery');
let photo = document.querySelectorAll('.gallery-photo');
for (let i = 0; i < photo.length; i++) {
	photo[i].addEventListener('click', (e) => {
		photo[i].classList.toggle('full-screen-photo');
	})
}