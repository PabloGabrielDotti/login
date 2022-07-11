import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function TwoFactor(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToPassForm } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="2FA" />
        
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">¿Need help?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={switchToPassForm}>Submit</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    
    </BoxContainer>
  );
}
