var generateBtn = document.getElementById('generate') 
var deg = '90deg';
var color1Text = document.getElementById('color1');
var color2Text = document.getElementById('color2');
var saveBtn = document.getElementById('save');
var saveSlots = document.getElementById('save-slots');
var colors = [];

function generateColor() {
    const letter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let random1 = Math.floor(Math.random() * letter.length);
    let random2 = Math.floor(Math.random() * letter.length);
    let random3 = Math.floor(Math.random() * letter.length);
    let random4 = Math.floor(Math.random() * letter.length);
    let random5 = Math.floor(Math.random() * letter.length);
    let random6 = Math.floor(Math.random() * letter.length);
    let random7 = Math.floor(Math.random() * letter.length);
    let random8 = Math.floor(Math.random() * letter.length);
    let random9 = Math.floor(Math.random() * letter.length);
    let random10 = Math.floor(Math.random() * letter.length);
    let random11 = Math.floor(Math.random() * letter.length);
    let random12 = Math.floor(Math.random() * letter.length);
    var color1 = `#${letter[random1]}${letter[random2]}${letter[random3]}${letter[random4]}${letter[random5]}${letter[random6]}`
    color1Text.innerHTML =  color1;
    var color2 = `#${letter[random7]}${letter[random8]}${letter[random9]}${letter[random10]}${letter[random11]}${letter[random12]}`
    color2Text.innerHTML = color2;
    return `${color1}, ${color2}`
}

function changeColor() {
    document.body.style.background = `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${generateColor()})`;
}

function myFunction() {
    var copyText1 = document.getElementById("color1");
    var copyText2 = document.getElementById('color2')
    var textArea1 = document.createElement("textarea");
    textArea1.value = copyText1.textContent + ', ' + copyText2.textContent;
    document.body.appendChild(textArea1);
    textArea1.select();
    document.execCommand("Copy");
    textArea1.remove();

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText1.innerHTML + ', ' + copyText2.innerText;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

var innerhtml = '';
var counter = 0;
function save() {
  var data = [];
  var innerhtml2 = '';
  data.push(`${document.getElementById('full-color').innerHTML}`)
  for(let i=0; i<data.length; i++) {
    localStorage.setItem(`color${i}`, data[i]);
    console.log(localStorage)
  }

  for(let j=0; j < data.length; j++){
    counter++;
    var el = document.createElement( 'html' );
    el.innerHTML = data[j];
    var color1 = el.querySelector('#color1').innerText;
    var color2 = el.querySelector('#color2').innerText;
    innerhtml2 += `<div class="save-slot" style="background: linear-gradient(45deg, ${color1}, ${color2});">`
    innerhtml2 += '<span class="num">'+counter+'</span>'
    innerhtml2 += '<h2>'
    innerhtml2 += data[j];
    innerhtml2 += '</h2>'
    innerhtml2 += '<div class="tooltip">'
    innerhtml2 += '<button onclick="copy(this)" onmouseout="outCopy(this)">'
    innerhtml2 += '  <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>'
    innerhtml2 += '  Copy Color'
    innerhtml2 += '</button>'
    innerhtml2 += '</div>'
    innerhtml2 += '</div>'
  }
  innerhtml += innerhtml2;
  document.getElementById('save-slots').innerHTML = innerhtml;
}

function copy(obj) {
  var parentElem = obj.parentElement.parentElement;
  var copyText1 = parentElem.querySelector("#color1");
  var copyText2 = parentElem.querySelector("#color2");
  var textArea1 = document.createElement("textarea");
  textArea1.value = copyText1.textContent + ', ' + copyText2.textContent;
  document.body.appendChild(textArea1);
  textArea1.select();
  document.execCommand("Copy");
  textArea1.remove();

  var tooltip = parentElem.querySelector("#myTooltip");
  tooltip.innerHTML = "Copied: " + copyText1.innerHTML + ', ' + copyText2.innerText;
}

function outCopy(obj) {
  var parentElem = obj.parentElement.parentElement;
  var tooltip = parentElem.querySelector("#myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}