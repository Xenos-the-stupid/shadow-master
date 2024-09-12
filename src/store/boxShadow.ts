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
    offsetX: 15,
    offsetY: 15,
    blur: 40,
    spread: 0,
    color: "rgba(0, 0, 0, 0.3)",
  },
]);
