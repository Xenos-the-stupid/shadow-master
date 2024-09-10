import AsideWrapper from "./components/AsideWrapper";
import Header from "./components/Header";
import TestingBox from "./components/TestingBox";

export default function App() {
  return (
    <div>
      <Header />

      <div className="flex h-[calc(100dvh-90px)]">
        <AsideWrapper className="border-border-color border-r">
          hello
        </AsideWrapper>
        <main className="grid flex-1 place-items-center bg-[#999]">
          <TestingBox />
        </main>
        <AsideWrapper className="border-border-color border-l">
          world
        </AsideWrapper>
      </div>
    </div>
  );
}
