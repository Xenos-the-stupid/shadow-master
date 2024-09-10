import AsideWrapper from "./components/AsideWrapper";
import Header from "./components/Header";
import { useAtom } from "jotai";
import { boxSettingsAtom } from "./store/box";

export default function App() {
  const [boxSettings, setBoxSettings] = useAtom(boxSettingsAtom);
  return (
    <div>
      <Header />

      <div className="flex h-[calc(100dvh-90px)]">
        <AsideWrapper className="border-border-color border-r">
          hello
        </AsideWrapper>
        <main className="grid flex-1 place-items-center bg-[#999]">
          <div
            style={{
              width: `${boxSettings.width}px`,
              height: `${boxSettings.height}px`,
              backgroundColor: boxSettings.color,
              borderRadius: `${boxSettings.borderRadius}px`,
            }}
          ></div>
        </main>
        <AsideWrapper className="border-border-color border-l">
          world
        </AsideWrapper>
      </div>
    </div>
  );
}
