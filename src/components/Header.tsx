import { FaGithub } from "react-icons/fa";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import useThemeMode from "../hooks/useThemeMode";
import generateProperty from "../utils/generate-property";
import { boxShadowAtom } from "../store/boxShadow";
import { useAtom } from "jotai";
import toast from "react-hot-toast";

export default function Header() {
  const { themeMode, setThemeMode } = useThemeMode();
  const [boxShadow] = useAtom(boxShadowAtom);

  const copyGeneratedCode = () => {
    const generatedCode = generateProperty(boxShadow);
    navigator.clipboard.writeText(generatedCode);
    toast.success("Copied to clipboard!", {
      className:
        "dark:bg-bg-dark dark:text-primary-text shadow-md dark:text-primary-text-dark dark:shadow-white/10",
    });
  };

  return (
    <header className="sticky top-0 flex h-[90px] items-center justify-between border-b border-border-color px-[35px] dark:border-border-color-dark dark:bg-[#121212] dark:text-white">
      <h1 className="text-2xl font-medium">Shadow Master</h1>
      <div className="flex items-center gap-[1.625rem]">
        <a
          href="https://github.com/Xenos-the-stupid/shadow-master"
          target="_blank"
        >
          <FaGithub size={25} />
        </a>
        <button
          onClick={() =>
            setThemeMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {themeMode === "light" ? (
            <IoMoonSharp size={25} />
          ) : (
            <IoSunny size={25} />
          )}
        </button>
        <button
          className="rounded-xl bg-black px-4 py-2 font-medium text-white dark:bg-white dark:text-black"
          onClick={copyGeneratedCode}
        >
          Copy Code
        </button>
      </div>
    </header>
  );
}
