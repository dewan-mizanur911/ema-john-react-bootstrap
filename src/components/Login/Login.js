import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useContextProvider from '../../hooks/useContextProvider';

const Login = () => {
    const { googleSignIn } = useContextProvider();
    const location = useLocation();
    const redirect_url = location.state?.from || '/shop';
    const history = useHistory();
    const signInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="email" name="" id="email" placeholder="Enter your email" />
                <br />
                <input type="password" name="" id="password" placeholder="Enter Password" />
                <br />
                <input type="submit" value="Submit" className="btn btn-danger border border-1 border-dark"/>
            </form>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );
};

export default Login;