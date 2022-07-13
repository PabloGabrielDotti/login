import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import { Welcome } from "./welcome";
import { Capcha } from "./capcha";
import { CreatePin } from "./createPin";

const BoxContainer = styled.div`
  width: 600px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 77%;
  height: 563;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #f2b111;
 ;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "200%",
    height: "1350px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "77%",
    height: "563px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("capcha");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };



  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };


  const switchToCreatePin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("createPin");
    }, 400);
  };



  const switchToWelcome = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("Welcome");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToWelcome, switchToCreatePin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "capcha" && (
            <HeaderContainer>
              <HeaderText>OnCall</HeaderText>
              <HeaderText>Practice</HeaderText>
              <SmallText>Please confirm that you are not a robot</SmallText>

            </HeaderContainer>

          )}
          {active === "createPin" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}

          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}

          {active === "Welcome" && (
            <HeaderContainer></HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "capcha" && <Capcha />}
          {active === "signup" && <SignupForm />}
          {active === "createPin" && <CreatePin />}
          {active === "Welcome" && <Welcome />}

        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
