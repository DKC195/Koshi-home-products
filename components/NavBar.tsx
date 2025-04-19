"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const menuItems = [
    ["/", "Home"],
    // ["/about", "About"],
    ["/products", "Products"],
    // ["/contact", "Contact"],
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href && !activeSection;
    if (href.startsWith("/#")) {
      const sectionId = href.split("#")[1];
      return activeSection === sectionId;
    }
    return pathname === href;
  };

  return (
    <header className="top-0 z-50 w-full bg-offYellow text-textBlue shadow-sm">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="text-lg font-semibold">
          Koshi Home Products
        </Link>

        {/* Right: Navigation Menu */}
        <div className="flex-1 flex justify-end">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {menuItems.map(([href, title], index) => (
                <NavigationMenuItem key={index}>
                  <Link
                    href={href}
                    className={`${navigationMenuTriggerStyle()} ${
                      isActive(href)
                        ? "text-primaryPurple border-b-2 border-primaryPurple"
                        : "hover:text-primaryRed"
                    }`}
                  >
                    {title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}