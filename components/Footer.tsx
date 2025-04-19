"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const menuItems: [string, string][] = [
        ["/", "Home"],
        // ["/about", "About"],
        ["/products", "Products"],
        // ["/contact", "Contact"],
    ];

    return (
        <footer className="w-full bg-offYellow text-textBlue border-t border-gray-300 mt-16">
            <div className="mx-auto max-w-screen-xl px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
                
                <div></div>

                {/* Logo & Description */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/KHP_Clear.png" // Replace with your logo path
                            alt="Koshi Home Products Logo"
                            width={80}
                            height={80}
                            className="rounded"
                        />
                        <span className="text-2xl font-semibold">
                            Koshi Home Products
                        </span>
                    </div>
                    {/* <p className="text-sm text-muted-foreground">
                        Handcrafted products straight from the heart of Koshi.
                        Sustainable, local, and made with love.
                    </p> */}
                </div>

                <div></div>

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

                {/* Contact / Info */}
                <div>
                    {/* <h4 className="text-lg font-semibold mb-4">Contact</h4> */}
                    {/* <p className="text-sm">Email: info@koshiproducts.com</p> */}
                    {/* <p className="text-sm">Phone: +977-98XXXXXXXX</p> */}
                    {/* <p className="text-sm">Location: Biratnagar, Nepal</p> */}
                    {/* Add social icons here if needed */}
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
