import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import './sign-in.style.scss';

const SignIn = () => {


    return <>
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>

    </>;
}

export default SignIn;