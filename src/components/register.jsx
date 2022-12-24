import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection } from '@firebase/firestore';
import { firestore } from '../firebase';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false)
    const ref = collection(firestore, 'messages');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0 || number.length === 0 || name.length === 0 || address.length === 0 || pass.length === 0) {
            setError(true)
        }
        if (email && pass && name && address && pass) {
            console.log('email: ', email, '\npassword: ', pass, '\nname: ', name, '\naddress: ', address, '\nnumber: ',number);
        }
        let data = {
            email: email,
            number: number,
            name: name,
            address: address,
            password: pass
        }
        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div>
            <h3>Register</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Full Name" />
                {error && name.length<=0 ? <div className='error'>Name field can't be empty!</div> : ' '}
                
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="youremail@gmail.com" />
                {error && email.length<=0  ? <div className='error'>Email field can't be empty!</div> : ''}
                 
                <label htmlFor="tel">Phone Number</label>
                <input value={number} onChange={(e) => setNumber(e.target.value)} type="tel" name="phone" id="phone" placeholder="Phone Number" />
                {error && number.length<=0  ? <div className='error'>Phone number field can't be empty!</div> : ''}
                
                <label htmlFor="address">Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="email" id="address" placeholder="Current Address" />
                {error && address.length<=0  ? <div className='error'>Address field can't be empty!</div> : ''}

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" name="password" id="password" placeholder="*********" />
                {error && pass.length<=0  ? <div className='error'>Password field can't be empty!</div> : ''}
                
                <button type='submit'>Sign Up</button>

            </form>
            <button onClick={() => props.onFormChange('login')}>Already have an account? Login here</button>
            {/* {
                forgotPassword === false ? <Link onClick={() => setForgotPassword(true)} to={'/forgot'}>Forgot password?</Link> : ''
            } */}
         </div>
     )
}
 
export default Register