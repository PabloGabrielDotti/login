import React, { useContext } from "react";
import {

    BoxContainer,

    SubmitButton,
} from "./common";

import { AccountContext } from "./accountContext";

export function Capcha(props) {
    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>



            <SubmitButton type="submit" href="#" onClick={switchToSignin}>Insert capcha</SubmitButton>



        </BoxContainer>
    );
}