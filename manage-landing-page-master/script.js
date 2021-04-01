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

setInterval(circleAnim, 3700)
window.onload = () => {
    document.getElementById("btn1").click();
}

var numArr = []
var counter = 0;

function highlight(num, obj) {
    numArr.push(num);
    counter++;
    var previous = document.querySelectorAll(`#${numArr[counter-2]}`);
    var next = document.querySelectorAll(`#${numArr[counter-1]}`);
    previous.forEach(singlePrevious => {
        if(singlePrevious.classList.contains('visit')) {
            singlePrevious.classList.remove('visit')
        }
    })
    next.forEach(singleNext => {
        if(singleNext.classList.contains('visit')) {
        } else {
            singleNext.classList.add('visit');
        }
    })
}

let handleOnChange = ( email , e) => {
    e.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(email) ) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ggrass1585@gmail.com",
            Password : "1DC377B00FA2188055242378E531F6DFBE38",
            To : 'awyongtuck138@gmail.com',
            From : "ggrass1585@gmail.com",
            Subject : "Subscription",
            Body : "this is a cool website"
        }).then(
          message => console.log(message)
        );
        document.querySelector('footer .column3 form input[type="text"]').value = "Thank you for suscribing and remember to check your spam mail"
    }
    else {
        document.querySelector('footer .column3 form').classList.add('focus');
        document.querySelector('footer .column3 form input[type="text"]').value = 'Please Enter Valid Email'
    }
}

function focusText() {
    var parentEl = document.querySelector('footer .column3 form');
    if(parentEl.classList.contains('focus')) {
        parentEl.classList.remove('focus')
        if(parentEl.querySelector('input[type="text"]').value === "Please Enter Valid Email") {
            parentEl.querySelector('input[type="text"]').value = '';
        }
    } else {
        return;
    }
}

