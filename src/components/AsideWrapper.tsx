import { ComponentProps } from "react";
import cn from "../utils/cn";

type AsideWrapperProps = ComponentProps<"aside">;

export default function AsideWrapper({ ...props }: AsideWrapperProps) {
  return (
    <aside
      {...props}
      className={cn(
        "bg-bg-light dark:bg-bg-dark w-[400px] overflow-auto",
        props.className,
      )}
    />
  );
}
