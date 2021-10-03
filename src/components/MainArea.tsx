import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import UserData from "./UserData/index";

export default function MainArea() {
  const { getUser } = useContext(UserContext);
  const { data: user, status, isFetching } = getUser();

  if (isFetching || status === "loading") return null;

  if (user.message === "Not Found") return <h1>Not Found...</h1>;

  return <UserData user={user} />;
}
