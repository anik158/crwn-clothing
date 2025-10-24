import {Outlet, Link} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import {useContext} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.style.scss';
import { UserContext } from "../../contexts/user.context.jsx";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    console.log('Current User:', currentUser);
  return (
    <Fragment>
      <div className="navigation-containers">
       <Link className="logo-container" to="/">
            <CrwnLogo className="logo" />
       </Link>
        <div className="nav-links-container">
                <Link className="nav-link" to="/shop">Shop</Link>
                <Link className="nav-link" to="/auth">Sign In</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}


export default Navigation;