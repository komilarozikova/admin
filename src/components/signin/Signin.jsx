import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../signin/Signin.scss';

const Signin = () => {
    const [activeForm, setActiveForm] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Check if the provided credentials match the predefined ones
        if (email === 'admin' && password === '1234') {
            // Navigate to BaseLayout component
            navigate('/');
        } else {
            setMessage('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <input type="radio" id="loginForm" name="formToggle" checked={activeForm === 'login'} onChange={() => setActiveForm('login')} />
            <input type="radio" id="forgotForm" name="formToggle" checked={activeForm === 'forgot'} onChange={() => setActiveForm('forgot')} />

            {activeForm === 'login' && (
                <div className="wrapper" id="loginFormContent">
                    <form onSubmit={handleSignIn}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-box">
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="link">
                            <p><label htmlFor="forgotForm">Forgot password?</label></p>
                        </div>
                    </form>
                </div>
            )}
            {activeForm === 'forgot' && (
                <div className="wrapper" id="forgotFormContent">
                    <form>
                        <h1>Reset your password</h1>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <button type="submit" className="btn">Send Request</button>
                        <div className="link">
                            <p><label htmlFor="loginForm">Login</label></p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Signin;
