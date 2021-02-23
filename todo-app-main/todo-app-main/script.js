window.onload = () => {
    var width = window.innerWidth;
    if(width > 600) {
        document.querySelector('.tab-1').classList.add('highlight')
        document.querySelector('.mobile-tab').style.display = 'none'
        document.querySelector('.tabs').style.display = 'flex'
        highlight('tab-1')
    }
    if(width <= 600) {
        document.querySelector('.tabs').style.display = 'none'
        document.querySelector('.mobile-tab').style.display = 'flex'
        document.querySelector('.tab-4').classList.add('highlight')
        highlight('tab-4')
    }
}

window.addEventListener('resize', () => {
    var width = window.innerWidth;
    if(width > 600) {
        document.querySelector('.tab-1').classList.add('highlight')
        document.querySelector('.mobile-tab').style.display = 'none'
        document.querySelector('.tabs').style.display = 'flex'
        highlight('tab-1')
    }
    if(width <= 600) {
        document.querySelector('.tabs').style.display = 'none'
        document.querySelector('.mobile-tab').style.display = 'flex'
        document.querySelector('.tab-4').classList.add('highlight')
        highlight('tab-4')
    }
})

var numArr = []
var counter = 0;

function highlight(num, obj) {
    numArr.push(num);
    counter++;
    var previous = document.querySelectorAll(`.${numArr[counter-2]}`);
    var next = document.querySelectorAll(`.${numArr[counter-1]}`);
    previous.forEach(singlePrevious => {
        if(singlePrevious.classList.contains('highlight')) {
            singlePrevious.classList.remove('highlight')
        }
    })
    next.forEach(singleNext => {
        if(singleNext.classList.contains('highlight')) {
        } else {
            singleNext.classList.add('highlight');
        }
    })
    console.log(numArr, counter, previous, next)
}

var classCounter = 0;
function subClassNum() {
    classCounter--;
} 

function removeItemFromArray(array, item) {
    var index = array.findIndex(() => item);
    var copyArr = [...array]
    return copyArr.splice(index, 1);
}

//App
var app = new function() {
    this.el = document.getElementById('tasks')
    this.tasks = [];
    this.completeTasks =[];
    this.activeTasks = [];
    var length1;
    var tab1 = document.querySelector('.tab-1')
    var tab2 = document.querySelector('.tab-2')
    var tab3 = document.querySelector('.tab-3')
    var tab4 = document.querySelector('.tab-4')
    var tab5 = document.querySelector('.tab-5')
    var tab6 = document.querySelector('.tab-6')
    this.FetchAll = function() {
        var data = '';
        classCounter++;
        length1 = this.tasks.length;
        this.activeTasks = Array.from(document.querySelectorAll('.taskActive'));
        copyArr = [...this.activeTasks]
        for(let i=0; i < copyArr.length; i++) {
            copyArr[i] = copyArr[i].querySelector('.descrip').innerHTML
        }
        this.activeTasks = copyArr;
        console.log(this.tasks, this.completeTasks, this.activeTasks, copyArr)
        if(this.tasks.length > 0) {
            if(document.querySelector('.tab-1').classList.contains('highlight') || document.querySelector('.tab-4').classList.contains('highlight')) {
                for(i=0; i<this.tasks.length;i++) {
                    if(this.completeTasks.length > 0) {
                        for(let j=0; j < this.completeTasks.length; j++) {
                            if(this.tasks[i] !== this.completeTasks[j]) {
                                data += '<div class="task taskActive counter">'
                                data += '<div class="circle" onclick="app.CompleteTheTask(this)">'
                                data += '<img src="images/icon-check.svg" unselectable="on" alt="check" class="check">'
                                data += '</div>'
                                data += '<span class="descrip">' + this.tasks[i] +'</span>'
                                data += '<button onclick="app.Edit('+i+')" class="edit-btn">Edit</button>'
                                data += '<img src="images/icon-cross.svg" alt="cross" unselectable="on" class="cross" onclick="app.Delete('+i+')" onmousedown="subClassNum()">'
                                data += '</div>'
                            } else if(this.tasks[i] === this.completeTasks[j]) {
                                data += '<div class="task taskCompleted counter">'
                                data += '<div class="circle changeCircleBg" onclick="app.CompleteTheTask(this)">'
                                data += '<img src="images/icon-check.svg" unselectable="on" alt="check" class="check">'
                                data += '</div>'
                                data += '<span class="descrip strike">' + this.tasks[i] +'</span>'
                                data += '<button onclick="app.Edit('+i+')" class="edit-btn">Edit</button>'
                                data += '<img src="images/icon-cross.svg" alt="cross" unselectable="on" class="cross" onclick="app.Delete('+i+')" onmousedown="subClassNum()">'
                                data += '</div>'
                            }
                        }
                    }
                    else if(this.tasks.length > 0) {
                        data += '<div class="task taskActive counter">'
                        data += '<div class="circle" onclick="app.CompleteTheTask(this)">'
                        data += '<img src="images/icon-check.svg" unselectable="on" alt="check" class="check">'
                        data += '</div>'
                        data += '<span class="descrip">' + this.tasks[i] +'</span>'
                        data += '<button onclick="app.Edit('+i+')" class="edit-btn">Edit</button>'
                        data += '<img src="images/icon-cross.svg" alt="cross" unselectable="on" class="cross" onclick="app.Delete('+i+')" onmousedown="subClassNum()">'
                        data += '</div>'
                    }  
                }
            }
        }
        return this.el.innerHTML = data;
    };
    
    
    this.Add = function() {
        el = document.getElementById('add-todo');
        var task = el.value;
        if(task) {
            this.tasks.push(task.trim())
            el.value = '';
            this.FetchAll();
        }
        this.FetchAll();
    };

    this.Edit = function(item) {
        el = document.getElementById('edit-todo');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'flex';
        self = this;
        classCounter--;
        document.getElementById('save-edit').onsubmit = function() {
            var task = el.value;
            if(task) {
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };

    this.Delete = function(item) {
        classCounter = classCounter - 1;
        this.tasks.splice(item, 1);
        var text;
        for(let j=0; j < this.completeTasks.length; j++) {
            if(this.completeTasks.length > 0) {
                text = this.completeTasks[j];
                var index = this.completeTasks.findIndex(() => text)
                console.log(this.completeTasks, index, text)
                this.completeTasks.splice(index, 1)
                if(text === this.tasks[item]) {
                    console.log(this.completeTasks, index)
                }
            }
        }
        this.FetchAll();
    };

    
    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = ' items';
        var arr = Array.from(document.querySelectorAll('.taskCompleted'));
        if( length1 - arr.length <= 0) {
            el.innerHTML = 'No todo'
        }
        if(length1 - arr.length === 1) {
            el.innerHTML = '1 todo'
        }
        if(length1 - arr.length > 1) {
            el.innerHTML = length1 - arr.length + ' todos'
        }
    }
    this.Count();

    setInterval(this.Count, 100)
    this.CompleteTheTask = function(obj) {
    var parentElem = obj.parentNode;
    var descrip = parentElem.querySelector('.descrip')
    var circle = parentElem.querySelector('.circle')
    var completeText = descrip.innerHTML;
    var index = this.completeTasks.findIndex(() => completeText)
    descrip.classList.toggle('strike')
    circle.classList.toggle('changeCircleBg')
        if(parentElem.classList.contains('taskActive')) {
            parentElem.classList.remove('taskActive')
            parentElem.classList.add('taskCompleted')
            classCounter--;
            this.completeTasks.push(completeText)
            console.log(this.completeTasks)
            this.FetchAll();
        } else if(parentElem.classList.contains('taskCompleted')) {
            parentElem.classList.add('taskActive')
            parentElem.classList.remove('taskCompleted')
            classCounter++;
            this.completeTasks.splice(index, 1)
            console.log(this.completeTasks)
            this.FetchAll();
        }
    }  
    this.clearComplete = () => {
        var arr = Array.from(document.querySelectorAll('.taskCompleted'));
        var text;
        var index = this.tasks.indexOf(text);
        var completeText;
        for(let j=0; j < this.completeTasks.length; j++) {
            completeText = this.completeTasks[j];
            var completeIndex = this.completeTasks.findIndex(() => completeText)
            this.completeTasks.splice(completeIndex, this.completeTasks.length)
            console.log(this.completeTasks)
        }
        if(arr.length > 0) {
            classCounter--;
                for(let i=0; i < arr.length; i++) {
                text = arr[i].querySelector('.descrip').innerText;
                this.tasks.splice(index, 1)
                var data = '';
            }
            if(this.tasks.length > 0) {
                    for(i=0; i<this.tasks.length;i++) {
                            if(arr.length = 0) {
                                console.log('none')
                            } else {
                                data += '<div class="task taskActive counter"  >'
                                data += '<div class="circle" onclick="app.CompleteTheTask(this)">'
                                data += '<img src="images/icon-check.svg" unselectable="on" alt="check" class="check">'
                                data += '</div>'
                                data += '<span class="descrip">' + this.tasks[i] +'</span>'
                                data += '<button onclick="app.Edit('+i+')" class="edit-btn">Edit</button>'
                                data += '<img src="images/icon-cross.svg" alt="cross" unselectable="on" class="cross" onclick="app.Delete('+i+')" onmousedown="subClassNum()">'
                                data += '</div>'
                            }
                        }
                    }
                        this.Count(this.tasks.length);
                        return this.el.innerHTML = data;
            }
        }
    }
app.FetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

var clearComplete = document.querySelector('.clear-completed')


