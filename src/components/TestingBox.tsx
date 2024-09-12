import { useAtom } from "jotai";
import { playgroundSettingsAtom } from "../store/box";
import { useRef, useEffect } from "react";
import { addPixcels } from "../utils/add-pixcels";
import { boxShadowAtom } from "../store/boxShadow";

export default function TestingBox() {
  const [boxSettings, setBoxSettings] = useAtom(playgroundSettingsAtom);
  const boxRef = useRef<HTMLDivElement>(null);
  const initialMouseX = useRef(0);
  const isMouseDown = useRef(false);
  const [boxShadow] = useAtom(boxShadowAtom);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown.current = true;
      initialMouseX.current = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMouseDown.current && boxRef.current) {
        setBoxSettings((prev) => {
          const newBorderRadius =
            prev.borderRadius - (e.clientX - initialMouseX.current) * 0.01;
          return {
            ...prev,
            borderRadius: Math.max(0, newBorderRadius),
          };
        });
      }
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (boxRef.current) {
        setBoxSettings((prev) => ({
          ...prev,
          width: entries[0].contentRect.width,
          height: entries[0].contentRect.height,
        }));
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (boxRef.current) {
      resizeObserver.observe(boxRef.current);
      boxRef.current.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (boxRef.current) {
        resizeObserver.unobserve(boxRef.current);
        boxRef.current.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [setBoxSettings]);

  return (
    <div
      ref={boxRef}
      style={{
        width: `${boxSettings.width}px`,
        height: `${boxSettings.height}px`,
        backgroundColor: boxSettings.color,
        borderRadius: `${boxSettings.borderRadius}px`,
        boxShadow: boxShadow.map((prop) => addPixcels(prop)).join(", "),
      }}
      className="group relative resize overflow-auto [&::-webkit-resizer]:hidden"
    >
      <div className="absolute bottom-0 right-0 size-3 bg-slate-300 opacity-0 duration-300 group-hover:opacity-100" />
    </div>
  );
}
