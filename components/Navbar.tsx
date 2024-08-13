import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { useAppSelector } from "@/app/hooks";

const Navbar = () => {
  const cartlist = useAppSelector((state) => state.cartSlice.products);
  return (
    <header className="py-4 backdrop-blur-md bg-none border-b-[1px] border-b-zinc-200 fixed top-0 w-screen">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold" prefetch={false}>
            Ecommerce
          </Link>
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <Link href="/" className="hover:text-primary" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary" prefetch={false}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary" prefetch={false}>
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="/Cart"
            className="flex items-center space-x-2"
            prefetch={false}
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart ({cartlist.length})</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
