import React, { useContext } from "react";
import {

  BoxContainer,
  FormContainer,
  Input,

  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function CreatePin(props) {
  const { switchToWelcome } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="password" placeholder="Create PIN" />
        <Input type="password" placeholder="Confirm PIN" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={switchToWelcome}>Create</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      
    </BoxContainer>
  );
}
