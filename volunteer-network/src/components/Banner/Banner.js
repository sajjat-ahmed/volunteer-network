import React from 'react';

const Banner = () => {
    return (
        <div>
            <h1 className="text-center banner-text">I GROW BY HELPING PEOPLE IN NEED.</h1>
            <div className="input-btn text-center">
                <input className="search-input" type="text" placeholder="Search..." />
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

export default Banner;