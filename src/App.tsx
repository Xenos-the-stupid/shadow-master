import { useAtom } from "jotai";
import Accordion from "./components/Accordion";
import AsideWrapper from "./components/AsideWrapper";
import Header from "./components/Header";
import Pxinput from "./components/PxInput";
import TestingBox from "./components/TestingBox";
import { playgroundSettingsAtom } from "./store/box";
import ColorInput from "./components/ColorInput";
import { boxShadowAtom } from "./store/boxShadow";

export default function App() {
  const [boxSettings, setBoxSettings] = useAtom(playgroundSettingsAtom);
  const [boxShadow, setBoxShadow] = useAtom(boxShadowAtom);

  const onAddShadow = () => {
    setBoxShadow((prev) => [
      ...prev,
      {
        inset: false,
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        color: "#000000",
      },
    ]);
  };

  return (
    <div>
      <Header />

      <div className="flex h-[calc(100dvh-90px)]">
        <AsideWrapper className="dark:border-border-color-dark border-r border-border-color">
          {new Array(boxShadow.length).fill(null).map((_, index) => (
            <Accordion key={index}>
              <Accordion.Title>Box Shadow {index + 1}</Accordion.Title>
              <Accordion.Body className="flex flex-col gap-5">
                <Pxinput>
                  <Pxinput.Header>
                    <Pxinput.Label>OffSet X</Pxinput.Label>
                    <Pxinput.Size
                      value={boxShadow[index].offsetX}
                      onChange={(e) =>
                        setBoxShadow((prev) => {
                          const updatedShadow = [...prev];
                          updatedShadow[index] = {
                            ...updatedShadow[index],
                            offsetX: +e.target.value,
                          };
                          return updatedShadow;
                        })
                      }
                    />
                  </Pxinput.Header>
                  <Pxinput.Range
                    value={boxShadow[index].offsetX}
                    onChange={(e) =>
                      setBoxShadow((prev) => {
                        const updatedShadow = [...prev];
                        updatedShadow[index] = {
                          ...updatedShadow[index],
                          offsetX: +e.target.value,
                        };
                        return updatedShadow;
                      })
                    }
                  />
                </Pxinput>
                <Pxinput>
                  <Pxinput.Header>
                    <Pxinput.Label>OffSet Y</Pxinput.Label>
                    <Pxinput.Size
                      value={boxShadow[index].offsetY}
                      onChange={(e) =>
                        setBoxShadow((prev) => {
                          const updatedShadow = [...prev];
                          updatedShadow[index] = {
                            ...updatedShadow[index],
                            offsetY: +e.target.value,
                          };
                          return updatedShadow;
                        })
                      }
                    />
                  </Pxinput.Header>
                  <Pxinput.Range
                    value={boxShadow[index].offsetY}
                    onChange={(e) =>
                      setBoxShadow((prev) => {
                        const updatedShadow = [...prev];
                        updatedShadow[index] = {
                          ...updatedShadow[index],
                          offsetY: +e.target.value,
                        };
                        return updatedShadow;
                      })
                    }
                  />
                </Pxinput>
                <Pxinput>
                  <Pxinput.Header>
                    <Pxinput.Label>Blur</Pxinput.Label>
                    <Pxinput.Size
                      value={boxShadow[index].blur}
                      onChange={(e) =>
                        setBoxShadow((prev) => {
                          const updatedShadow = [...prev];
                          updatedShadow[index] = {
                            ...updatedShadow[index],
                            blur: +e.target.value,
                          };
                          return updatedShadow;
                        })
                      }
                    />
                  </Pxinput.Header>
                  <Pxinput.Range
                    value={boxShadow[index].blur}
                    onChange={(e) =>
                      setBoxShadow((prev) => {
                        const updatedShadow = [...prev];
                        updatedShadow[index] = {
                          ...updatedShadow[index],
                          blur: +e.target.value,
                        };
                        return updatedShadow;
                      })
                    }
                  />
                </Pxinput>
                <Pxinput>
                  <Pxinput.Header>
                    <Pxinput.Label>Spread</Pxinput.Label>
                    <Pxinput.Size
                      value={boxShadow[index].spread}
                      onChange={(e) =>
                        setBoxShadow((prev) => {
                          const updatedShadow = [...prev];
                          updatedShadow[index] = {
                            ...updatedShadow[index],
                            spread: +e.target.value,
                          };
                          return updatedShadow;
                        })
                      }
                    />
                  </Pxinput.Header>
                  <Pxinput.Range
                    value={boxShadow[index].spread}
                    onChange={(e) =>
                      setBoxShadow((prev) => {
                        const updatedShadow = [...prev];
                        updatedShadow[index] = {
                          ...updatedShadow[index],
                          spread: +e.target.value,
                        };
                        return updatedShadow;
                      })
                    }
                  />
                </Pxinput>
              </Accordion.Body>
            </Accordion>
          ))}
          <button
            className="dark:border-border-color-dark w-full border-y border-border-color py-4 text-center"
            onClick={onAddShadow}
            type="button"
          >
            Add Shadow
          </button>
        </AsideWrapper>
        <main
          className="grid flex-1 place-items-center"
          style={{ backgroundColor: boxSettings.backgroundColor }}
        >
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
              <Pxinput>
                <Pxinput.Header>
                  <Pxinput.Label>Border Width</Pxinput.Label>
                  <Pxinput.Size
                    value={boxSettings.borderWidth}
                    onChange={(e) =>
                      setBoxSettings((prev) => ({
                        ...prev,
                        borderWidth: +e.target.value,
                      }))
                    }
                  />
                </Pxinput.Header>
                <Pxinput.Range
                  value={boxSettings.borderWidth}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      borderWidth: +e.target.value,
                    }))
                  }
                />
              </Pxinput>
              <Pxinput>
                <Pxinput.Header>
                  <Pxinput.Label>Border Radius</Pxinput.Label>
                  <Pxinput.Size
                    value={boxSettings.borderRadius}
                    onChange={(e) =>
                      setBoxSettings((prev) => ({
                        ...prev,
                        borderRadius: +e.target.value,
                      }))
                    }
                  />
                </Pxinput.Header>
                <Pxinput.Range
                  value={boxSettings.borderRadius}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      borderRadius: +e.target.value,
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
                  value={boxSettings.borderColor}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      borderColor: e.target.value,
                    }))
                  }
                />
                <ColorInput.Label>Box Color</ColorInput.Label>
                <ColorInput.Text
                  value={boxSettings.borderColor}
                  onChange={(e) =>
                    setBoxSettings((prev) => ({
                      ...prev,
                      borderColor: e.target.value,
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
