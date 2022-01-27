import React from "react";
import './sign-in-and-sign-out.styles.scss';
import Signin from "../../component/sign-in/sign-in.component";
import Signup from "../../component/sign-up/sign-up.component";


const Signinandsingout = () => (
    <div className="Signinandsingout">
        <Signin/>
        <Signup/>
    </div>
);
export default Signinandsingout;