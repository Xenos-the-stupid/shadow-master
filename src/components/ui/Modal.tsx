import {
  type ComponentProps,
  createContext,
  type ReactNode,
  type RefObject,
  useContext,
  useRef,
} from "react";
import cn from "../../utils/cn";
import { IoMdClose } from "react-icons/io";

const ModalContext = createContext<RefObject<HTMLDialogElement> | null>(null);

function Modal({ ...props }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalContext.Provider value={dialogRef}>
      {props.children}
    </ModalContext.Provider>
  );
}

function ModalTitle({ ...props }: ComponentProps<"h1">) {
  return (
    <h1 {...props} className={cn("text-3xl font-semibold", props.className)} />
  );
}

function ModalBody({ ...props }: ComponentProps<"dialog">) {
  const dialogRef = useContext(ModalContext);

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "relative w-full max-w-[500px] space-y-5 rounded-md bg-bg-light p-8 backdrop:bg-black/50 dark:bg-bg-dark dark:text-primary-text-dark",
        props.className,
      )}
      {...props}
    >
      {props.children}
      <div>
        <button
          onClick={() => dialogRef!.current?.close()}
          className="absolute right-0 top-0 size-8 rounded-[inherit] bg-red-500"
        >
          <IoMdClose size={20} />
        </button>
      </div>
    </dialog>
  );
}
function ModalTrigger({ ...props }: ComponentProps<"button">) {
  const dialogRef = useContext(ModalContext);
  return <button {...props} onClick={() => dialogRef!.current?.showModal()} />;
}

ModalTitle.displayName = "ModalTitle";
ModalBody.displayName = "ModalBody";
ModalTrigger.displayName = "ModalTrigger";
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Trigger = ModalTrigger;

export default Modal;
