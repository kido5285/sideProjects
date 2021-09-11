const bgImg = document.querySelector('.top-bg img');
let gmode = 'light';
class todo{
    constructor(){
        this.active = [];
        this.finished = [];
        this.all = [];
    }
    
    addItem(item){
        let index = this.all.indexOf(item);
        if(index === -1){
            this.active.push(item);
            this.all.push(item);
        }
    }
    
    finishTask(item){
        let index = this.active.indexOf(item);
        if(index !== -1){
            this.active.splice(index, 1);
            this.finished.push(item);
        }
    }
    
    unfinishTask(item){
        let index = this.finished.indexOf(item);
        if(index !== -1){
            this.finished.splice(index, 1);
            this.active.push(item);
        }
    }

    resetFinished() {
        this.all.forEach(item => {
            if(this.all.includes(item)){
                index = this.all.indexOf(item);
                this.all.splice(index, 1);
            }
        })
        this.finished = [];
    }
    
    get retFinishTask(){
        return this.finished;
    }
    
    get retActiveTask(){
        return this.active;
    }
    
    get allTask(){
        return this.all;
    }
    
    retItemStatus(item){
        if(this.active.includes(item)){
            return {item, status: 'active'};
        }
        if(this.finished.includes(item)){
            return {item, status: 'completed'};
        }
        return {item, status:'Does not exist'};
    }
    
    removeTask(item){
        let itemstatus = this.retItemStatus(item);
        if(itemstatus.status === 'active'){
            let allIn = this.all.indexOf(item);
            let activeIn = this.active.indexOf(item);
            this.all.splice(allIn, 1);
            this.active.splice(activeIn, 1);
        }
        if(itemstatus.status === 'completed'){
            let allIn = this.all.indexOf(item);
            let finishIn = this.finished.indexOf(item);
            this.all.splice(allIn, 1);
            this.finished.splice(finishIn, 1);
        }
    }
}
window.addEventListener('load', () => {
    if(window.innerWidth <= 550){
        bgImg.src = `images/bg-mobile-${gmode}.jpg`;
    } else {
        bgImg.src = `images/bg-desktop-${gmode}.jpg`;
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth <= 550){
        bgImg.src = `images/bg-mobile-${gmode}.jpg`;
    } else {
        bgImg.src = `images/bg-desktop-${gmode}.jpg`;
    }
})

let modeIcon = document.querySelector('.row1 .modeIcon');
function switchMode(mode){
    gmode = mode === 'light' ? 'dark' : 'light';
    if(gmode === 'light'){
        modeIcon.src = 'images/icon-moon.svg';
        if(window.innerWidth <= 550){
            bgImg.src = `images/bg-mobile-${gmode}.jpg`;
        } else {
            bgImg.src = `images/bg-desktop-${gmode}.jpg`;
        }
        document.documentElement.style.setProperty('--bodyBg', '#fff');
        document.documentElement.style.setProperty('--mode', 'none');
        document.documentElement.style.setProperty('--lastRowColor', 'hsl(235, 19%, 35%)');
        document.documentElement.style.setProperty('--inputColor', ' hsl(235, 19%, 35%)');
        document.documentElement.style.setProperty('--bg', '#fff');
        document.documentElement.style.setProperty('--color', 'hsla(235, 19%, 35%, 1)');
        document.documentElement.style.setProperty('--radioOutline', 'hsl(233, 11%, 84%)');
        document.documentElement.style.setProperty('--taskBorder', 'hsl(233, 11%, 84%)');
        document.documentElement.style.setProperty('--radioBlock', 'none');
    } else {
        modeIcon.src = 'images/icon-sun.svg';
        if(window.innerWidth <= 550){
            bgImg.src = `images/bg-mobile-${gmode}.jpg`;
        } else {
            bgImg.src = `images/bg-desktop-${gmode}.jpg`;
        }
        document.documentElement.style.setProperty('--bodyBg', '#000');
        document.documentElement.style.setProperty('--mode', 'none');
        document.documentElement.style.setProperty('--lastRowColor', 'hsl(235, 19%, 35%)');
        document.documentElement.style.setProperty('--inputColor', '#fff');
        document.documentElement.style.setProperty('--bg', 'hsl(235, 24%, 19%)');
        document.documentElement.style.setProperty('--color', '#fff');
        document.documentElement.style.setProperty('--taskBorder','hsl(235, 19%, 35%)');
        document.documentElement.style.setProperty('--radioBlock', 'block');
        document.documentElement.style.setProperty('--radioOutline','hsl(235, 24%, 19%)');
    }
}
modeIcon.addEventListener('click', () => switchMode(gmode));

let radioBlock = document.querySelector('.row2 .radio .block');
let radio = document.querySelector('.row2 .radio');
let all = document.querySelector('.lastRow .column2 .btn1');
let tasks = document.querySelector('.tasks');
let selected = '';
document.querySelectorAll('.selected').forEach(item => selected = item.innerHTML.toLowerCase().trim());
let todoList = new todo();
let num = 0;
let itemsNum = document.querySelector('.itemsNum');
let clearComplete = document.querySelector('.clearFinish');
function appendTodo(description, type = 'nothing'){
    let divTask = document.createElement('DIV');
    divTask.classList.add('task', type);
    let col1 = document.createElement('DIV');
    col1.classList.add('column1');
    let col2 =  document.createElement('DIV');
    col2.classList.add('cloumn2');
    let radiobtn = document.createElement('DIV');
    radiobtn.classList.add('radio');
    radiobtn.onclick = (i) => finishTask(i);
    let checkicon = document.createElement('IMG');
    checkicon.src = 'images/icon-check.svg';
    checkicon.classList.add('check');
    let radioblock = document.createElement('DIV');
    radioblock.classList.add('block');
    let des = document.createElement('SPAN');
    des.classList.add('descrip');
    let text = document.createTextNode(description);//des
    let closeicon = document.createElement('IMG');
    closeicon.classList.add('closeIcon');
    closeicon.src = 'images/icon-cross.svg';
    closeicon.onclick = (i) => deleteTask(i.target);
    des.appendChild(text);
    radiobtn.appendChild(radioblock);
    radiobtn.appendChild(checkicon);
    col1.appendChild(radiobtn);
    col1.appendChild(des);
    col2.appendChild(closeicon);
    divTask.appendChild(col1);
    divTask.appendChild(col2);
    tasks.appendChild(divTask);
}

function inputType(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        document.querySelector('.row2 .radio').click();
    }
}

document.querySelector('.row2 .radio').onclick = () => {
    let inputValue = document.querySelector('.input').value.trim();
    if(!inputValue) return;
    if(todoList.retItemStatus(inputValue).status === 'Does not exist'){
        let mode = '';
        document.querySelectorAll('.selected').forEach(item => mode = item.innerHTML.trim().toLowerCase());
        todoList.addItem(inputValue);
        if(mode !== 'completed') {
            appendTodo(inputValue);
        }
        document.querySelector('.input').value = ''
    } else {
        document.querySelector('.input').value = 'It already In the list';
    }
    itemsNum.innerHTML = todoList.retActiveTask.length;
}

function finishTask(i){
    let parent = i.target;
    if(parent.classList[0] == 'check' || parent.classList[0] == 'block'){
        parent = i.target.parentElement.parentElement;
    } else {
        parent = i.target.parentElement;
    }
    let txt = parent.querySelector('.descrip').innerHTML;
    let mode = '';
    document.querySelectorAll('.selected').forEach(item => mode = item.innerHTML.trim().toLowerCase());
    if(todoList.retItemStatus(txt).status === 'active' && mode !== 'completed') {
        todoList.finishTask(txt);
        parent.classList.toggle('finished');
    } else if(todoList.retItemStatus(txt).status === 'completed' && mode !== 'completed'){ 
        todoList.unfinishTask(txt);
        parent.classList.toggle('finished');
    } else if(mode === 'completed' || mode === 'active'){
        document.querySelector('.selected').click();
    }
    itemsNum.innerHTML = todoList.retActiveTask.length;
}

function deleteTask(i){
    let parent = i.parentElement.parentElement;
    let txt = parent.querySelector('.descrip').innerHTML;
    todoList.removeTask(txt);
    parent.classList.add('remove');
    parent.addEventListener('animationend', () => {
        parent.remove();
    })
    itemsNum.innerHTML = todoList.retActiveTask.length;
}

clearComplete.addEventListener('click', () => {
    todoList.resetFinished();
    document.querySelector('.tasks').innerHTML = '';
    if(selected !== 'completed'){
        todoList.retActiveTask.forEach(des => appendTodo(des));
    }
})

function switchTask(select){
    document.querySelector('.tasks').innerHTML = '';
    if(select === 'all'){
        document.querySelectorAll(`.${selected}`).forEach(item => item.classList.remove('selected'))
        selected = select;
        document.querySelectorAll(`.${select}`).forEach(item => item.classList.add('selected'))
        todoList.allTask.forEach(item => {
            let stat = todoList.retItemStatus(item).status;
            if(stat === 'completed'){
                appendTodo(item, 'finished');
            } else if(stat === 'active'){
                appendTodo(item);
            }
        })
    }
    if(select === 'active'){
        document.querySelectorAll(`.${selected}`).forEach(item => item.classList.remove('selected'))
        selected = select;
        document.querySelectorAll(`.${select}`).forEach(item => item.classList.add('selected'))
        todoList.retActiveTask.forEach(item => appendTodo(item))
    }
    if(select === 'completed'){
        document.querySelectorAll(`.${selected}`).forEach(item => item.classList.remove('selected'))
        selected = select;
        document.querySelectorAll(`.${select}`).forEach(item => item.classList.add('selected'))
        todoList.retFinishTask.forEach(item => appendTodo(item, 'finished'))
    }
}