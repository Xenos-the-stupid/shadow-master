import { atom } from "jotai";

export const playgroundSettingsAtom = atom({
  width: 200,
  height: 200,
  color: "#ffffff",
  borderWidth: 2,
  borderRadius: 7,
  backgroundColor: "#333333",
  borderColor: "#00ffff",
});
