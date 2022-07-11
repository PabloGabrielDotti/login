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

export function PassForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Password" />
        
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Insert your Password</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" >Submit</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
