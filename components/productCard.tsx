import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "../types/product_list_type";

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="bg-neutral-100 cursor-pointer hover:shadow-md transition">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-48 object-cover rounded-t p-4"
          />
          <CardContent className="p-4">
            <p className="font-medium">{product.name}</p>
            <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded mb-4"
        />

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