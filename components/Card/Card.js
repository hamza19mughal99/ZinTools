import React from 'react';
import Image from 'next/image';
import './Card.css';

const Card = ({ id, img, heading, text }) => {
    return (
        <div className='card_box' key={id}>
            <Image src={img} alt='' />
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    )
}
export default Card