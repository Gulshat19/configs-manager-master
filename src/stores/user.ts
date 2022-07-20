import { atom } from "recoil";

export const userState = atom({
  key: "User",
  default: null as User | null,
});
