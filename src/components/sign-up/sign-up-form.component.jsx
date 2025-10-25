import { useState, useContext } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './sign-up-form.style.scss';
import Button from '../button/button.component';
import { UserContext } from '../../contexts/user.context.jsx';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const {setCurrentUser} = useContext(UserContext);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);

            const { user } = response;
            setCurrentUser(user);
            if (!response) {
                throw new Error('Failed to create user');
            }

            console.log('user in form', user);
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(defaultFormFields);
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else if (err.message === 'Email and password are required') {
                alert('Please provide both email and password');
            } else {
                console.error('User creation encountered an error:', err);
                alert('An error occurred during sign-up. Please try again.');
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    required
                    type="text"
                    name="displayName"
                    placeholder="Display name"
                    value={displayName}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                />
                <label>Confirm Password</label>
                <input
                    required
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button type="submit" change={'Sign Up'} buttonType="base">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;