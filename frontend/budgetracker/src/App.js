import React, {useState} from "react";
import styled from "styled-components";
import background from "./img/background.jpg";
import { MainLayout } from "./syles/Layouts";
import Orb from "./components/movingOb/movingOb";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import { useGlobalContext } from "./context/global";

function App() {

  const [active, setActive] = React.useState(1)

  const global = useGlobalContext
  console.log(global)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  return (
    <AppStyled background={background} className="App">
    {/* <main> */}
      <Orb />
      <MainLayout>

        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    {/* </main> */}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  //background-image: url(${props => props.background});
  position: relative;

  main{
    flex : 1;
    background-color: white;
    border: 3px solid red;
    backdrop-filter: blur(5px);
    border-radius: 25px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
