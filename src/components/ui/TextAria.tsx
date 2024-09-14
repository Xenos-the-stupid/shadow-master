import { ComponentProps } from "react";
import cn from "../../utils/cn";

export default function TextAria({ ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-md border border-border-color px-4 py-2 focus-within:outline-none dark:border-border-color-dark dark:bg-bg-dark",
        props.className,
      )}
    />
  );
}
