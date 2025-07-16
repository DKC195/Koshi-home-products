"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    const menuItems: [string, string][] = [
        ["/about", "About"],
        ["/", "Home"],
        ["/products", "Products"],
    ];

    return (
        <footer className="w-full bg-black text-white border-t border-gray-300 mt-16">
            <div className="mx-auto max-w-screen-xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-20">
                {/* Logo & Description */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-5 m-1 bg-white rounded-lg">
                            <Image
                                src="/KHP_Clear.png"
                                alt="Koshi Home Products Logo"
                                width={320}
                                height={320}
                                className="rounded sm:w-32 sm:h-32 w-24 h-24 object-cover"
                            />
                        </div>
                        <span className="text-2xl font-semibold">
                            Koshi Home Products
                        </span>
                    </div>
                </div>

                {/* Contact Info & Social */}
                <div id="contact" className="flex flex-col gap-4">
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Contact</h4>
                        <p className="text-sm">
                            Phone:{" "}
                            <a
                                href="tel:9745478850"
                                className="hover:underline"
                            >
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

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">
                            Follow Us
                        </h4>
                        <div className="flex gap-4 text-white text-xl">
                            <a
                                href="https://www.facebook.com/people/Koshi-Home-Products-Pvt-Ltd/61575118653189/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/koshihomeproducts/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500"
                            >
                                <FaInstagram />
                            </a>
                            {/* <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <FaLinkedinIn />
                            </a> */}
                        </div>
                    </div>
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