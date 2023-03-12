import React from 'react';

const Part = (props) => {
    return (
        <>
        <p>{props.part} - <span>{props.task}</span></p>
        </>
    );
};

export default Part;