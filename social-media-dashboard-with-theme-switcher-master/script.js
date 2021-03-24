function handletheme(obj) {
    if(obj.checked === false) {
        document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        document.querySelector('.mainTitle').style.color = '#fff';
        document.querySelector('.line').style.backgroundColor = '#fff';
        Array.from(document.querySelectorAll('.container')).forEach(container => {
            container.style.backgroundColor = 'hsl(228, 28%, 20%)'
        })
        Array.from(document.querySelectorAll('.container:hover')).forEach(container => {
            container.style.backgroundColor = 'hsl(228, 28%, 20%)'
        })
        Array.from(document.querySelectorAll('.row1 .container .num')).forEach(text => {
            text.style.color = 'hsl(0, 0%, 100%)'
        })
        Array.from(document.querySelectorAll('main .row1 .container .user span')).forEach(text => {
            text.style.color = 'hsl(228, 34%, 66%)'
        })
        Array.from(document.querySelectorAll('main .row1 .container .followers')).forEach(text => {
            text.style.color = 'hsl(228, 34%, 66%)'
        })
        document.querySelector('main .row2').style.color = 'hsl(0, 0%, 100%)';
        Array.from(document.querySelectorAll('main .row3 .container .viewstitle')).forEach(text => {
            text.style.color = 'hsl(228, 34%, 66%)'
        })
        Array.from(document.querySelectorAll('main .row3 .container .views h1')).forEach(text => {
            text.style.color = 'hsl(0, 0%, 100%)'
        })
        document.querySelector(':root').style.setProperty('--boxShadow', '0px 0px 20px 2px rgba(255, 255, 255, 0.8)')
    } else {
        document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
        document.querySelector('.mainTitle').style.color = '#000';
        document.querySelector('.line').style.backgroundColor = '#000';
        Array.from(document.querySelectorAll('.container')).forEach(container => {
            container.style.backgroundColor = 'hsl(227, 47%, 96%)'
        })
        Array.from(document.querySelectorAll('.row1 .container .num')).forEach(text => {
            text.style.color = '#000'
        })
        Array.from(document.querySelectorAll('main .row1 .container .user span')).forEach(text => {
            text.style.color = 'hsl(228, 12%, 44%)'
        })
        Array.from(document.querySelectorAll('main .row1 .container .followers')).forEach(text => {
            text.style.color = 'hsl(228, 12%, 44%)'
        })
        document.querySelector('main .row2').style.color = 'hsl(228, 12%, 44%)';
        Array.from(document.querySelectorAll('main .row3 .container .views h1')).forEach(text => {
            text.style.color = '#000'
        })
        document.querySelector(':root').style.setProperty('--boxShadow', '0px 0px 15px 2px rgba(0, 0, 0, 0.5)')
    }
}