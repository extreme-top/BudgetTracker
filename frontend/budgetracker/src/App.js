import styled from "styled-components";
import background from "./img/background.jpg";
import { MainLayout } from "./syles/Layouts";
import Orb from "./components/movingOb/movingOb";
import Navigation from "./components/Navigation/Navigation";

function App() {
  
  return (
    <AppStyled background={background} className="App">
    <main>
      <Orb />
      <MainLayout>

        <Navigation />

      </MainLayout>
    </main>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  //background-image: url(${props => props.background});
  position: relative;
`;

export default App;
