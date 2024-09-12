import { useAtom } from "jotai";
import Accordion from "./components/Accordion";
import AsideWrapper from "./components/AsideWrapper";
import Header from "./components/Header";
import Pxinput from "./components/PxInput";
import TestingBox from "./components/TestingBox";
import { playgroundSettingsAtom, PlaygroundSettings } from "./store/box";
import ColorInput from "./components/ColorInput";
import { BoxShadowAtom, boxShadowAtom } from "./store/boxShadow";

type UpdateBoxShadowProps = {
  index: number;
  e: React.ChangeEvent<HTMLInputElement>;
  prop: keyof BoxShadowAtom;
};

type UpdatePlaygroundSettingsProps = {
  e: React.ChangeEvent<HTMLInputElement>;
  prop: keyof PlaygroundSettings;
};

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

  const updateBoxShadow = ({ e, index, prop }: UpdateBoxShadowProps) => {
    setBoxShadow((prev) => {
      const updatedShadow = [...prev];
      updatedShadow[index] = {
        ...updatedShadow[index],
        [prop]: ["inset", "offsetX", "offsetY", "blur", "spread"].includes(prop)
          ? +e.target.value
          : e.target.value,
      };
      return updatedShadow;
    });
  };

  const updatePlaygroundSettings = ({
    e,
    prop,
  }: UpdatePlaygroundSettingsProps) => {
    setBoxSettings((prev) => ({
      ...prev,
      [prop]: ["width", "height"].includes(prop)
        ? +e.target.value
        : e.target.value,
    }));
  };

  return (
    <div>
      <Header />

      <div className="flex h-[calc(100dvh-90px)]">
        <AsideWrapper className="border-r border-border-color dark:border-border-color-dark">
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
                        updateBoxShadow({ e, index, prop: "offsetX" })
                      }
                    />
                  </Pxinput.Header>
                  <Pxinput.Range
                    value={boxShadow[index].offsetX}
                    onChange={(e) =>
                      updateBoxShadow({ e, index, prop: "offsetX" })
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
                      updateBoxShadow({ e, index, prop: "offsetY" })
                    }
                  />
                </Pxinput>
                <Pxinput>
                  <Pxinput.Header>
                    <Pxinput.Label>Blur</Pxinput.Label>
                    <Pxinput.Size
                      value={boxShadow[index].blur}
                      onChange={(e) =>
                        updateBoxShadow({ e, index, prop: "blur" })
                      }
                    />
                  </Pxinput.Header>
                  <Pxinput.Range
                    value={boxShadow[index].blur}
                    onChange={(e) =>
                      updateBoxShadow({ e, index, prop: "blur" })
                    }
                  />
                </Pxinput>
                <Pxinput>
                  <Pxinput.Header>
                    <Pxinput.Label>Spread</Pxinput.Label>
                    <Pxinput.Size
                      value={boxShadow[index].spread}
                      onChange={(e) =>
                        updateBoxShadow({ e, index, prop: "spread" })
                      }
                    />
                  </Pxinput.Header>
                  <Pxinput.Range
                    value={boxShadow[index].spread}
                    onChange={(e) =>
                      updateBoxShadow({ e, index, prop: "spread" })
                    }
                  />
                </Pxinput>
              </Accordion.Body>
            </Accordion>
          ))}
          <button
            className="w-full border-y border-border-color py-4 text-center dark:border-border-color-dark"
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
        <AsideWrapper className="border-l border-border-color dark:border-border-color-dark">
          <Accordion>
            <Accordion.Title>Box Settings</Accordion.Title>
            <Accordion.Body className="flex flex-col gap-5">
              <Pxinput>
                <Pxinput.Header>
                  <Pxinput.Label>Width</Pxinput.Label>
                  <Pxinput.Size
                    value={boxSettings.width}
                    onChange={(e) =>
                      updatePlaygroundSettings({ e, prop: "width" })
                    }
                  />
                </Pxinput.Header>
                <Pxinput.Range
                  value={boxSettings.width}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "width" })
                  }
                />
              </Pxinput>
              <Pxinput>
                <Pxinput.Header>
                  <Pxinput.Label>Height</Pxinput.Label>
                  <Pxinput.Size
                    value={boxSettings.height}
                    onChange={(e) =>
                      updatePlaygroundSettings({ e, prop: "height" })
                    }
                  />
                </Pxinput.Header>
                <Pxinput.Range
                  value={boxSettings.height}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "height" })
                  }
                />
              </Pxinput>
              <Pxinput>
                <Pxinput.Header>
                  <Pxinput.Label>Border Width</Pxinput.Label>
                  <Pxinput.Size
                    value={boxSettings.borderWidth}
                    onChange={(e) =>
                      updatePlaygroundSettings({ e, prop: "borderWidth" })
                    }
                  />
                </Pxinput.Header>
                <Pxinput.Range
                  value={boxSettings.borderWidth}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "borderWidth" })
                  }
                />
              </Pxinput>
              <Pxinput>
                <Pxinput.Header>
                  <Pxinput.Label>Border Radius</Pxinput.Label>
                  <Pxinput.Size
                    value={boxSettings.borderRadius}
                    onChange={(e) =>
                      updatePlaygroundSettings({ e, prop: "borderRadius" })
                    }
                  />
                </Pxinput.Header>
                <Pxinput.Range
                  value={boxSettings.borderRadius}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "borderRadius" })
                  }
                />
              </Pxinput>
              <ColorInput>
                <ColorInput.Circle
                  value={boxSettings.color}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "color" })
                  }
                />
                <ColorInput.Label>Box Color</ColorInput.Label>
                <ColorInput.Text
                  value={boxSettings.color}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "color" })
                  }
                />
              </ColorInput>
              <ColorInput>
                <ColorInput.Circle
                  value={boxSettings.borderColor}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "borderColor" })
                  }
                />
                <ColorInput.Label>Box Color</ColorInput.Label>
                <ColorInput.Text
                  value={boxSettings.borderColor}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "borderColor" })
                  }
                />
              </ColorInput>
              <ColorInput>
                <ColorInput.Circle
                  value={boxSettings.backgroundColor}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "backgroundColor" })
                  }
                />
                <ColorInput.Label>background Color</ColorInput.Label>
                <ColorInput.Text
                  value={boxSettings.backgroundColor}
                  onChange={(e) =>
                    updatePlaygroundSettings({ e, prop: "backgroundColor" })
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
