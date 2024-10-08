import {
  type ComponentProps,
  type Dispatch,
  type MouseEvent,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IoIosArrowDown } from "react-icons/io";
import cn from "../../utils/cn";

type AccordionContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AccordionContext = createContext<AccordionContextType>({
  isOpen: true,
  setIsOpen: () => {},
});

function Accordion({ ...props }: ComponentProps<"div">) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      <div {...props} />
    </AccordionContext.Provider>
  );
}

function AccordionTitle({ ...props }: ComponentProps<"button">) {
  const { isOpen, setIsOpen } = useContext(AccordionContext);
  const handler = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    if (props["onClick"]) {
      props.onClick(e);
    }
    setIsOpen(!isOpen);
  };
  return (
    <button
      {...props}
      className={cn(
        "flex w-full items-center justify-center gap-3 border-b border-border-color p-4 text-2xl font-medium",
        props.className,
      )}
      onClick={handler}
    >
      <span>{props.children}</span>{" "}
      <span>
        {" "}
        <IoIosArrowDown
          className={`${isOpen ? "-rotate-90" : ""} duration-300`}
        />
      </span>
    </button>
  );
}

function AccordionBody({ ...props }: ComponentProps<"div">) {
  const { isOpen } = useContext(AccordionContext);
  return isOpen ? (
    <div {...props} className={cn("p-4", props.className)} />
  ) : null;
}

AccordionBody.displayName = "AccordionBody";
AccordionTitle.displayName = "AccordionTitle";
Accordion.Title = AccordionTitle;
Accordion.Body = AccordionBody;

export default Accordion;
