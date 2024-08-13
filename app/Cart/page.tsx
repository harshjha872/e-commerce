"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "../hooks";
import { emptyCart } from "@/Store/CartSlice";
import { toast } from "sonner";
import CartItem from "@/components/CartItem";
import Link from "next/link";

const Cart = () => {
  const dispatch = useAppDispatch();

  // Getting all products from the cart
  const products = useAppSelector((state) => state.cartSlice.products);

  return (
    <div className="pt-24">
      {/* Total price calculated if there are items in cart */}
      {products.length > 0 && (
        <div className="text-2xl flex justify-between mb-8 font-black">
          <span> Cart Total</span>{" "}
          <span>
            $
            {products
              .reduce((acc, item) => acc + item.totalPrice, 0)
              .toFixed(2)}
          </span>
        </div>
      )}

      <div className="flex justify-between">
        <span className="text-lg font-bold">Cart</span>
        <div>
          {/* Clear Cart dialog with warning */}
          <AlertDialog>
            <AlertDialogTrigger disabled={products.length === 0}>
              <Button disabled={products.length === 0} variant="outline">
                Clear cart
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will remove all items from
                  your cart
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    dispatch(emptyCart());
                    toast.info("your cart is now empty!");
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* checkout button if there are products */}
          {products.length > 0 && (
            <Link href="/Checkout">
              <Button disabled={products.length == 0} className="ml-4">
                Checkout
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* All items from cart are rendered here */}
      {products.length > 0 ? (
        products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      ) : (
        <div>No products in cart</div>
      )}
    </div>
  );
};

export default Cart;
