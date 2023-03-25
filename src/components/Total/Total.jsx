import React from 'react';

const Total = (props) => {
    const total = props.tasks.reduce((acc,rec) => {
        return acc + rec.task
    }, 0)
    return (
        <div>
            <p>Общее количество заданий = {total}</p>
        </div>
    );
};

export default Total;