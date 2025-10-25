import {Outlet, Link} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import {useContext} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.style.scss';
import { UserContext } from "../../contexts/user.context.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";

const Navigation = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

  return (
    <Fragment>
      <div className="navigation-containers">
       <Link className="logo-container" to="/">
            <CrwnLogo className="logo" />
       </Link>
        <div className="nav-links-container">
                <Link className="nav-link" to="/shop">SHOP</Link>
                {
                    currentUser ? (
                        <Link className="nav-link" to="" onClick={signOutHandler} >SIGN OUT</Link>
                    ) : (<Link className="nav-link" to="/auth">SIGN IN</Link>)
                }

        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}


export default Navigation;