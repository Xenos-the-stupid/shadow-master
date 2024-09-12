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
  borderWidth: 2,
  borderRadius: 7,
  backgroundColor: "#333333",
  borderColor: "#00ffff",
});
