import React from 'react';
import Part from './Part'
const Content = (props) => {
    return (
        <>
            <Part part={props.part1} task={props.task1} />
            <Part part={props.part2} task={props.task2} />
            <Part part={props.part3} task={props.task3} />
        </>
    );
};

export default Content;