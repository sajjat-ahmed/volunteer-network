import React, { useContext } from 'react';
import './Header.css';
import Logo from '../../logos/Group 1329.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div classNameName="container navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/home">
                    <img className="logo" src={Logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto text-center">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-link">Danation</a>
                        <a className="nav-link">Events</a>
                        <a className="nav-link">Blog</a>
                        <Link to="/login">
                            {
                                loggedInUser.name ? <button className="reg-btn">{loggedInUser.name}</button>
                                :<button className="reg-btn">Register</button>
                            }
                        
                        </Link>
                        <button className="adm-btn">Admin</button>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;