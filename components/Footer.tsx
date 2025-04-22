"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const menuItems: [string, string][] = [
        ["/about", "About"],
        ["/", "Home"],
        ["/products", "Products"],
        // ["#contact", "Contact"],
    ];

    return (
        <footer className="w-full bg-offYellow text-textBlue border-t border-gray-300 mt-16">
            <div className="mx-auto max-w-screen-xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-20">

                {/* Logo & Description */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/KHP_Clear.png"
                            alt="Koshi Home Products Logo"
                            width={80}
                            height={80}
                            className="rounded"
                        />
                        <span className="text-2xl font-semibold">
                            Koshi Home Products
                        </span>
                    </div>
                    {/* Optional description */}
                    {/* <p className="text-sm text-muted-foreground">
                        Handcrafted products straight from the heart of Koshi.
                        Sustainable, local, and made with love.
                    </p> */}
                </div>

                {/* Contact Info */}
                <div id="contact">
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <p className="text-sm">
                        Phone:{" "}
                        <a href="tel:9745478850" className="hover:underline">
                            9745478850
                        </a>
                    </p>
                    <p className="text-sm">
                        Email:{" "}
                        <a
                            href="mailto:koshihomeproducts@gmail.com"
                            className="hover:underline"
                        >
                            koshihomeproducts@gmail.com
                        </a>
                    </p>
                </div>

                {/* Navigation */}
                <div className="text-right">
                    <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                    <div className="flex flex-col gap-2">
                        {menuItems.map(([href, title], index) => (
                            <Link
                                key={index}
                                href={href}
                                className="hover:text-primaryRed"
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-300 text-center text-sm py-4 mt-4">
                &copy; {new Date().getFullYear()} Koshi Home Products. All
                rights reserved.
            </div>
        </footer>
    );
}
