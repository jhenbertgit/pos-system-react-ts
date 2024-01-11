import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
// import { useFetch } from "@jhenbertnpm/use-fetch";
import { Products } from "@/types";
import PosPageCtx from "@/contexts/pos-page-ctx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const POSPage = () => {
  // const { data } = useFetch<Products[]>({
  //   fetchFn: async () => {
  //     const response = await fetch("http://localhost:9000/products");
  //     const result = await response.json();
  //     return result;
  //   },
  //   initData: [],
  // });

  const products = useLoaderData() as Products[];

  const { addProductToCart } = useContext(PosPageCtx);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {products.map((product: Products) => (
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
    </>
  );
};

export default POSPage;

export const loader = async () => {
  const response = await fetch("http://localhost:9000/products");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch data from database" },
      { status: 500 }
    );
  } else {
    return response;
  }
};
