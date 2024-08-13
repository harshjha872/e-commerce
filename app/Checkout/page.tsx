"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../hooks";
import SingleCheckoutCard from "@/components/SingleCheckoutCard";
import { toast } from "sonner";
import { emptyCart } from "@/Store/CartSlice";
import { useAppDispatch } from "../hooks";
import Confetti from "react-dom-confetti";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const products = useAppSelector((state) => state.cartSlice.products);
  const dispatch = useAppDispatch();
  const [confetti, setConfetti] = useState(false);

  //  calculating total price of cart items
  const totalPrice = useMemo(() => {
    return products.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
  }, [products]);

  //  on placing order
  const onPlaceOrderHandler = () => {
    setConfetti(true);
    toast.success("order placed");
    setTimeout(() => {
      router.push("/");
      dispatch(emptyCart());
    }, 3000);
  };

  return (
    <div className="grid gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6 pt-28 justify-center">
      <Confetti active={confetti} config={{ elementCount: 300, spread: 300 }} />
      <div className="grid gap-6 md:w-[500px] w-400px">
        {/* card for displaying all the items in cart, quantity and prices with total price as well */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {products.length > 0 &&
                products.map((product) => (
                  <SingleCheckoutCard product={product} />
                ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <p className="text-muted-foreground">Subtotal</p>
            <p className="font-medium">${totalPrice}</p>
          </CardFooter>
        </Card>

        {/* card for added taxs and shipping cost */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping &amp; Taxes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Item total</p>
                <p className="font-medium">${totalPrice}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Shipping</p>
                <p className="font-medium">$5.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Tax</p>
                <p className="font-medium">$3.44</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <p className="text-muted-foreground">Total</p>
            <p className="font-medium text-primary">
              ${(+totalPrice + +8.44).toFixed(2)}
            </p>
          </CardFooter>
        </Card>

        {/* button to place order */}
        <Button onClick={onPlaceOrderHandler}>Place order</Button>
      </div>
    </div>
  );
}
