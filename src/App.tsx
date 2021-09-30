import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import TopArea from "./components/TopArea";
import MainArea from "./components/MainArea";
import { useState } from "react";

const queryClient = new QueryClient();

export default function App() {
  const [username, setUsername] = useState<string>("");

  function changeUsername(username: string): void {
    setUsername(username);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Container>
          <TopArea changeUsername={changeUsername} />
          {username && <MainArea username={username} />}
        </Container>
      </ThemeContextProvider>
    </QueryClientProvider>
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
