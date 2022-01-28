import React from 'react';



const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ma1 br4 ba b--green bg-lightest-purple'
            type='search' 
            placeholder='Search Robots'
            onChange={searchChange} />
        </div>
    );
} 
export default SearchBox;