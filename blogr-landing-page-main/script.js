
function navbarCollapse(obj) {
    if(obj.classList.contains('open')) {
        obj.classList.add('close');
        obj.classList.remove('open');
        obj.src = 'images/icon-close.svg';
        document.getElementById('home').style.setProperty('--navLinksHeight', '150px');
        document.getElementById('home').style.setProperty('--buttonsHeight', '120px');
        document.getElementById('home').style.setProperty('--navLinksPadding', '10px');
        document.getElementById('home').style.setProperty('--buttonsPadding', '20px');
        document.getElementById('home').style.setProperty('--navLinksBorder', '2px');
    } else {
        obj.classList.remove('close');
        obj.classList.add('open');
        obj.src = 'images/icon-hamburger.svg';
        document.getElementById('home').style.setProperty('--navLinksHeight', '0px');
        document.getElementById('home').style.setProperty('--buttonsHeight', '0px');
        document.getElementById('home').style.setProperty('--navLinksPadding', '0px');
        document.getElementById('home').style.setProperty('--buttonsPadding', '0px');
        document.getElementById('home').style.setProperty('--navLinksBorder', '0px');
    }
}

function expandNavList() {
    if(window.width < 836 || screen.width < 836) {
        if(document.getElementById('home').style.getPropertyValue('--navLinksHeight') == '0px') {
                document.getElementById('home').style.setProperty('--navLinksHeight', '150px');
        } else {
            document.getElementById('home').style.setProperty('--navLinksHeight', '340px');
        }
        console.log(document.getElementById('home').style.getPropertyValue('--navLinksHeight'))
    }
}