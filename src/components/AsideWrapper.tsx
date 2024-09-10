import { ComponentProps } from "react";
import cn from "../utils/cn";

type AsideWrapperProps = ComponentProps<"aside">;

export default function AsideWrapper({ ...props }: AsideWrapperProps) {
  return (
    <aside
      {...props}
      className={cn("w-[400px] bg-white dark:bg-black", props.className)}
    />
  );
}
