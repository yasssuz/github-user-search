import { useQuery } from "react-query";
import UserData from "./UserData/index";

interface MainAreaProps {
  username: string;
}

interface UserProps {
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
}

function getUser(username: string): any {
  return useQuery("user", async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    return data;
  });
}

export default function MainArea({ username }: MainAreaProps) {
  const { data, status, isFetching } = getUser(username);

  if (isFetching || status === "loading") return <h1>Loading...</h1>;

  if (data.message === "Not Found") return <h1>Not Found...</h1>;

  const user: UserProps = {
    name: data.name,
    joinedAt: data.created_at,
    username: data.login,
    bio: data.bio,
    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    links: {
      location: data.location,
      twitter: data.twitter_username,
      company: data.company,
      blog: data.blog,
    },
  };

  return <UserData user={user} />;
}
