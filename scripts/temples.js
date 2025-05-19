const currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;
document.getElementById('lastmodified').textContent = document.lastModified;

const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});