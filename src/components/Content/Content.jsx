import React from 'react';
import Part from './Part';
const Content = (props) => {
    return (
        <>
        {
            props.tasks.map(task => (
            <Part part={task.part} task={task.task} />
            ))
        }
        </>
    );
};

export default Content;