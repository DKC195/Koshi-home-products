import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Product } from "../types/product_list_type";

export default function ProductCard({ product }: { product: Product }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Card className="bg-neutral-100 cursor-pointer w-[300] h-[300] hover:shadow-md transition">
                        <div className="relative w-full h-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain rounded-t p-4"
                            />
                        </div>
                    <CardContent className="p-4">
                        <h1 className="font-medium">{product.name}</h1>
                        {/* <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p> */}
                    </CardContent>
                </Card>
            </DialogTrigger>

            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>{product.name}</DialogTitle>
                </DialogHeader>
                    <div className="relative w-[300] h-[300]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain rounded-t p-4"
                        />
                    </div>

                <p className="text-gray-700 mb-4">{product.description}</p>

                <div className="mb-4">
                    <h4 className="font-semibold mb-1">Available Sizes:</h4>
                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                            <span
                                key={size}
                                className="px-3 py-1 border rounded text-sm bg-muted text-muted-foreground"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>

                <Button onClick={() => setOpen(false)} variant="outline">
                    Close
                </Button>
            </DialogContent>
        </Dialog>
    );
}
