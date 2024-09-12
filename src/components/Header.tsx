import { FaGithub } from "react-icons/fa";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import useThemeMode from "../hooks/useThemeMode";

export default function Header() {
  const { themeMode, setThemeMode } = useThemeMode();
  return (
    <header className="dark:border-border-color-dark sticky top-0 flex h-[90px] items-center justify-between border-b border-border-color px-[35px] dark:bg-black dark:text-white">
      <h1 className="text-2xl font-medium">Shadow Master</h1>
      <div className="flex items-center gap-[1.625rem]">
        <button>FeedBack</button>
        <a href="#">
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
      </div>
    </header>
  );
}
