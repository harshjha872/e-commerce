import { Card } from "@/components/ui/card";
import { MinusIcon, PlusIcon, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "../app/hooks";
import Image from "next/image";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
  singleProduct,
} from "@/Store/CartSlice";

const CartItem = ({ product }: { product: singleProduct }) => {
  const dispatch = useAppDispatch();
  return (
    <Card className="grid grid-cols-[200px_1fr] items-center gap-4 p-4 my-4 pr-12">
      <Image
        src={product.productImage}
        alt="productImage"
        width={300}
        height={300}
        className="rounded-lg object-cover"
        style={{ aspectRatio: "300/300", objectFit: "cover" }}
      />
      <div className="flex flex-wrap justify-between">
        <div className="grid gap-1">
          <h3 className="font-medium mb-2">{product.productName}</h3>
          <div className="flex items-center gap-2">
            {/* Decrease quantity */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => dispatch(decreaseQuantity(product.id))}
            >
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span>{product.quantity}</span>

            {/* Increase quantity */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => dispatch(increaseQuantity(product.id))}
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="text-right font-medium">
          {/* total price of that product */}
          <div className="mb-2">${product.totalPrice.toFixed(2)}</div>

          {/* Remove item from cart */}
          <Button
            variant="destructive"
            color="red"
            size="icon"
            onClick={() => dispatch(removeProduct(product.id))}
          >
            <Trash size={17} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
