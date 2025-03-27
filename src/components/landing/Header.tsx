
import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4364d1fdc705ef009187da087135ecb0628e1dde?placeholderIfAbsent=true"
            alt="Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white/90 focus:bg-white/10 focus:text-white/90 focus:outline-none"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Take the Pledge Button */}
        <div className="hidden md:block">
          <Button className="bg-[rgba(92,183,105,1)] hover:bg-[rgba(72,163,85,1)] text-white">
            Take the Pledge
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-white py-2 hover:text-[rgba(92,183,105,1)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="bg-[rgba(92,183,105,1)] hover:bg-[rgba(72,163,85,1)] text-white mt-2 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Take the Pledge
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
