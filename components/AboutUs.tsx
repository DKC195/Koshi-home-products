"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about" className="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4 mt-16">
            <main className="rounded bg-neutral-100 mx-auto my-10 flex w-full max-w-7xl flex-1 flex-col p-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
                    <div className="max-w-md space-y-4">
                        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                            Dedicated to Clean Living
                        </h2>
                        <p className="text-pretty text-neutral-600">
                            At KHP (Koshi Home Products), we take pride in
                            offering a complete range of cleaning solutions
                            designed for both homes and commercial spaces. Our
                            commitment to quality, innovation, and performance
                            has made us a trusted name across Nepal.
                        </p>
                        <p className="text-pretty text-neutral-600">
                            Crafted with premium materials and built with
                            cutting-edge technology, our products are designed
                            to deliver consistent results and long-term
                            durability. Backed by a secure and reliable
                            distribution network, KHP ensures that superior
                            cleaning power is always within reach—whether
                            you&rsquo; re cleaning your home or maintaining a
                            business.
                        </p>
                        <a
                            className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-hidden focus:ring-1 focus:ring-neutral-950"
                            href="/products"
                        >
                            Explore Our Products
                        </a>
                    </div>
                    <Image
                        src="/KHP_Clear.png"
                        alt="KHP Product Display"
                        width={450 / 3}
                        height={253 / 3}
                        className="rounded-md object-cover"
                    />
                </div>
            </main>
        </section>
    );
}
