import React, { useContext } from "react";
import {BoxContainer} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";


export function Capcha(props) {
    const { switchToSignup } = useContext(AccountContext);

    return (

        <BoxContainer>

            <a type="submit" href="#" onClick={switchToSignup}><img className= "imgCapcha" src="https://kinsta.com/es/wp-content/uploads/sites/8/2019/10/login-no-captcha.png" alt="" /></a>
            <Marginer direction="vertical" margin="1em" />

        </BoxContainer>






    );
}
