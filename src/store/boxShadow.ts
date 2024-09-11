import { atom } from "jotai";

export type BoxShadowAtom = {
  inset?: boolean;
  offsetX?: number;
  offsetY?: number;
  blur?: number;
  spread?: number;
  color?: string;
};

export const boxShadowAtom = atom<BoxShadowAtom[]>([
  {
    inset: false,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    spread: 0,
    color: "#000000",
  },
]);
