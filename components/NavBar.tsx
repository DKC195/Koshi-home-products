"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        ["/", "Home"],
        ["#about", "About"],
        ["/products", "Products"],
        ["#contact", "Contact"],
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
        <header className="relative top-0 z-50 w-full bg-[#3D348B] text-white shadow-md sticky">
            <div className="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-white">
                    Koshi Home Products
                </Link>

                {/* Hamburger Icon (Mobile Only) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {menuItems.map(([href, title], index) => (
                            <li key={index}>
                                <Link
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
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

            {/* Mobile Menu (Only when menuOpen is true) */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#3D348B] md:hidden z-40 shadow-md">
                    <ul className="flex flex-col items-start gap-4 px-6 py-4">
                        {menuItems.map(([href, title], index) => (
                            <li key={index}>
                                <Link
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`text-white text-base font-medium ${
                                        isActive(href) ? "text-green-400 font-semibold" : ""
                                    }`}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}