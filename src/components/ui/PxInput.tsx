import { ComponentProps } from "react";
import Input from "./Input";
import cn from "../../utils/cn";
import { SaveOmit } from "../../types";

type InputType = SaveOmit<ComponentProps<"input">, "type">;

function Pxinput({ ...props }: ComponentProps<"div">) {
  return <div {...props} />;
}
function Header({ ...props }: ComponentProps<"header">) {
  return (
    <header
      {...props}
      className={cn("flex justify-between", props.className)}
    />
  );
}

function SizeInput({ ...props }: InputType) {
  return <Input {...props} type="number" className="w-[6ch]" />;
}

function Label({ ...props }: ComponentProps<"label">) {
  return <label {...props} className="font-medium" />;
}

function RangeInput({ ...props }: InputType) {
  return <Input {...props} type="range" max={400} min={0} />;
}

Header.displayName = "Header";
Label.displayName = "Label";
RangeInput.displayName = "Range";
SizeInput.displayName = "SizeInput";

Pxinput.Header = Header;
Pxinput.Label = Label;
Pxinput.Range = RangeInput;
Pxinput.Size = SizeInput;

export default Pxinput;
