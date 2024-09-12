import { useAtom } from "jotai";
import Accordion from "./components/Accordion";
import AsideWrapper from "./components/AsideWrapper";
import Header from "./components/Header";
import Pxinput from "./components/PxInput";
import TestingBox from "./components/TestingBox";
import { playgroundSettingsAtom } from "./store/box";
import ColorInput from "./components/ColorInput";
import { boxShadowAtom } from "./store/boxShadow";
import { useState } from "react";

export default function App() {
  const [boxSettings, setBoxSettings] = useAtom(playgroundSettingsAtom);
  const [boxShadow, setBoxShadow] = useAtom(boxShadowAtom);
  const [numberOfShadow, setNumberOfShadow] = useState(1);

  return (
    <div>
      <Header />

      <div className="flex h-[calc(100dvh-90px)]">
        <AsideWrapper className="dark:border-border-color-dark border-r border-border-color">
          {new Array(numberOfShadow).fill(0).map((_, index) => (
            <Accordion>
              <Accordion.Title>Box Shadow 1</Accordion.Title>
              <Accordion.Body>
                <Pxinput>
                  <Pxinput.Header>
                    <Pxinput.Label>OffSet X</Pxinput.Label>
                    <Pxinput.Size
                      value={boxShadow[index].offsetX || 0}
                      onChange={(e) =>
                        setBoxShadow((prev) => ({
                          ...prev,
                          offsetX: +e.target.value,
                        }))
                      }
                    />
                  </Pxinput.Header>
                  <Pxinput.Range
                    value={boxShadow[index].offsetX || 0}
                    onChange={(e) =>
                      setBoxShadow((prev) => ({
                        ...prev,
                        offsetX: +e.target.value,
                      }))
                    }
                  />
                </Pxinput>
              </Accordion.Body>
            </Accordion>
          ))}
        </AsideWrapper>
        <main className="grid flex-1 place-items-center" style={{backgroundColor: boxSettings.backgroundColor}}>
          <TestingBox />
        </main>
        <AsideWrapper className="dark:border-border-color-dark border-l border-border-color">
          <Accordion>
            <Accordion.Title>Box Settings</Accordion.Title>
            <Accordion.Body className="flex flex-col gap-5">
              <Pxinput>
                <Pxinput.Header>
                  <Pxinput.Label>Width</Pxinput.Label>
                  <Pxinput.Size
                    value={boxSettings.width}
                    onChange={(e) =>
                      setBoxSettings((prev) => ({
                        ...prev,
                        width: +e.target.value,
                      }))
                    }
                  />
                </Pxinput.Header>
                <Pxinput.Range
                  value={boxSettings.width}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      width: +e.target.value,
                    }))
                  }
                />
              </Pxinput>
              <Pxinput>
                <Pxinput.Header>
                  <Pxinput.Label>Height</Pxinput.Label>
                  <Pxinput.Size
                    value={boxSettings.height}
                    onChange={(e) =>
                      setBoxSettings((prev) => ({
                        ...prev,
                        height: +e.target.value,
                      }))
                    }
                  />
                </Pxinput.Header>
                <Pxinput.Range
                  value={boxSettings.height}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      height: +e.target.value,
                    }))
                  }
                />
              </Pxinput>
              <ColorInput>
                <ColorInput.Circle
                  value={boxSettings.color}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      color: e.target.value,
                    }))
                  }
                />
                <ColorInput.Label>Box Color</ColorInput.Label>
                <ColorInput.Text
                  value={boxSettings.color}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      color: e.target.value,
                    }))
                  }
                />
              </ColorInput>
              <ColorInput>
                <ColorInput.Circle
                  value={boxSettings.backgroundColor}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      backgroundColor: e.target.value,
                    }))
                  }
                />
                <ColorInput.Label>background Color</ColorInput.Label>
                <ColorInput.Text
                  value={boxSettings.backgroundColor}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      backgroundColor: e.target.value,
                    }))
                  }
                />
              </ColorInput>
            </Accordion.Body>
          </Accordion>
        </AsideWrapper>
      </div>
    </div>
  );
}
