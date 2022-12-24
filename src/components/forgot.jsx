import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { addDoc, collection } from '@firebase/firestore';
import { firestore } from '../firebase';
import { toast } from 'react-toastify'


class Forgot extends Component {
    state = {
        email: '',

        error: true
    } 

    ref = collection(firestore, 'messages');

    handleSubmit = async (e) => {
        e.preventDefault();

        console.log(this.state.email);

        let data = {
            email: this.state.email,
        }
        try {
            addDoc(this.ref, data);
            const auth = getAuth()
            await sendPasswordResetEmail(auth, data)
            toast.success('Email was sent')
        } catch (e) {
            console.log(e);
            toast.error('Could not send reset email')
        }

        }
    
    render() { 
        return (
            <div>
                <h3>Forgot Password</h3>

                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type="email" name="email" id="forgot_email" placeholder="youremail@gmail.com" />
                    {this.state.error && this.state.email.length <= 0 ? <div className='error'>Email field can't be empty!</div> : ''}
                    <Link to={'/login'}>
                        Sign In
                    </Link>

                    <div>
                        <span>Send Reset Link</span>
                        <button>go</button>
                    </div>
            </form>
         </div>
        );
    }
}
 
export default Forgot;