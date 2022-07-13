import React, { useContext } from "react";
import {

  BoxContainer,
  FormContainer,
  Input,

  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToCreatePin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Confirm Email" />
        
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={switchToCreatePin}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      
    </BoxContainer>
  );
}
