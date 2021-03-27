var arr = [];
function requestData(destination) {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', apikey: '3e282b994d6d41e98ac60fd0f15e4aa4'},
        body: JSON.stringify({destination})
      };


      fetch('https://api.rebrandly.com/v1/links', options)
        .then(response => response.json())
        .then(data => {
          var url = data.shortUrl;
          var textbox = document.getElementById('textbox');
          var shortenUrl = document.getElementById('shortenLink');
          var links = document.getElementById('links');
          var link = '';
          if(url == undefined) {
            textbox.value = '';
            shortenUrl.classList.add('error');
          } else {
            arr.push([textbox.value, url]);
            if(arr.length > 0 && arr.length < 4) {
              for(let i=0; i < arr.length; i++) {
                link += '<div class="link">'
                link += `<span class="original">${arr[i][0]}</span>`
                link += '<hr class="line">'
                link += '<div class="column">'
                link += `<span>${arr[i][1]}</span>`
                link += '<button onclick="copyLink()">Copy</button>'
                link += '</div>'
                link += '</div>'
              }
              textbox.value = '';
              textbox.focus();
              links.innerHTML = link;
            }
            if(arr.length === 4) {
              arr.shift();
              for(let i=0; i < arr.length; i++) {
                link += '<div class="link">';
                link += `<span class="original">${arr[i][0]}</span>`
                link += '<hr class="line">'
                link += '<div class="column">'
                link += `<span>${arr[i][1]}</span>`
                link += '<button>Copy</button>'
                link += '</div>'
                link += '</div>'
              }
              textbox.value = '';
              textbox.focus();
              links.innerHTML = link;
            }
            if(Array.from(document.querySelectorAll('#links .link .column button')).length > 0) {
              Array.from(document.querySelectorAll('#links .link .column button')).forEach(obj => {
                obj.addEventListener('click', () => {
                  setClipboard(obj.parentElement.querySelector('span').innerText)
                  obj.innerHTML = 'Copied'
                  obj.classList.add('copied');
                  setTimeout(() => {
                    obj.innerHTML = 'Copy';
                    obj.classList.remove('copied');
                  }, 2000)
                })
              })
            }
          }
        })
        .catch(error => console.log(error));
}

document.getElementById('textbox').onfocus = () => {
  var shortenUrl = document.getElementById('shortenLink');
  if(shortenUrl.classList.contains('error')) {
    shortenUrl.classList.remove('error');
  }
}

function setClipboard(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
} 

function shorten() {
  requestData(document.getElementById('textbox').value)
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