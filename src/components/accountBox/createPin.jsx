import React, { useContext } from "react";
import {

  BoxContainer,
  FormContainer,
  Input,

  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useState } from "react";

export function CreatePin(props) {
  const { switchToWelcome } = useContext(AccountContext);
  const [pinError, setPinError] = useState('');
  const [checkPinError, setcheckPinError] = useState('');
  const [checkData, setcheckData] = useState('');

  const validatePin = (e) => {
    var pin = document.getElementById("userPin").value
 
    if (1==1) {
      setPinError(null)
      return true
    } else {
      setPinError('Enter valid Email')
      return false
    }
  };

  const checkPin = (e) => {
    if (document.getElementById("userPin").value === document.getElementById("checkPin").value) {
      setcheckPinError(null)
      return true
    } else {
      setcheckPinError("Enter valid Pin")
      return false
    }
  };

  const validate = (e) => {

    if (validatePin() === true && checkPin() === true) {
      switchToWelcome();
    } else {
      setcheckData("Check Data")
    }
  };


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="password" placeholder="Create PIN" id="userPin" onChange={validatePin}/>
        <span className= "span">{pinError}</span>
        <Input type="password" placeholder="Confirm PIN" id="checkPin" onChange={checkPin}/>
        <span className= "span">{checkPinError}</span>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={validate}>Create</SubmitButton>
      <span className= "span">{checkData}</span>
      <Marginer direction="vertical" margin="1em" />
      
    </BoxContainer>
  );
}
