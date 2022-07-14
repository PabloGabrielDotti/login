
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
  const [checkUserError, setUserError] = useState('');
  const [checkData, setcheckData] = useState('');

  const validateName = () => {
    var name = document.getElementById("userName").value
    var letters = (/^[A-Za-z][A-Za-z ]{7,29}$/);
    if (name.match(letters)) {
      setUserError(null);
      return true
    } else {
      setUserError('Enter valid name');
      return false
    }
  };



  const validateEmail = (e) => {
    var email = document.getElementById("userEmail").value
    console.log(email)
    if (validator.isEmail(email)) {
      setEmailError(null)
      return true
    } else {
      setEmailError('Enter valid Email')
      return false
    }
  };

  const checkUserEmail = (e) => {
    if (document.getElementById("userEmail").value === document.getElementById("checkUserEmail").value) {
      setcheckEmailError(null)
      return true
    } else {
      setcheckEmailError("Enter valid Email")
      return false
    }
  };

  const validate = (e) => {

    if (validateName() === true && validateEmail() === true && checkUserEmail() === true) {
      switchToCreatePin();
    } else {
      setcheckData("Check Data")
    }
  };


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" id="userName" onChange={validateName} />
       <span className= "span">{checkUserError}</span>
        <Input type="email" placeholder="Email" id="userEmail" onChange={(e) => validateEmail(e)} />
        <span className= "span">{emailError}</span>
        <Input type="email" placeholder="Confirm Email" id="checkUserEmail" onChange={(e) => checkUserEmail(e)} />
        <span className= "span">{checkEmailError}</span>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={validate}>Signup</SubmitButton>
      <span className= "spanLast">{checkData}</span>
      <Marginer direction="vertical" margin="1em" />

    </BoxContainer >
  );
}
