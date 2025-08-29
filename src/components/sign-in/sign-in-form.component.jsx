import Button from "../button/button.component";
import './sign-in-form.style.scss';
import {useState} from "react";
import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const handleGoogleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };


    const [formFields, setFormFields] = useState(defaultFormFields);

    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});

        console.log(formFields);
    }

    return (
        <>
            <div className="sign-in-container">
                <h1>I already have an account</h1>
                <form onClick={() =>{}}>
                    <label>Email</label>
                    <input required type="email" name="email" placeholder="email" value={email} onChange={handleChange} />
                    <label>Password</label>
                    <input required type="password" name="password" placeholder="password" value={password} onChange={handleChange} />

                    <div className="buttons">
                        <Button type="submit" change={'Sign In'} buttonType={'base'}></Button>
                        <Button type="button" change={'Sing In with Google'} onClick={handleGoogleSignIn} buttonType={'google'}></Button>
                    </div>

                </form>
            </div>

        </>
    );
}

export default SignInForm;