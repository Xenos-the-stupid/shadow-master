import { ComponentProps } from "react";
import Input from "./Input";
import ColorInput from "./ColorInput";
import cn from "../../utils/cn";
import { SaveOmit } from "../../types";

function CheckBox({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn("flex items-center gap-4", props.className)}
    />
  );
}

function CheckBoxLabel({ ...props }: ComponentProps<"label">) {
  return <ColorInput.Label {...props} />;
}

function CheckBoxInput({
  ...props
}: SaveOmit<ComponentProps<"input">, "type">) {
  return (
    <div
      className={cn(
        "size-5 rounded-md border border-border-color dark:border-border-color-dark",
        props.checked && "bg-[#AED6F1]",
        props.className,
      )}
    >
      <Input {...props} type="checkbox" className="opacity-0" />
    </div>
  );
}

CheckBoxInput.displayName = "CheckBoxInput";
CheckBoxLabel.displayName = "CheckBoxLabel";
CheckBox.Label = CheckBoxLabel;
CheckBox.Input = CheckBoxInput;
export default CheckBox;
