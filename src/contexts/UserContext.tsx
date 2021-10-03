import { createContext, FC, useState } from "react";
import { useQuery } from "react-query";
import { joinedDate } from "../utils/formatters";

interface UserContextProps {
  empty: boolean;
  handleSubmit: (username: string) => void;
  username: string;
  getUser: () => any;
}

interface UserProps {
  pfp: string;
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

export const UserContext = createContext({} as UserContextProps);

export const UserProvider: FC = ({ children }) => {
  const [empty, setEmpty] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  function getUser(): any {
    return useQuery("user", async () => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      const user: UserProps = {
        pfp: data.avatar_url,
        name: data.name,
        joinedAt: joinedDate(data.created_at),
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

      return user;
    });
  }

  function handleSubmit(username: string): void {
    if (username.trim() === "") {
      setEmpty(true);
      return;
    }

    setEmpty(false);
    setUsername(username);
  }

  return (
    <UserContext.Provider value={{ empty, handleSubmit, username, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
