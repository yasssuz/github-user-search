import styled from "styled-components";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import TopArea from "./components/TopArea";

export default function App() {
  return (
    <ThemeContextProvider>
      <Container>
        <TopArea />
      </Container>
    </ThemeContextProvider>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  padding: 3.1rem 2.4rem;

  @media (min-width: 768px) {
    padding: 3.1rem 4rem;
  }
`;
