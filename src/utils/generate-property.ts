import { BoxShadowAtom } from "../store/boxShadow";
import { addPixcels } from "./add-pixcels";

export default function generateProperty(props: BoxShadowAtom[]) {
  const generated = props.map((prop) => addPixcels(prop)).join(", ");

  return `box-shadow: ${generated};`;
}
