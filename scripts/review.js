const visitsDisplay=document.querySelector('.timesVisited')

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = `You've sent review number ${numVisits}.`;
} else {
	visitsDisplay.textContent = `This is the first review you've sent!`;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);