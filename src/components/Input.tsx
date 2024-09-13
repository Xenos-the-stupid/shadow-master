import { ComponentProps } from "react";
import cn from "../utils/cn";

export default function Input({
  ...props
}: ComponentProps<"input"> & { outerDivClasses?: string }) {
  return (
    <div className={cn("relative", props.outerDivClasses)}>
      <input
        {...props}
        placeholder={props.type === "number" ? "20" : "rgba(0, 0, 0, 0.1)"}
        className={cn(
          "rounded-sm border border-border-color-dark px-1 outline-offset-4 focus:border-border-color focus:outline-1 dark:border-border-color-dark dark:bg-bg-dark",
          props.className,
        )}
      />
      {props.type === "number" ? (
        <span className="absolute translate-x-[-130%] text-black/40 dark:text-white/40">
          px
        </span>
      ) : null}
    </div>
  );
}
