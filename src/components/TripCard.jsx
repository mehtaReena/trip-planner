import React from 'react';

function TripCard(props) {
    return (
        <tr>
        <td>{props.place}</td>
        <td>{props.start}</td>
        <td>{props.end}</td>
         <td>{props.description}</td>

    </tr>
    );
}

export default TripCard;