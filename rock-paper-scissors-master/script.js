var opponent;
var arr = ['rock', 'scissors', 'paper']
var num1;

function checkResult(player) {
  num1 = Math.floor((Math.random() * arr.length) +  0);
  opponent = arr[num1]
  console.log(`opponent => ${opponent}`, `|| player => ${player}`)
   if(player === 'scissors') {
     if(opponent === 'rock') {
       document.getElementById('result').innerHTML =  'lose';
     } else if(opponent === 'scissors') {
       document.getElementById('result').innerHTML =  'draw';
     } else if(opponent === 'paper') {
       document.getElementById('result').innerHTML =  'win';
     }
   } else if(player === 'rock') {
     if(opponent === 'paper') {
       document.getElementById('result').innerHTML =  'lose';
     } else if(opponent === 'rock') {
       document.getElementById('result').innerHTML =  'draw';
     } else if(opponent === 'scissors') {
       document.getElementById('result').innerHTML =  'win';
     }
   } else if(player === 'paper') {
     if(opponent === 'scissors') {
       document.getElementById('result').innerHTML =  'lose';
     } else if(opponent === 'paper') {
       document.getElementById('result').innerHTML =  'draw';
     } else if(opponent === 'rock') {
       document.getElementById('result').innerHTML = 'win';
     }
   }
  slider(2);
}

function slider(num) {
  if(num === 1) {
    document.querySelector(`.select`).style.left = '0%';
    document.querySelector('.result').style.left = '100%';
  } else {
    document.querySelector(`.select`).style.left = '-100%';
    document.querySelector('.result').style.left = '0%';
  }
}


function rules() {
  var div = document.getElementById('rules');
  if(div.classList.contains('moveRules')) {
    div.classList.remove('moveRules') 
    document.querySelector('main').style.pointerEvents = 'auto'
    document.querySelector('footer').style.pointerEvents = 'auto'
  } else {
    div.classList.add('moveRules')
    document.querySelector('main').style.pointerEvents = 'none'
    document.querySelector('footer').style.pointerEvents = 'none'
  }
}