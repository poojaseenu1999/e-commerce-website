import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options-container">
      <Link className="options" to="/shop">
        SHOP
      </Link>
      <Link className="options" to="/shop">
        CONTACT
      </Link>
      {currentUser ? 
        <div className="options" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
       : 
        <Link className="options" to="/signin">
          SIGN IN
        </Link>
      }
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  currentUser: state.user.currenUser

}
);

export default connect(mapStateToProps)(Header);
