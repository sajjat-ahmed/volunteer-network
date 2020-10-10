import React, { useState } from 'react';
import './Register.css';
import Logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Register = () => {
    const [loggedInUser] = useContext(UserContext);


    const handleDataSend = () => {
        const newTasks = {...loggedInUser};
        fetch('http://localhost:5000/allTasks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTasks)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <div className="text-center">
                <img className="login-logo" src={Logo} alt="" />
            </div>
            <div className="text-center register-form">
                <h3>Register as a Volunteer</h3>
                
                    <input type="text" name="" id="" placeholder="Full Name" required /><br />
                    <input type="text" name="" id="" placeholder="Username or Email" required /><br />
                    <input type="text" name="" id="" placeholder="Date" required /><br />
                    <input type="text" name="" id="" placeholder="Desicription" required /><br />
                    <input type="text" name="" id="" placeholder="Organize books at the library." required /><br />
                    <Link to="/allTask">
                        <button onClick={handleDataSend} className="regs-btn">Registration</button>
                    </Link>
            </div>
        </div>
    );
};

export default Register;