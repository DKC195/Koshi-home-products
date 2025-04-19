import Image from "next/image";
import ProductList from "@/components/ProductList";
import { products } from "@/app/products/product_list";

export default function Home() {
    return (
        <>
            <section className="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4">
                <main className="rounded bg-neutral-100 mx-auto flex w-full max-w-7xl flex-1 flex-col p-4 py-16 sm:px-6 lg:px-8">
                        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
                            <div className="max-w-md space-y-4">
                                <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                                    Crafting comfort, inspiring homes.
                                </h2>
                                <p className="text-pretty text-neutral-600">
                                    Koshi Home Products.
                                </p>
                                <a
                                    className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-hidden focus:ring-1 focus:ring-neutral-950"
                                    href="/products"
                                >
                                    Shop Now
                                </a>
                            </div>
                            <Image
                                src="/KHP_Clear.png"
                                alt="Image"
                                width={450 / 3}
                                height={253 / 3}
                                className="rounded-md object-cover"
                            />
                        </div>
                </main>
            </section>

            <section className="mx-auto max-w-screen-xl flex items-center justify-between px-6">
                <main className="p-4">
                    <h1 className="text-2xl font-bold text-center p-4">
                        Our Best Seller
                    </h1>
                    <ProductList products={products} />
                </main>
            </section>
        </>
    );
}
