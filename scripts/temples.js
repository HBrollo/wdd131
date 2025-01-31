const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
const lastModified = document.lastModified;
document.getElementById('last-modified-date').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('active');
	hamButton.classList.toggle('open');
});