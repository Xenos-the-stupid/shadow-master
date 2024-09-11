import type { BoxShadowAtom } from "../store/boxShadow";

export function addPixcels({
  blur,
  color,
  inset,
  offsetX,
  offsetY,
  spread,
}: BoxShadowAtom) {
  const x = offsetX ? `${offsetX}px` : "0px";
  const y = offsetY ? `${offsetY}px` : "0px";
  const b = blur ? `${blur}px` : "0px";
  const s = spread ? `${spread}px` : "0px";
  const c = color ? color : "rgba(0, 0, 0, 0.1)";

  return `${inset ? "inset " : ""}${x} ${y} ${b} ${s} ${c}`;
}
