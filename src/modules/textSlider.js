import React from 'react';
import './module.css';
import arrowRight from '../images/icon-arrow.svg';
import AngleLeft from '../images/icon-angle-left.svg';
import AngleRight from '../images/icon-angle-right.svg';

function textSlider() {
    function next() {
        var textArr = [`<h1>Discover innovative ways to decorate</h1>
                        <p>We provide unmatched quality, comfort, and style
                        for property owners across the country. Our experts 
                        combine form and function in bringing your vision 
                        to life. Create a room in your own style with our 
                        collection and make your property a reflection of you
                         and what you love.</p>
                        `
                        , `<h1>We are available all across the globe</h1>
                        <p>With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                        store locator. Any questions? Don't hesitate to contact us today.
                        Shop now</p>
                        `
                        , `<h1>Manufactured with the best materials</h1>
                        <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technolo
                        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                        experience in this industry, we understand what customers want for their home and office.
                        Shop now</p>
                        `]
        var images = Array.from(document.querySelectorAll('.img'))
        var currentIndex = 0;
        images.forEach(image => {
            if(image.classList.contains('zIndex')) {
                currentIndex = images.indexOf(image);
            }
        })
        document.querySelector('.imgSlider').classList.add('opacity')
        document.getElementById('textSlider').classList.add('opacity')
        document.querySelector('.imgSlider').addEventListener('transitionend', () => {
            document.querySelector('.imgSlider').classList.remove('opacity')
            document.getElementById('textSlider').classList.remove('opacity')
        })
        setTimeout(() => {
            if(currentIndex === 0) {
                images[currentIndex + 1].classList.add('zIndex');
                images[currentIndex].classList.remove('zIndex');
                document.getElementById('textSlider').innerHTML = textArr[currentIndex + 1];
            } else if(currentIndex === 1) {
                images[currentIndex + 1].classList.add('zIndex');
                images[currentIndex].classList.remove('zIndex');
                document.getElementById('textSlider').innerHTML = textArr[currentIndex + 1];
            } else if(currentIndex === 2) {
                currentIndex = 0;
                images[0].classList.add('zIndex');
                images[2].classList.remove('zIndex');
                document.getElementById('textSlider').innerHTML = textArr[0];
            }
        }, 500)
    }
  
    function prev() {   
        var images = Array.from(document.querySelectorAll('.img'));
        var textArr = [`<h1>Discover innovative ways to decorate</h1>
                        <p>We provide unmatched quality, comfort, and style
                        for property owners across the country. Our experts 
                        combine form and function in bringing your vision 
                        to life. Create a room in your own style with our 
                        collection and make your property a reflection of you
                         and what you love.</p>
                        `
                        , `<h1>We are available all across the globe</h1>
                        <p>With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                        store locator. Any questions? Don't hesitate to contact us today.
                        Shop now</p>
                        `
                        , `<h1>Manufactured with the best materials</h1>
                        <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technolo
                        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                        experience in this industry, we understand what customers want for their home and office.
                        Shop now</p>
                        `]
        var currentIndex = 0;
        images.forEach(image => {
            if(image.classList.contains('zIndex')) {
                currentIndex = images.indexOf(image);
            }
        })
        document.querySelector('.imgSlider').classList.add('opacity')
        document.querySelector('#textSlider').classList.add('opacity')
        document.querySelector('.imgSlider').addEventListener('transitionend', () => {
            document.querySelector('.imgSlider').classList.remove('opacity')
            document.querySelector('#textSlider').classList.remove('opacity')
        })
        setTimeout(() => {
            if(currentIndex === 2) {
                images[currentIndex - 1].classList.add('zIndex');
                images[currentIndex].classList.remove('zIndex');
                document.querySelector('#textSlider').innerHTML = textArr[currentIndex-1]
            } else if(currentIndex === 1) {
                images[currentIndex - 1].classList.add('zIndex');
                images[currentIndex].classList.remove('zIndex');
                document.querySelector('#textSlider').innerHTML = textArr[currentIndex-1];
            } else if(currentIndex === 0) {
                currentIndex = 2;
                images[2].classList.add('zIndex');
                images[0].classList.remove('zIndex');
                document.querySelector('#textSlider').innerHTML = textArr[2]
            }
        }, 500)
    }
    return (
        <div className="text-slider">
            <div className="text-slider" id="textSlider">
                <h1>Discover innovative ways to decorate</h1>
                <p>We provide unmatched quality, comfort, and style
                for property owners across the country. Our experts 
                combine form and function in bringing your vision 
                to life. Create a room in your own style with our 
                collection and make your property a reflection of you
                 and what you love.</p>
            </div>
            <button className="shopNow">shop now<img src={arrowRight}/></button>
            <div className="controls2">
                <button id="prev" className="button" onClick={prev}><img src={AngleLeft} /></button>
                <button id="next" className="button" onClick={next}><img src={AngleRight}/></button>
            </div>
        </div>
    )
}

export default textSlider;