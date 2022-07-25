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

  const [checkPinError, setcheckPinError] = useState('');
  const [checkData, setcheckData] = useState('');

  /*const validatePin = (e) => {
    var pin = document.getElementById("userPin").value
    var pinCheckCharacters = (/^[A-Za-z0-9-*][A-Za-z0-9-*]{4,4}$/)

    if (pin.match(pinCheckCharacters)) {
      setPinError(null)
      return true
    } else {
      setPinError('Enter valid Pin')
      return false
    }
  };*/





  function validatePassword() {

    const pin = document.getElementById("userPin").value

    // Do not show anything when the length of password is zero.
    if (pin.length === 0) {
      document.getElementById("msg").innerHTML = "";
      return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(pin)) {
        ctr++;
      }
    }




    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
      case 0:
      case 1:
      case 2:
        strength = "Very Weak";
        color = "red";
        break;
      case 3:
        strength = "Medium";
        color = "orange";
        break;
      case 4:
        strength = "Strong";
        color = "green";
        break;
    };

    if (pin.length < 5) {
      document.getElementById("msg").innerHTML = "Less than five characters";
      return;
    } else if (pin.length > 5){
      document.getElementById("msg").innerHTML = "More than five characters";
      return;
    }

    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;

    if (strength === "Very Weak" || strength === "Medium") {
      return false
    } else {
      return true
    }

  }

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

    if (validatePassword() === true && checkPin() === true) {
      switchToWelcome();
    } else {
      setcheckData("Check Data")
    }
  };


  return (
    <BoxContainer>
      <FormContainer>
        <div className="displayinfo">
          <Input type="password" placeholder="Create PIN" id="userPin" onKeyUp={validatePassword} /> <div class="addMore" title="
Your PIN must be five characters long and must include at least one uppercase letter, at least one lowercase letter, at least one number, and at least one special character">?</div>
        </div>
        <span className="span" id="msg"></span>
        <Input type="password" placeholder="Confirm PIN" id="checkPin" onChange={checkPin} />
        <span className="span">{checkPinError}</span>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={validate}>Create</SubmitButton>
      <span className="span">{checkData}</span>
      <Marginer direction="vertical" margin="1em" />

    </BoxContainer>
  );
}
