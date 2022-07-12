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

export function SignupForm(props) {
  const { switchToWelcome } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Confirm Email" />
        <Input type="password" placeholder="Create PIN" />
        <Input type="password" placeholder="Confirm PIN" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={switchToWelcome}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      
    </BoxContainer>
  );
}
