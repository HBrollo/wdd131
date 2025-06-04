const currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;
document.getElementById('lastmodified').textContent = document.lastModified;

//Hamburguer Button
const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//Generate initial temple list
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "São Paulo",
    location: "São Paulo, Brazil",
    dedicated: "1976, March, 20",
    area: 59246,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/640%2C/0/default"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 29",
    area: 53997,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340.jpg"
  },
  {
    templeName: "Buenos Aires Argentina Temple",
    location:"Buenos Aires, Argentina",
    dedicated: "1986, January, 19",
    area: 30659,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
    templeName: "London England Temple",
    location:"London, England",
    dedicated: "1958, September, 9",
    area: 42652,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996, May, 27",
    area: 51921,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
  }
  
];
CreateTempleCards(temples);

//Home button
const homeLink = document.querySelector('#home');

homeLink.addEventListener("click", () =>{
	CreateTempleCards(temples);
	})

//Old button
const oldLink = document.querySelector('#old');

oldLink.addEventListener("click", () =>{
	const filteredTemples = temples.filter(temple => {
    	const year = parseInt(temple.dedicated.split(",")[0]); // Get the first part and convert to integer
    	return year < 1900; // Check if the year is less than 1900
  	});
	CreateTempleCards(filteredTemples);
	})

//new button
const newLink = document.querySelector('#new');

newLink.addEventListener("click", () =>{
	const filteredTemples = temples.filter(temple => {
    	const year = parseInt(temple.dedicated.split(",")[0]); // Get the first part and convert to integer
    	return year < 2000; // Check if the year is greater than 2000
  	});
	CreateTempleCards(filteredTemples);
	})

//Large button
const largeLink = document.querySelector('#large');

largeLink.addEventListener("click", () =>{
	const filteredTemples = temples.filter(temple => {
    	const area = temple.area; // Get the first part and convert to integer
    	return area > 90000; // Check if the area is greater than 90k
  	});
	CreateTempleCards(filteredTemples);
	})

//small button
const smallLink = document.querySelector('#small');

smallLink.addEventListener("click", () =>{
	const filteredTemples = temples.filter(temple => {
    	const area = temple.area; // Get the first part and convert to integer
    	return area < 10000; // Check if the area is less than 10k
  	});
	CreateTempleCards(filteredTemples);
	})

function CreateTempleCards (templeArray)
{
	document.querySelector(".temple-cards").innerHTML = "";
	templeArray.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft.`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy")

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".temple-cards").appendChild(card)
	});
}
