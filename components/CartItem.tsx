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
    <Card className="grid grid-cols-[100px_1fr_100px] items-center gap-4 p-4 my-4">
      <Image
        src={product.productImage}
        alt="productImage"
        width={100}
        height={100}
        className="rounded-lg object-cover"
        style={{ aspectRatio: "100/100", objectFit: "cover" }}
      />
      <div className="grid gap-1">
        <h3 className="font-medium mb-2">{product.productName}</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => dispatch(decreaseQuantity(product.id))}
          >
            <MinusIcon className="w-4 h-4" />
          </Button>
          <span>{product.quantity}</span>
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
        <div className="mb-2">${product.totalPrice.toFixed(2)}</div>
        <Button
          variant="destructive"
          color="red"
          size="icon"
          onClick={() => dispatch(removeProduct(product.id))}
        >
          <Trash size={17} />
        </Button>
      </div>
    </Card>
  );
};

export default CartItem;
