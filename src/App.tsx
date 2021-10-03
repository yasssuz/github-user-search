import styled from "styled-components";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import TopArea from "./components/TopArea";
import MainArea from "./components/MainArea";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

export default function App() {
  const { username } = useContext(UserContext);

  return (
    <ThemeContextProvider>
      <Container>
        <TopArea />
        {username && <MainArea />}
      </Container>
    </ThemeContextProvider>
  );
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  padding: 3.1rem 2.4rem;

  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;
