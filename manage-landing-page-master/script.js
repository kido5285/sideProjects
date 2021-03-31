document.querySelector('.hamburger').addEventListener('click', () => {
    var hamburger = document.querySelector('.hamburger');
    if(hamburger.classList.contains('clicked')) {
        hamburger.classList.remove('clicked')
        hamburger.src = 'images/icon-hamburger.svg';
        document.getElementById('nav').style.height = '100px';
        document.querySelector('nav .row2').style.opacity = '0';
        document.querySelector('nav .row2').style.top = '-100%';
    } else {
        hamburger.classList.add('clicked')
        hamburger.src = 'images/icon-close.svg';
        document.getElementById('nav').style.height = '380px';
        document.querySelector('nav .row2').style.opacity = '1';
        document.querySelector('nav .row2').style.top = '100px';
    }
})

var circle1 = document.querySelector('.circle1');
var circle2 = document.querySelector('.circle2');

function circleAnim() {
    if(circle1.classList.contains('anim1')) {
        circle1.classList.remove('anim1')
    } else {
        circle1.classList.add('anim1')
    }
    if(circle2.classList.contains('anim2')) {
        circle2.classList.remove('anim2')
    } else {
        circle2.classList.add('anim2')
    }
}

setInterval(circleAnim, 2500)