import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return <div>
        <h1>Sign In Page</h1>

        <button type="button" onClick={logGoogleUser}>SIGN In with Google</button>
    </div>;
}

export default SignIn;