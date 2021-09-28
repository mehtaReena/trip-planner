import React from 'react';


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