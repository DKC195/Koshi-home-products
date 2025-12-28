"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export default function FullScreenBackgroundCarousel() {
    const images = [
        "/carousel/everest.jpg",
        "/carousel/village.jpeg",
        "/carousel/pashupati.jpeg",
        "/carousel/erc.jpeg",
    ];

    return (
        <div className="relative w-full h-[70vh] overflow-hidden">
            
            <Carousel
                className="absolute inset-0 w-full h-[70vh] z-0"
                opts={{
                    loop: true,
                    align: "center",
                    containScroll: "trimSnaps", // Crucial for removing potential blank space
                }}
                plugins={[
                    Autoplay({
                        delay: 10000,
                        stopOnInteraction: false,
                    }),
                ]}
            >
                <CarouselContent className="h-[70vh] flex items-stretch">
                    {" "}
                    {/* Use flex and items-stretch */}
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    className="object-cover object-center"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Foreground Content */}
            <div className="relative z-20 flex items-center justify-center h-full w-full px-4 overflow-hidden">
                <div className="max-h-full overflow-hidden flex flex-col justify-center items-center text-center space-y-4">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white">
                        Crafting comfort, inspiring homes.
                    </h1>
                    <p className="text-2xl sm:text-2xl font-bold text-neutral-200">
                        Koshi Home Products.
                    </p>
                    <div>
                        <a
                            href="/products"
                            className="inline-flex items-center justify-center h-12 px-8 mx-2 rounded-full bg-[#3D348B] text-white font-semibold hover:bg-black transition"
                        >
                            Shop Now
                        </a>
                        <a
                            href="https://wa.me/9779811368689"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-12 px-8 mx-2 rounded-full bg-green-500 text-black font-semibold hover:bg-green-700 transition mt-2"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
