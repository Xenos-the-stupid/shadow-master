import { useAtom } from "jotai";
import { boxSettingsAtom } from "../store/box";
import { useRef, useEffect } from "react";

export default function TestingBox() {
  const [boxSettings, setBoxSettings] = useAtom(boxSettingsAtom);
  const boxRef = useRef<HTMLDivElement>(null);
  const resizeObserver = new ResizeObserver((entries) => {
    if (boxRef.current) {
      setBoxSettings((prev) => ({
        ...prev,
        width: entries[0].contentRect.width,
        height: entries[0].contentRect.height,
      }));
    }
  });

  useEffect(() => {
    if (boxRef.current) {
      resizeObserver.observe(boxRef.current);
    }
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: `${boxSettings.width}px`,
        height: `${boxSettings.height}px`,
        backgroundColor: boxSettings.color,
        borderRadius: `${boxSettings.borderRadius}px`,
      }}
      className="group relative resize overflow-auto [&::-webkit-resizer]:hidden"
    >
      <div className="absolute bottom-0 right-0 size-3 bg-slate-300 opacity-0 duration-300 group-hover:opacity-100"></div>
    </div>
  );
}
