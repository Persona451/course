import React from 'react';

const Total = (props) => {
    return (
        <>
        <p>Общее количество заданий = <span>{props.task1 + props.task2 + props.task3}</span></p>
        </>
    );
};

export default Total;