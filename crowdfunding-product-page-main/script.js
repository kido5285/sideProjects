window.onload = () => {
  document.getElementById('selection').style.display = 'none';
}

function toggleBookmark() {
  var btn = document.querySelector('.bookmark-btn')
  var text = document.querySelector('.bookmark-text')
  if(btn.classList.contains('bookmarked')) {
    btn.classList.remove('bookmarked')
    text.innerHTML = 'bookmark'
  } else {
    btn.classList.add('bookmarked')
    text.innerHTML = 'bookmarked'
  }
}
let indexArr = [];

function clickBtn(index) {
  var parentElem = Array.from(this.document.querySelectorAll('.modal-container'));
  if(indexArr.length === 0) {
    indexArr.push(index);
    if(parentElem[indexArr[0]].classList.contains('modal-container-selected')) {
      console.log('class')
    } else {
      parentElem[indexArr[0]].classList.add('modal-container-selected');
      parentElem[indexArr[0]].querySelector('input[type="text"]').focus();
    }
  } else {
    indexArr.push(index);
    if(parentElem[indexArr[indexArr.length - 1]].classList.contains('modal-container-selected')) {
      console.log('class')
    } else {
      parentElem[indexArr[indexArr.length - 1]].classList.add('modal-container-selected');
      parentElem[indexArr[indexArr.length - 2]].classList.remove('modal-container-selected');
      parentElem[indexArr[indexArr.length - 1]].querySelector('input[type="text"]').focus();
    }
  }
}

function clickContinue(index) {
  var parentElem = Array.from(this.document.querySelectorAll('.modal-container'));
  var value = parentElem[index].querySelector('input[type="text"]').value;
  var successModal = document.getElementById('success');
  switch (index) {
    case 0:
      if(parseInt(value) >= 1) {
        successModal.style.display = 'flex';
        document.querySelector('.display').style.pointerEvents = 'none';
        document.getElementById('selection').style.display = 'none'
      } else {
        alert('minumum deposit 1$')
      }
      break;
    case 1:
      if(parseInt(value) >= 25) {
        successModal.style.display = 'flex';
        document.querySelector('.display').style.pointerEvents = 'none';
        document.getElementById('selection').style.display = 'none';
      } else {
        alert('minumum deposit 25$')
      }
      break;
    case 2:
      if(parseInt(value) >= 75) {
        successModal.style.display = 'flex';
        document.querySelector('.display').style.pointerEvents = 'none';
        document.getElementById('selection').style.display = 'none';
      } else {
        alert('minumum deposit 75$')
      }
      break;
  }
}

function gotIt() {
  var successModal = document.getElementById('success');
  successModal.style.display = 'none';
  document.querySelector('.display').style.pointerEvents = 'auto'
}

function showSelection(tab) {
  var selectionTab = document.querySelector('.selection-modal-container');
  selectionTab.style.display = 'block';
  document.querySelector('.scroll').click();
  document.querySelector('.display').style.pointerEvents = 'none'
}

function closeSelection() {
  document.querySelector('.selection-modal-container').style.display = 'none'
  document.querySelector('.display').style.pointerEvents = 'auto'
}

//preventing textbox typing numbers
function setInputFilter(textbox, inputFilter) {
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
    });
  });
}

setInputFilter(document.querySelector(".text1"), function(value) {
  return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});
setInputFilter(document.querySelector(".text"), function(value) {
  return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});
setInputFilter(document.querySelector(".text3"), function(value) {
  return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});

function navbarClick(){
  if(document.querySelector('.navbar').classList.contains('clickNavbar')) {
    document.querySelector('.navbar').classList.remove('clickNavbar')
  } else {
    document.querySelector('.navbar').classList.add('clickNavbar')
  }
}