window.onload = () => {
    let d = new Date()
let days =  35 - d.getDate(); //starting number of days
let hours = 24 - d.getHours() // starting number of 
let minutes = 60 - d.getMinutes(); // starting number of minutes
let seconds = 60 - d.getSeconds(); // starting number of seconds

// converts all to seconds
let totalSeconds =
days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;


// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} else {
    return 0;
}
};

//sets seconds
const setSeconds = (s) => {
    Array.from(document.querySelectorAll("#seconds")).forEach(second => second.textContent = s)
};

//sets minutes
const setMinutes = (m) => {
    Array.from(document.querySelectorAll("#minutes")).forEach(minute => minute.textContent = m)
};

//sets hours
const setHours = (h) => {
    Array.from(document.querySelectorAll("#hours")).forEach(hour => hour.textContent = h)
};

//sets Days
const setDays = (d) => {
    Array.from(document.querySelectorAll("#days")).forEach(day => day.textContent = d)
};

// Update the count down every 1 second
var x = setInterval(() => {
//clears countdown when all seconds are counted
if (totalSeconds <= 0) {
    clearInterval(x);
}
setDays(convert(tempSeconds, 24 * 60 * 60));
setHours(convert(tempSeconds, 60 * 60));
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
totalSeconds--;
tempSeconds = totalSeconds;
}, 1000);
}