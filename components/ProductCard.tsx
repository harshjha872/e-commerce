import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { CirclePlus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addproduct } from "@/Store/CartSlice";
import { toast } from "sonner";

const ProductCard = ({
  id,
  productImage,
  productName,
  productDescription,
  productPrice,
}: {
  id: number;
  productImage: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}) => {
  const dispatch = useDispatch();

  //dispatch action to add product to cart
  const addProductToCart = () => {
    dispatch(
      addproduct({
        id,
        productImage,
        productName,
        productDescription,
        productPrice,
        quantity: 1,
        totalPrice: productPrice,
      })
    );
    toast.success("product added to cart");
  };

  return (
    <div className="bg-background rounded-lg shadow-md overflow-hidden">
      <Link href="#" prefetch={false}>
        <Image
          src={productImage}
          alt="product image here"
          width={400}
          height={400}
          className="w-full h-48 object-cover"
          style={{ aspectRatio: "400/400", objectFit: "cover" }}
        />
      </Link>
      <div className="flex flex-col justify-between p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{productName}</h3>
          <span className="text-muted-foreground text-ellipsis overflow-hidden line-clamp-2">
            {productDescription}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">${productPrice}</span>

          <CirclePlus
            onClick={addProductToCart}
            size={26}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
