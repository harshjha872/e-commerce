import { singleProduct } from "@/Store/CartSlice";
import { memo } from "react";

const SingleCheckoutCard = ({ product }: { product: singleProduct }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div>
          <h4 className="font-medium">{product.productName}</h4>
          <p className="text-muted-foreground text-sm text-ellipsis overflow-hidden line-clamp-1 w-[200px]">
            {product.productDescription}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">${product.totalPrice}</p>
        <p className="text-muted-foreground text-sm">Qty: {product.quantity}</p>
      </div>
    </div>
  );
};

export default memo(SingleCheckoutCard);
