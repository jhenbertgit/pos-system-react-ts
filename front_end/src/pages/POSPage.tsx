import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useFetch } from "@jhenbertnpm/use-fetch";
import { useState } from "react";

type Products = {
  id: number;
  product_name: string;
  price: number;
  img: string;
  quantity: number;
  totalAmount: number;
};

const POSPage = () => {
  const [cart, setCart] = useState<Products[]>([]);
  const { data } = useFetch<Products[]>({
    fetchFn: async () => {
      const response = await fetch("http://localhost:3000/products");
      const result = await response.json();
      return result;
    },
    initData: [],
  });

  const addProductToCart = async (product: Products) => {
    //check if adding product exists
    let findProductInCart = cart.find((i) => {
      return i.id === product.id;
    });

    if (findProductInCart) {
      let newCart: Products[] = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });
      setCart(newCart);
      //
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.price,
      };
      setCart([...cart, addingProduct]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {data.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <h1 className="font-bold text-2xl">{product.product_name}</h1>
            </CardHeader>
            <CardContent>
              <div
                className="aspect-w-16 aspect-h-9 relative bg-foreground/5 dark:bg-background rounded-lg"
                onClick={() => addProductToCart(product)}
              >
                <img
                  src={product.img}
                  alt={product.product_name}
                  className="w-full h-full object-center object-cover rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                />
              </div>
            </CardContent>
            <CardFooter>
              <div>
                <p className="text-sm font-medium">{product.product_name}</p>
                <p className="text-sm">Php{product.price.toFixed(2)}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div>
        {cart ? (
          cart.map((cartProduct) => (
            <ul key={cartProduct.id}>
              <li>Particular: {cartProduct.product_name}</li>
              <li>Qty: {cartProduct.quantity}</li>
              <li>Price: {cartProduct.price}</li>
              <li>Total: {cartProduct.totalAmount}</li>
            </ul>
          ))
        ) : (
          <h1>No available in cart</h1>
        )}
      </div>
    </>
  );
};

export default POSPage;
