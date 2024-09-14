import { FaGithub } from "react-icons/fa";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import useThemeMode from "../hooks/useThemeMode";
import generateProperty from "../utils/generate-property";
import { boxShadowAtom } from "../store/boxShadow";
import { useAtom } from "jotai";
import toast from "react-hot-toast";
import Modal from "./ui/Modal";
import Input from "./ui/Input";
import { useState } from "react";
import TextAria from "./ui/TextAria";

export default function Header() {
  const { themeMode, setThemeMode } = useThemeMode();
  const [boxShadow] = useAtom(boxShadowAtom);
  const [feedBack, setFeedBack] = useState({ title: "", message: "" });

  const copyGeneratedCode = () => {
    const generatedCode = generateProperty(boxShadow);
    navigator.clipboard.writeText(generatedCode);
    toast.success("Copied to clipboard!", {
      className:
        "dark:bg-black dark:text-primary-text shadow-md dark:text-primary-text-dark dark:shadow-white/30",
    });
  };

  const submit = async () => {
    try {
      const res = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedBack),
      });
      if (res.status !== 200) throw new Error("Something went wrong");
      toast.success("Thank you for your feedback", {
        className:
          "dark:bg-black dark:text-primary-text shadow-md dark:text-primary-text-dark dark:shadow-white/30",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      toast.error("Something went wrong", {
        className:
          "dark:bg-black dark:text-primary-text shadow-md dark:text-primary-text-dark dark:shadow-white/30",
      });
    }
  };

  return (
    <header className="sticky top-0 flex h-[90px] items-center justify-between border-b border-border-color px-[35px] dark:border-border-color-dark dark:bg-[#121212] dark:text-white">
      <h1 className="text-2xl font-medium">Shadow Master</h1>
      <div className="flex items-center gap-[1.625rem]">
        <Modal>
          <Modal.Trigger>FeedBack</Modal.Trigger>
          <Modal.Body>
            <Modal.Title>Your FeedBack</Modal.Title>
            <p className="text-sm">
              please fill out this form if you have any feedback about things we
              should add, fixes we could fix
            </p>
            <Input
              placeholder="Title"
              value={feedBack.title}
              onChange={(e) =>
                setFeedBack({ ...feedBack, title: e.target.value })
              }
              className="w-full rounded-md px-4 py-2 text-xl focus-within:outline-none"
            />
            <TextAria
              placeholder="Message"
              onChange={(e) =>
                setFeedBack({ ...feedBack, message: e.target.value })
              }
            />
            <div className="flex justify-end">
              <button
                onClick={submit}
                className="rounded-md bg-[#AED6F1] px-5 py-3 dark:text-black"
              >
                Submit
              </button>
            </div>
          </Modal.Body>
        </Modal>

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
