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
          "dark:border-border-color-dark rounded-sm border border-black/20 px-2 outline-offset-4 focus:border-border-color focus:outline-1 dark:bg-black",
          props.className,
        )}
      />
      {props.type === "number" ? (
        <span className="absolute translate-x-[-120%] text-black/40 dark:text-white/40">
          px
        </span>
      ) : null}
    </div>
  );
}
