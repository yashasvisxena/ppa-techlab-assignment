import dark from "../header/dark.png";
import light from "../header/light.png";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import useThemeStore from "@/store/Theme.js";
const Footer = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <footer className="bg-foreground text-background p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src={theme === "dark" ? light : dark}
            alt="Nexcent Logo"
            className="mb-4"
          />
          <p>Copyright © 2024 Nexcent ltd. All rights reserved</p>
          <div className="container mx-auto mt-8 flex justify-center space-x-4">
            <a href="#instagram" className=" ">
              <Instagram />
            </a>
            <a href="#facebook" className=" ">
              <Facebook />
            </a>
            <a href="#twitter" className=" ">
              <Twitter />
            </a>
            <a href="#youtube" className=" ">
              <Youtube />
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-background mb-4 font-bold text-lg">Company</h5>
          <ul className="space-y-4">
            <li>
              <a href="#about" className="">
                About us
              </a>
            </li>
            <li>
              <a href="#blog" className="">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="">
                Contact us
              </a>
            </li>
            <li>
              <a href="#pricing" className="">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" className="">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-background mb-4 font-bold text-lg">Support</h5>
          <ul className="space-y-4">
            <li>
              <a href="#help" className="">
                Help center
              </a>
            </li>
            <li>
              <a href="#terms" className="">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#legal" className="">
                Legal
              </a>
            </li>
            <li>
              <a href="#privacy" className="">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#status" className="">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-background mb-4">Stay up to date</h5>
          <form>
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 w-full bg-primary border border-gray-700 rounded mb-4 text-background"
            />
            <button
              type="submit"
              className="p-2 bg-green-600 text-background rounded w-full hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
