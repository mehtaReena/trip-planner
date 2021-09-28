import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Place(props) {

    return (
        <div>
           <label>
         <input type="checkbox" />
            {props.component}
    </label>

        </div>
    );
}

export default Place;