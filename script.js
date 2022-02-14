const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
 const secondsEl =document.getElementById('seconds');


const newYears ="16 nov 2022";

function countdown(){
	const newYearDate = new Date(newYears);
	const currentDate = new Date();
	
	const totalseconds = (newYearDate - currentDate) / 1000;
	
	const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
	const mins = Math.floor(totalseconds / 60) % 60;
	const seconds = Math.floor(totalseconds) % 60;
	
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minsEl.innerHTML = mins;
	secondsEl.innerHTML = seconds;
	
} 


//initial call

countdown();

setInterval(countdown, 1000);