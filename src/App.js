import { AccountBox } from "./components/accountBox";
import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import styled from "styled-components";
import './App.css';



const AppContainer = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

    }, 3000)
  }, []);


  return (
    <div className="App">
      {
        loading ? (<div className="Loader">
          <p>Eneabling security system</p>
          <HashLoader


            size={100}
            color={"yellow"}
            loading={loading}

          /></div>
        )
          : (
            <AppContainer>
              <AccountBox />
            </AppContainer >
          )
      }
    </div>)
}


export default App;
