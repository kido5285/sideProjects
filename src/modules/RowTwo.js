import React from 'react';
import ImageAboutDark from '../images/image-about-dark.jpg';
import ImageAboutLight from '../images/image-about-light.jpg';
import './module.css';

function RowTwo() {
    return(
        <div className="row-two-content">
            <img src={ImageAboutDark}/>
            <div className="text-container">
                <h1>about our furniture</h1>
                <p>Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <img src={ImageAboutLight}/>
        </div>
    )
}

export default RowTwo;