// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/gVdTnaDobcx
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import {
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuItem,
//   NavigationMenuLink,
// } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
// import { Separator } from "@/components/ui/separator";

// export default function Component() {
//   const products = [
//     {
//       id: 1,
//       name: "Cozy Blanket",
//       description: "Warm and Soft for Chilly Nights",
//       price: 29.99,
//       image: "/placeholder.svg",
//     },
//     {
//       id: 2,
//       name: "Autumn Mug",
//       description: "Enjoy Your Hot Beverages in Style",
//       price: 12.99,
//       image: "/placeholder.svg",
//     },
//     {
//       id: 3,
//       name: "Fall Fragrance Candle",
//       description: "Fill Your Space with a Cozy Scent",
//       price: 16.99,
//       image: "/placeholder.svg",
//     },
//     {
//       id: 4,
//       name: "Autumn Leaves Wall Art",
//       description: "Decorate Your Space with Nature's Beauty",
//       price: 39.99,
//       image: "/placeholder.svg",
//     },
//     {
//       id: 5,
//       name: "Fall Harvest Wreath",
//       description: "Welcome the Season with a Beautiful Wreath",
//       price: 49.99,
//       image: "/placeholder.svg",
//     },
//     {
//       id: 6,
//       name: "Spiced Apple Cider Syrup",
//       description: "Enhance Your Drinks with Delicious Syrup",
//       price: 12.99,
//       image: "/placeholder.svg",
//     },
//     {
//       id: 7,
//       name: "Fall Foliage Table Runner",
//       description: "Decorate Your Table with Autumn Leaves",
//       price: 19.99,
//       image: "/placeholder.svg",
//     },
//     {
//       id: 8,
//       name: "Fall Fashion Hat",
//       description: "Complete Your Autumn Outfit with a Stylish Hat",
//       price: 24.99,
//       image: "/placeholder.svg",
//     },
//   ];
//   const [cart, setCart] = useState([]);
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-primary text-primary-foreground py-4 shadow-md">
//         <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
//           <Link href="#" className="flex items-center gap-2" prefetch={false}>
//             <MountainIcon className="h-6 w-6" />
//             <span className="text-lg font-semibold">Acme Inc</span>
//           </Link>
//           <div className="relative w-full max-w-md">
//             <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               type="search"
//               placeholder="Search products..."
//               className="w-full bg-primary-foreground/10 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="#">Home</NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="#">Products</NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="#">About</NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="#">Contact</NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//           <Button
//             variant="outline"
//             size="icon"
//             className="relative"
//             onClick={() => setShowCart(true)}
//           >
//             <div className="h-6 w-6" />
//             {cart.length > 0 && (
//               <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
//                 {cart.length}
//               </div>
//             )}
//           </Button>
//         </div>
//       </header>
//       <main className="flex-1 py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <h1 className="text-3xl font-bold mb-8">Our Products</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-background rounded-lg shadow-md overflow-hidden"
//               >
//                 <Link href="#" prefetch={false}>
//                   <img
//                     src="/placeholder.svg"
//                     alt={product.name}
//                     width={400}
//                     height={400}
//                     className="w-full h-48 object-cover"
//                     style={{ aspectRatio: "400/400", objectFit: "cover" }}
//                   />
//                 </Link>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                   <p className="text-muted-foreground mb-4">
//                     {product.description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-primary font-semibold">
//                       ${product.price}
//                     </span>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => addToCart(product)}
//                     >
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <Dialog open={showCart} onOpenChange={setShowCart}>
//         <DialogContent className="sm:max-w-[600px]">
//           <div className="flex flex-col gap-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-bold">Your Cart</h2>
//               <div>
//                 <Button variant="ghost" size="icon">
//                   <XIcon className="h-6 w-6" />
//                 </Button>
//               </div>
//             </div>
//             {cart.length === 0 ? (
//               <div className="text-center text-muted-foreground">
//                 Your cart is empty.
//               </div>
//             ) : (
//               <div className="grid gap-4">
//                 {cart.map((product) => (
//                   <div key={product.id} className="flex items-center gap-4">
//                     <img
//                       src="/placeholder.svg"
//                       alt={product.name}
//                       width={80}
//                       height={80}
//                       className="rounded-md"
//                       style={{ aspectRatio: "80/80", objectFit: "cover" }}
//                     />
//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold">{product.name}</h3>
//                       <p className="text-muted-foreground">${product.price}</p>
//                     </div>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => {
//                         setCart(cart.filter((p) => p.id !== product.id));
//                       }}
//                     >
//                       <XIcon className="h-5 w-5" />
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <Separator />
//             <div className="flex items-center justify-between">
//               <span className="text-lg font-semibold">Total:</span>
//               <span className="text-lg font-semibold">
//                 $
//                 {cart
//                   .reduce((total, product) => total + product.price, 0)
//                   .toFixed(2)}
//               </span>
//             </div>
//             <div className="flex gap-4">
//               <Button variant="outline" className="flex-1">
//                 Continue Shopping
//               </Button>
//               <Button className="flex-1">Proceed to Checkout</Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }
