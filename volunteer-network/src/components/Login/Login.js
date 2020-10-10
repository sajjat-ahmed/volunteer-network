import React from 'react';
import './Login.css';
import Logo from '../../logos/Group 1329.png'
import Logo2 from '../../logos/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            setLoggedInUser(signedInUser);
            history.replace(from)
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const handleLogOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: ''
            }
            setLoggedInUser(signOutUser)
          }).catch(function(error) {
            
          });
    }



    return (
        <div>
            <div className="text-center">
                <img className="login-logo" src={Logo} alt="" />
            </div>
            <div className="login-box">
                {
                    loggedInUser.email ?
                        <div>
                            <div onClick={handleLogOut} className="login-border text-center">
                                <span>Sign Out</span>
                            </div>
                        </div>
                        :
                        <div>
                            <h3 className="text-center">Login With</h3>
                            <div onClick={handleGoogleSignIn} className="login-border text-center">
                                <img className="google-icon" src={Logo2} alt="" />
                                <span>Continue with Google</span>
                            </div>
                        </div>

                }

            </div>
        </div>
    );
};

export default Login;