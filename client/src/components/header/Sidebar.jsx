import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { ClipboardPen, HomeIcon, Menu, MessageCircleQuestion, ShoppingBagIcon, StarIcon, WrenchIcon } from "lucide-react";

const sideList = [
  { name: "Home", href: "#" , icon : HomeIcon },
  { name: "Service", href: "#" , icon : WrenchIcon  },
  { name: "Feature", href: "#" , icon : StarIcon },
  { name: "Product", href: "#" , icon : ShoppingBagIcon },
  { name: "Testimonial", href: "#" , icon : ClipboardPen},
  { name: "FAQ", href: "#" , icon : MessageCircleQuestion},
];

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={16} className="static sm:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="flex px-12 py-16 flex-col">
        {sideList.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-2 p-3 rounded-md hover:bg-foreground hover:text-background"
          >
            <item.icon size={16} /> {item.name}
          </a>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
