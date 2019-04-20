'use strict'

var sDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var fDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium fuga eos fugit deleniti nobis quidem explicabo, officia cumque ducimus sunt mollitia sequi pariatur possimus corporis consectetur modi nisi commodi.'

var dataImages = [
    { path: 'img/img1.png', shortDesc: sDesc, fullDesc: fDesc },
    { path: 'img/img2.png', shortDesc: sDesc, fullDesc: fDesc },
    { path: 'img/img3.png', shortDesc: sDesc, fullDesc: fDesc },
    { path: 'img/img4.png', shortDesc: sDesc, fullDesc: fDesc },
    { path: 'img/img5.png', shortDesc: sDesc, fullDesc: fDesc },
    { path: 'img/img6.png', shortDesc: sDesc, fullDesc: fDesc },
]

/**
 * Handler for create 
 * image block
 * @param {object} data 
 * @param {function} onMoreClick 
 */

function ImageBlock(data, useOpen) {
    this.data = data;
    this.wrap = document.createElement('div');
    this.wrap_desc = document.createElement('div');
    this.p = document.createElement('p');
    this.img = document.createElement('img');
    this.btn = document.createElement('button');

    this.btn.innerHTML = 'more ...';
    this.btn.type = 'button';

    this.btn.onclick = function () {
        var lastOpen = useOpen();
        if (lastOpen) {
            lastOpen.p.innerHTML = lastOpen.data.shortDesc;
            lastOpen.wrap.classList.remove('open');
        }
        useOpen(this);

        this.p.innerHTML = this.data.fullDesc;
        this.wrap.classList.add('open');
    }.bind(this);

    this.img.src = this.data.path;
    this.p.innerHTML = this.data.shortDesc;

    this.wrap_desc.className = 'wrap_desc';
    this.wrap_desc.appendChild(this.p);
    this.wrap_desc.appendChild(this.btn);

    this.wrap.appendChild(this.img);
    this.wrap.appendChild(this.wrap_desc);
    this.wrap.className = 'img-block';
    this.btn.className = 'btn-block';

    this.render = function () {
        return this.wrap;
    }
}

/**
 * Handler for create images manager
 * @param {array} images 
 * @param {string} id_name 
 */
function imageManager(images, id_name) {
    this.images = images;
    this.open = undefined;

    this.useOpen = function (value) {
        if (value) {
            this.open = value;
        }
        return this.open;
    }.bind(this);

    
    //Get element from document by id name
    this.container = document.querySelector(id_name);


    //Handler for render all images on page 
    this.showListImages = function () {

        for (var image of this.images) {
            var imgBlock = new ImageBlock(image, this.useOpen);
            console.log(imgBlock);
            this.container.appendChild(imgBlock.render());
        }
    }
}

var manager = new imageManager(dataImages, '#images-list');

manager.showListImages();



