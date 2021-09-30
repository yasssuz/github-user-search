import dayjs from "dayjs";

export function joinedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formatedDate = `Joined ${date.format("DD MMM YYYY")}`;

  return formatedDate;
}
