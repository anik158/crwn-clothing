import {Outlet, Link} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.style.scss';

const Navigation = () => {
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