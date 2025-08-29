import { useState } from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import './sign-up-form.style.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            console.log("passwords do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            console.log('user in form', user);
            await createUserDocumentFromAuth(user,{ displayName });
            setFormFields(defaultFormFields);
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', err);
            }
        }
    }

    return (
        <>
            <div className="sign-up-container">
                <h1>Sign up with your email and password</h1>
                <form onClick={handleSubmit}>
                    <label>Display Name</label>
                    <input required type="text" name="displayName" placeholder="display name" value={displayName} onChange={handleChange} />
                    <label>Email</label>
                    <input required type="email" name="email" placeholder="email" value={email} onChange={handleChange} />
                    <label>Password</label>
                    <input required type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
                    <label>Confirm Password</label>
                    <input required type="password" name="confirmPassword" placeholder="confirm password" value={confirmPassword} onChange={handleChange} />
                    <Button type="submit" change={'Sign Up'} buttonType={'base'}></Button>
                </form>
            </div>

        </>
    );
};

export default SignUpForm;
