import { type ComponentProps } from "react";
import cn from "../utils/cn";

type AsideWrapperProps = ComponentProps<"aside"> & {
  isOpen: boolean;
};

export default function AsideWrapper({ isOpen, ...props }: AsideWrapperProps) {
  return (
    <aside
      {...props}
      className={cn(
        "w-[350px] overflow-auto bg-bg-light dark:bg-bg-dark",
        isOpen ? "max-md:w-fit" : "max-md:w-0",
        props.className,
      )}
    >
      {props.children}
    </aside>
  );
}
