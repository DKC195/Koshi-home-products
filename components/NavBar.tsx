"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Info, ShoppingBag, Mail } from "lucide-react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();

    const menuItems = [
        ["/", "Home", Home],
        ["/products", "Products", ShoppingBag],
        ["#contact", "Contact", Mail],
        ["#about", "About", Info],
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
        if (href.startsWith("#")) {
            const sectionId = href.split("#")[1];
            return activeSection === sectionId;
        }
        return pathname === href;
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden md:block top-0 z-50 w-full bg-[#3D348B] text-white shadow-md sticky">
                <div className="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4">
                    <Link href="/" className="text-xl font-bold text-white">
                        Koshi Home Products
                    </Link>

                    <nav>
                        <ul className="flex gap-8">
                            {menuItems.map(([href, title], index) => (
                                <li key={index}>
                                    <Link
                                        href={href}
                                        className={`
                                            relative inline-block text-white text-base font-medium tracking-wide
                                            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                                            after:bg-white after:transition-all after:duration-300
                                            ${
                                                isActive(href)
                                                    ? "after:w-full font-semibold text-green-400"
                                                    : "after:w-0 hover:after:w-full"
                                            }
                                        `}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="md:hidden top-0 z-50 w-full bg-[#3D348B] text-white shadow-md sticky">
                <div className="flex items-center justify-center px-6 py-4">
                    <Link href="/" className="text-lg font-bold text-white">
                        Koshi Home Products
                    </Link>
                </div>
            </header>

            {/* Mobile Bottom Tab Bar */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#3D348B] border-t border-gray-700 z-50 pb-safe">
                <nav className="flex justify-around items-center">
                    {menuItems.map(([href, title, Icon], index) => (
                        <Link
                            key={index}
                            href={href}
                            className={`flex flex-col items-center justify-center w-full py-3 transition-colors ${
                                isActive(href)
                                    ? "text-green-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            <Icon size={24} />
                            <span className="text-xs mt-1">{title}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Spacer for mobile to prevent content overlap */}
            {/* <div className="md:hidden h-36" /> */}
        </>
    );
}
