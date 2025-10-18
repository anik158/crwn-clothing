import Button from "../button/button.component";
import './sign-in-form.style.scss';
import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            if (!response) {
                throw new Error('Failed to sign in user');
            }
            const { user } = response;
            console.log('user in form', user);
            resetFormFields();
        } catch (err) {
            if (err.message === 'Email and password are required') {
                alert('Please provide both email and password');
            } else if (err.code === 'auth/wrong-password') {
                alert('Incorrect password');
            } else if (err.code === 'auth/user-not-found') {
                alert('No user found with this email');
            } else {
                console.error('Sign-in error:', err);
                alert('An error occurred during sign-in. Please try again.');
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
        } catch (err) {
            console.error('Google sign-in error:', err);
            alert('An error occurred during Google sign-in. Please try again.');
        }
    };

    return (
        <div className="sign-in-container">
            <h1>I already have an account</h1>
            <form onSubmit={handleSignIn}>
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
                <div className="buttons">
                    <Button type="submit" change={"Sign In"} buttonType="base">Sign In</Button>
                    <Button type="button" change={"Google Sign In"} buttonType="google" onClick={handleGoogleSignIn}>
                        Sign In with Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;