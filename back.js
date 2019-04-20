// number
var a = 5;
var b = 5.5;

var res = a+b;

// string
var name = "Vasya";

// undefined
var c;

// null
var n = document.getElementById('ddddd');

// boolean
var bl = 4>8;

// object
var names = ['Vasya', 'Pit', 'Ann', 'Fred', 'Alex', 'Julia'];

var user = {name:'Pit',age:25};
console.log(user);

var a = '25';
var b =20;

var res = a - b;

console.log(res);

//if-else

var results = 2;
var results2 = 5;

if (results >= 4 && results2 <= 10) {
    alert('Hi')
}
else if(results === 3) {
    alert('Hi else')
}
else if {
    alert('hi all!')
}

//switch
var result = 5;

switch(result) {
    case 2 : alert('hi 2');
    break;
    case 5 : alert('hi 5');
    break;
    default: alert('hi default');
    break;
}

//prompt
var res = prompt('Do you study JavaScript? yes/no');

if (res === 'yes') {
    alert('Well Done')
}
else if (res === 'no') {
    alert('You suck')
}
else {
    alert('Whaaaaaaaaatttt?')
}

console.log(res)

//calculator
var num1 = +prompt('enter num1');
var num2 = +prompt('enter num2');
console.log(typeof num1)

var result = num1 + num2;

alert('sum = ' + result);

//cycle
var names = ['Dnepr', 'Lviv', 'Odessa'];


for(var i = 0; i < names.length; i++) {
    alert(names[i]);
}

for(var i in names) {
    alert(names[i]);
}

var names = [];

var city1 = prompt('enter city 1');
var city2 = prompt('enter city 2');
var city3 = prompt('enter city 3');

names.push(city1, city2, city3);

console.log(names);

for(var i in names) {
    console.log(names[i]);
}

var names = ['Dnipro', 'Odessa', 'Kyiv'];

for (var name of names) {
    console.log(name);
}


//function

var names = [
    'pit',
    'vasa',
    'nick',
    'pasha',
    'masha',
    'andi',
]


var orders = [
    'order1',
    'order2',
    'order3',
    'order4',
    'order5',
    'order6',
    'order7',
    'order8',
]

function renderList(data, nameId) {
    var html = '';

    for (var name of data) {
        html += '<li>' + name + '</li>';
    }

    var listNames = document.getElementById(nameId);

    listNames.innerHTML = html
}

renderList(names, 'list');
renderList(orders, 'orders');

console.dir(listNames);

// sum & function
var dataString = prompt("entered string numbers ','");

function sum(str) {
    var ar = str.split(',')

    var res = 0;

    for (var num of ar) {
        res += +num;
    }

    return res;
}

function validate(data) {
    if (!data) {
        return false;
    }

    return true;
}

if (validate(dataString)) {
    var result = sum(dataString);
    alert('Your sum ' + result);
} else {
    alert('Error');
}

// 
var a = 18;

function Show(message) {
    var a = 10;

    function add() {
        var a = 5;
    }
    add();
}

Show();

console.log(a);

//slider
var left = document.getElementById('btn-left');
var right = document.getElementById('btn-right');



function slideLeft () {
    alert('slide left');
}

function slideRight () {
    alert('slide right');
}

left.onclick = slideLeft;
right.onclick = slideRight;

//slider with object
var slider = {
    left: document.getElementById('btn-left'),
    right: document.getElementById('btn-right'),
    mainBlock: document.getElementById('main'),
}

function slideLeft() {
    slider.mainBlock.style = 'background:yellowgreen';
}

function slideRight() {
    slider.mainBlock.style = 'background:blue';
}

slider.left.onclick = slideLeft;
slider.right.onclick = slideRight;

//slider in object finally
var slider = {
    left: document.getElementById('btn-left'),
    right: document.getElementById('btn-right'),
    mainBlock: document.getElementById('main'),
    slideLeft: function () {
        slider.mainBlock.style = 'background:yellowgreen';
    },
    slideRight: function () {
        slider.mainBlock.style = 'background:blue';
    },
}

slider.left.onclick = slider.slideLeft;
slider.right.onclick = slider.slideRight;

//interpolyacia

var user = {
    name: 'Vasa',
    age: 88,
    sex: 'male',
    show: function () {
        var str = `
        age: ${this.age}
        name: ${this.name}
        `
        alert(str);
    }
}

user.show ();

// function in object
'use strict'

var mainBlock = document.getElementById('main');

var myStyles = {
    background: 'Blue',
    changeBackground: function () {
        if (this.style.backgroundColor != 'yellow'){
            this.style.backgroundColor = 'yellow';
        } else {
        this.style.backgroundColor = 'red';
    }
    },
}

mainBlock.onclick = myStyles.changeBackground;

// slider
var colors1 = ['red', 'blue', 'yellow', 'black'];
var colors2 = ['orange', 'green', 'pink', 'brown'];

function ColorManager (colors, nameId) {
    this.container = document.getElementById(nameId);
    this.btnLeft = this.container.querySelector('.left');
    this.btnRight = this.container.querySelector('.right');
    this.index = 0;
    this.colors = colors;
    this.container.style.backgroundColor = this.colors[0];
    this.setColor = function () {
        var color = this.colors[this.index];
        this.container.style.backgroundColor = color;
    }


    this.btnLeft.onclick = function () {

        this.index = -- 

        if(this.index < 0) {
            this.index = this.colors.length -1;
        };

        this.setColor();
    }.bind(this);

    this.btnRight.onclick = function () {

        this.index ++ ;

        if(this.index === this.colors.length) {
            this.index = 0;
        };

        this.setColor();
    }.bind(this);
}

var manager1 = new ColorManager(colors1, 'colors-1');

var manager2 = new ColorManager(colors2, 'colors-2');

console.log(manager1);

function Counter () {
    var i = 0;

    return function 
}

//create block
var div = document.createElement('div');
var body = document.querySelector('body');

console.dir(body);

div.className = 'TEST';
div.innerHTML = '<p>Test</p>';
div.style.backgroundColor = 'red';

body.appendChild(div);