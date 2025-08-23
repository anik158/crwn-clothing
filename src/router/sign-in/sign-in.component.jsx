import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDoc = await createUserDocumentFromAuth(user);
    }

    return <div>
        <h1>Sign In Page</h1>

        <button type="button" onClick={logGoogleUser}>SIGN In with Google</button>
    </div>;
}

export default SignIn;