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

const Cart = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cartSlice.products);

  return (
    <div className="pt-24">
      <div className="flex justify-between">
        <span className="text-lg font-bold">Cart</span>
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
      </div>
      {products.length > 0 &&
        products.map((product) => <CartItem product={product} />)}
    </div>
  );
};

export default Cart;
