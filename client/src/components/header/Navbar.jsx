import dark from "./dark.png";
import light from "./light.png";
import { Button } from "../ui/button";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="bg-secondary p-3 flex justify-between sm:justify-around items-center">
      <div className="flex items-center gap-2">
        <Sidebar />
        <img src={theme === "dark" ? dark : light} alt="logo" className="h-4 sm:h-6" />
        <p className="text-lg text-center sm:text-xl font-bold">Nexcent</p>
      </div>
      <div className="hidden md:gap-4 lg:gap-[50px] text-foreground sm:flex md:text-sm items-center">
        <a href="#" className="">
          Home
        </a>
        <a href="#" className="">
          Service
        </a>
        <a href="#" className="">
          Feature
        </a>
        <a href="#" className="">
          Product
        </a>
        <a href="#" className="">
          Testimonial
        </a>
        <a href="#" className="">
          FAQ
        </a>
      </div>
      <div className="flex items-center">
        <button onClick={handleTheme}>
          {theme === "dark" ? (
            <Sun className="hover:bg-background rounded-full w-5 sm:w-10" />
          ) : (
            <Moon className="hover:bg-background rounded-full w-5 sm:w-10" />
          )}
        </button>
        <Button
          variant="ghost"
          className="text-xs sm:text-base text-green-500 hover:text-green-600"
        >
          Login
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-xs sm:text-base bg-green-500 hover:bg-green-600 text-secondary hover:text-secondary"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
