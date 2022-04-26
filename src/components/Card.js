import React from 'react';
// Card Accept Props
const Card = ( {name, id, username, email }) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw1 shadow-5'>
            <div>
                <img alt='robot' src={`https://robohash.org/${id}?200x200`} /> 
            </div>
            <div>
                <h4 className='f3'>{name}</h4>
            </div>
            <div>
                <h5>{username}</h5>
            </div>
            <div>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;
