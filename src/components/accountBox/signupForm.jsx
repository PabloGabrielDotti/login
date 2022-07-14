
import {

  BoxContainer,
  FormContainer,
  Input,

  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import validator from "validator";
import React, { useContext } from "react";
import { useState } from "react";





export function SignupForm(props) {
  const { switchToCreatePin } = useContext(AccountContext);
  const [emailError, setEmailError] = useState('');
  const [checkEmailError, setcheckEmailError] = useState('');

  const validateEmail = (e) => {
    var email = e.target.value
    console.log(email)
    if (validator.isEmail(email)) {
      setEmailError(null)
    } else {
      setEmailError('Enter valid Email!')
    }
  };

  const checkUserEmail = (e) => {
    if (document.getElementById("userEmail").value === e.target.value) {
      setcheckEmailError(null)
    } else {
      setcheckEmailError("Enter valid Email!")
    }
  }


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" id="userEmail" onChange={(e) => validateEmail(e)} />

        <span style={{
          fontWeight: 'lighter',

          color: 'red',
        }}>{emailError}</span>
        <Input type="email" placeholder="Confirm Email" id="checkUserEmail" onChange={(e) => checkUserEmail(e)} />
        <span style={{
          fontWeight: 'lighter',

          color: 'red',
        }}>{checkEmailError}</span>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={switchToCreatePin}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />

    </BoxContainer>
  );
}
