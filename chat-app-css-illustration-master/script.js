var responses = [` As I see it, yes.`,
'Ask again later.',
'Better not tell you now.',
'Cannot predict now.',
'Concentrate and ask again.',
'Don’t count on it.',
'It is certain.',
'It is decidedly so.',
'Most likely.',
'My reply is no.',
'My sources say no.',
'Outlook not so good.',
'Outlook good.',
'Reply hazy, try again.',
'Signs point to yes.',
'Very doubtful.',
'Without a doubt.',
'Yes.',
'Yes – definitely.',
'You may rely on it.']

function formsubmit(e) {
    var num = Math.floor(Math.random() * responses.length);
    e.preventDefault();
    var value = e.target.querySelector('input[type="text"]').value;
    var messages = document.querySelector('.messages');
    document.querySelector('.type-message').value = '';
    messages.innerHTML += 
    `<div class="message me">
        ${value}
    </div>`
    setTimeout(() => {
        messages.innerHTML += 
        `<div class="message opponent" style="margin: 0;">
            ${responses[num]}
        </div>`
        document.querySelector('.bottom').click();
    }, 500)
    document.querySelector('.bottom').click();
}


function clickMoney(obj) {
    if(obj.classList.contains('check')) {
        obj.classList.remove('check');
        obj.parentElement.querySelector('.descrip').style.textDecoration = 'none';
        obj.parentElement.querySelector('.descrip').style.opacity = '1';
    } else {
        obj.parentElement.querySelector('.descrip').style.textDecoration = 'line-through';
        obj.parentElement.querySelector('.descrip').style.opacity = '0.7';
        obj.classList.add('check');
    }
}