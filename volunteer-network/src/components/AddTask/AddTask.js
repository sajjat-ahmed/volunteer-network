import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import photo from '../../images/extraVolunteer.png'


import './AddTask.css';

const AddTask = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="row">
            <div className="col-md-5 cl">
                <div>
                    <img style={{ width: '200px' }} src={photo} alt="" />
                </div>
                <div>
                    <h3>Sajjat Ahmed</h3>
                </div>
            </div>
            <div className="col-md-5 cl">
                <div>
                    <img style={{ width: '200px' }} src={photo} alt="" />
                </div>
                <div>
                    <h3>Sajjat Ahmed</h3>
                </div>
            </div>
            <div className="col-md-5 cl">
                <div>
                    <img style={{ width: '200px' }} src={photo} alt="" />
                </div>
                <div>
                    <h3>Sajjat Ahmed</h3>
                </div>
            </div>
            <div className="col-md-5 cl">
                <div>
                    <img style={{ width: '200px' }} src={photo} alt="" />
                </div>
                <div>
                    <h3>Sajjat Ahmed</h3>
                </div>
            </div>
        </div>
    );
};

export default AddTask;