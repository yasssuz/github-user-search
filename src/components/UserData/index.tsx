import styled from "styled-components";
import LinksArea from "./LinksArea";
import StatsArea from "./StatsArea";

interface UserDataProps {
  user: {
    name: string;
    joinedAt: string;
    username: string;
    bio: string;
    repos: string;
    followers: string;
    following: string;
    links: {
      location: string;
      twitter: string;
      blog: string;
      company: string;
    };
  };
}

export default function UserData({ user }: UserDataProps) {
  return (
    <Container>
      <h1>Still working here</h1>
      <StatsArea
        repos={user.repos}
        followers={user.followers}
        following={user.following}
      />
      <LinksArea links={user.links} />
    </Container>
  );
}

const Container = styled.section`
  padding: 3rem 2.4rem;
  background: ${props => props.theme.colors.card};
  width: 100%;
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }
`;
