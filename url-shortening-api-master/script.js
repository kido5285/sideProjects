
function requestData(destination) {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', apikey: '3e282b994d6d41e98ac60fd0f15e4aa4'},
        body: JSON.stringify({destination})
      };
      
      fetch('https://api.rebrandly.com/v1/links', options)
        .then(response => response.json())
        .then(data => console.log(data.shortUrl))
        .catch(err => console.error(err));
}

function handleMenu() {
  var hamburger = document.querySelector('.hamburger');
  var bar1 = document.querySelector('.bar1');
  var bar2 = document.querySelector('.bar2');
  var bar3 = document.querySelector('.bar3');
  var nav = document.getElementById('nav');
  var main = document.querySelector('main');
  if(hamburger.classList.contains('rotate')) {
    hamburger.classList.remove('rotate');
    bar1.style.transform = 'rotate(0deg)';
    bar1.style.translateX = '0px';
    bar1.style.width = '30px';
    bar2.style.opacity = '1';
    bar3.style.transform = 'rotate(0deg)';
    bar3.style.translateX = '0px';
    bar3.style.width = '30px';
    nav.style.height = '70px';
  } else {
    hamburger.classList.add('rotate');
    bar1.style.transform = 'rotate(45deg)';
    bar1.style.width = '32.5px';
    bar1.style.transformOrigin = '20%'
    bar2.style.opacity = '0';
    bar3.style.transform = 'rotate(-45deg)';
    bar3.style.width = '33.5px';
    bar3.style.transformOrigin = '0%'
    nav.style.height = '355px';
  }
}