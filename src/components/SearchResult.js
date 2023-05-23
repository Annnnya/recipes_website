import React, { useState } from 'react';
import './SearchResult.css';

import { BiTimer } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md'


const SearchResult = ({ image, name, time, price, details }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cropText = (text, sentences) => {
        const delimiter = '. ';
        const sentencesArray = text.split(delimiter);
        const croppedText = sentencesArray.slice(0, sentences).join(delimiter);
        return croppedText;
    };

    return (
        <div
            className={`search-result ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className='result-properties'>
                <div className='result-property'>
                    <BiTimer color="black" />
                    <p>{time}</p>
                </div>

                <div className='result-property'>
                    <MdAttachMoney color="black" />
                    <p>{price}</p>
                </div>
            </div>
            {isHovered && <div className="details" dangerouslySetInnerHTML={{ __html: cropText(details, 4) }} />}
        </div>
    );
};

export default SearchResult;
