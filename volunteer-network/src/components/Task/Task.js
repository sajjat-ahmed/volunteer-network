import React from 'react';
import { Link } from 'react-router-dom';
import './Task.css';

const Task = ({ task }) => {
    return (
        <div className="col-md-3">
            <Link to="/register">
                <img className="task-pic" src={`https://raw.githubusercontent.com/ProgrammingHero1/volunteer-network/main/images/${task.pic}`} alt="" />
                <h4 className="task-title">{task.name}</h4>
            </Link>
        </div>
    );
};

export default Task;