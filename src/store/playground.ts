import { atom } from "jotai";

export type PlaygroundSettings = {
  width: number;
  height: number;
  color: string;
  borderWidth: number;
  borderRadius: number;
  backgroundColor: string;
  borderColor: string;
};

export const playgroundSettingsAtom = atom<PlaygroundSettings>({
  width: 200,
  height: 200,
  color: "#ffffff",
  borderWidth: 0,
  borderRadius: 7,
  backgroundColor: "#dedede",
  borderColor: "#00ffff",
});
