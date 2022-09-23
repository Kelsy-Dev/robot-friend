import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt="Robot" src='https://robohash.org/test?200x200' />
            <div>
            <h1>Just a test</h1>
            <p>This is a robot</p>
            </div>
            
        </div>
    );
}

export default Card;