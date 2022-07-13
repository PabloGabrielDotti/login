import React, { useContext } from "react";
import {

  BoxContainer,
  FormContainer,
  Input,

  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { handleChange, error, message } from "./validate";


export function SignupForm(props) {
  const { switchToCreatePin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" id="email" placeholder="Email" />
        <div>
          <input
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
          />

          {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        </div>
        <Input type="email" placeholder="Confirm Email" />

      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={switchToCreatePin}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />

    </BoxContainer>
  );
}
