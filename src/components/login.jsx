import React, { useState } from 'react';
import Forgot from './forgot';
import { Link, Route } from 'react-router-dom';
import { addDoc, collection } from '@firebase/firestore';
import { firestore } from '../firebase';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false)

    const ref = collection(firestore, 'messages');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0 || pass.length === 0) {
            setError(true)
        }
        if (email && pass) {
            console.log('email: ', email, '\npassword: ', pass);
        }
        
        let data = {
            email: email,
            password: pass
        }
        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <div className='auth-form-content'>         
            {forgotPassword ? <Forgot /> : 
                <form action="" onSubmit={handleSubmit}>
                    <legend><h3>Login</h3></legend>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="youremail@gmail.com" />
                    {error && email.length<=0  ? <div className='error'>Email field can't be empty!</div> : ''}

                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" placeholder="*********" />
                    {error && pass.length<=0  ? <div className='error'>Password field can't be empty!</div> : ''}                

                    <button type='submit'>Log In</button>
                    <button onClick={() => props.onFormChange('register')}>Don't have an account? Register here</button>                
            {
                forgotPassword === false ? <Link onClick={() => setForgotPassword(true)} to={'/forgot'}>Forgot password?</Link> : ''
            }
                </form>
            }
            

         </div>
     )
}
 
export default Login