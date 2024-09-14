import { ComponentProps } from "react";
import cn from "../../utils/cn";
import Input from "./Input";
import { SaveOmit } from "../../types";

function ColorInput({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn("flex items-center gap-4", props.className)}
    />
  );
}

function ColorInputLabel({ ...props }: ComponentProps<"label">) {
  return <label {...props} />;
}

function ColorInputCircle({
  ...props
}: SaveOmit<ComponentProps<"input">, "type">) {
  return (
    <Input type="color" {...props} className={cn("flex", props.className)} />
  );
}

function ColorInputText({ ...props }: ComponentProps<"input">) {
  return (
    <Input
      type="text"
      {...props}
      outerDivClasses="ml-auto"
      className={cn("w-[14ch]", props.className)}
    />
  );
}

ColorInputCircle.displayName = "ColorInputCircle";
ColorInputText.displayName = "ColorInputText";
ColorInputLabel.displayName = "ColorInputLabel";
ColorInput.displayName = "ColorInput";
ColorInput.Label = ColorInputLabel;
ColorInput.Circle = ColorInputCircle;
ColorInput.Text = ColorInputText;

export default ColorInput;
