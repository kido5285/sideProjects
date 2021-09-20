let billtxtBox = document.querySelector('.billInput .input');
let bill = 0.00;
let tipPer = 1;
let tipPercent = 0.01;
let prevBtn = document.querySelector('.first');
billtxtBox.addEventListener('focus', () => {
    if(!document.querySelector('.bill').classList.contains('err')){
        document.querySelector('.bill').classList.add('selected');
    }
})
let val = '';
let newIn = '';

function setBillInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
        val = parseFloat(this.value);
        if(!val || val == 0){
            document.querySelector('.bill').classList.add('err');
            bill = 0.00;
        } else {
            document.querySelector('.bill').classList.remove('err');
            bill = parseFloat(Number(parseFloat(val)).toFixed(2));
        }
        displayResult();
      });
    });
}

setBillInputFilter(billtxtBox, (value) => /^\d*\.?\d*$/.test(value));

billtxtBox.addEventListener('focusout', () => {
    if(!document.querySelector('.bill').classList.contains('err')){
        document.querySelector('.bill').classList.remove('selected');
        billtxtBox.value = Number(val).toFixed(2);
        bill = parseFloat(Number(val).toFixed(2));
    }
})

function setPerInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
      tipPercent = parseFloat(Number(parseFloat(this.value)/100).toFixed(2));
      prevBtn.classList.remove('btnSelected');
      displayResult();
    });
  });
}

let amBtns = [...document.querySelectorAll('.amBtn')];
let custom = document.querySelector('.custom');
amBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tipPercent = parseFloat(parseFloat(btn.innerHTML)/100);
    prevBtn.classList.remove('btnSelected');
    btn.classList.add('btnSelected');
    prevBtn = btn;
    custom.value = '';
    displayResult();
  })
})

setPerInputFilter(custom, (value) => /^\d*\.?\d*%?$/.test(value));
custom.addEventListener('focusout', () => {
  if(custom.value === '' || parseFloat(custom.value) === 0){
    custom.value = '0.01%';
    tipPercent = 0.01;
  }
  if(custom.value.charAt(custom.value.length-1) !== '%'){
    custom.value += '%';
  }
  tipPercent = parseFloat(Number(parseFloat(this.value)/100).toFixed(2));
})

let perIn = document.querySelector('.num .input');
let parent = document.querySelector('.num');

function setPersonInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
      let val = this.value;
      if(!val || val == 0){
        document.querySelector('.num').classList.add('err');
        tipPer = 1;
      } else {
          parent.classList.remove('err');
          tipPer = parseInt(Number(val));
      }
      displayResult();
    });
  });
}

perIn.addEventListener('focus', () => {
  if(!parent.classList.contains('err')){
    parent.classList.add('selected');
  }
})

setPersonInputFilter(perIn, (value) => /^\d*$/.test(value))

perIn.addEventListener('focusout', () => {
  if(!parent.classList.contains('err')){
      parent.classList.remove('selected');
      tipPer = parseInt(Number(perIn.value));
  }
})

let tipAm = document.querySelector('.tipAm .amount .num');
let total = document.querySelector('.total .amount .num');
let cut;
let tip;
let tot;
function displayResult(){
  if(isNaN(tipPercent)){
    tipPercent = 0.01;
  }
  cut = Number(bill * tipPercent).toFixed(2)
  tip = parseFloat(Number(cut / tipPer).toFixed(2));
  tot = parseFloat(Number(cut * tipPer).toFixed(2));
  tipAm.innerHTML = tip;
  total.innerHTML = ((bill+parseFloat(Number(bill*tipPercent).toFixed(2)))/tipPer).toFixed(2);
}

document.querySelector('.reset').addEventListener('click', () => {
  tipAm.innerHTML = '0.00';
  total.innerHTML = '0.00';
  cut = 0;
  tip = 0;
  tot = 0;
  tipPer = 1;
  bill = 0.00;
  tipPercent = 0.01;  
  [...document.querySelectorAll('.amBtn')].forEach(btn => btn.classList.remove('btnSelected'))
  document.querySelector('.custom').value = '';
  document.querySelector('.num .input').value = '';
  document.querySelector('.billInput .input').value = '';
})