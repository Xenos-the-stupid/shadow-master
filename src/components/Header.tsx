import { FaGithub } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";

export default function Header() {
  return (
    <header className="border-border-color sticky top-0 flex h-[90px] items-center justify-between border-b px-[35px]">
      <h1 className="text-2xl font-medium">Shadow Master</h1>
      <div className="flex items-center gap-[1.625rem]">
        <button>FeedBack</button>
        <a href="#">
          <FaGithub size={25} />
        </a>
        <button>
          <IoMoonSharp size={25} />
        </button>
      </div>
    </header>
  );
}
