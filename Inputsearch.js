import React from 'react'
import {useState} from'react'

function Searcher(){
    const [searchTerm, setSearchTerm] = useState('');
    if (searchTerm !== ""){
        return searchTerm
    }
    else {
        return ""
    }

    return (
        <div>
            whats
            <input 
                type="text"
                placeholder="Search"
                onChange={(event) => {searchTerm(event.target.value);}}
            />
        </div>
    );
}

export default Searcher