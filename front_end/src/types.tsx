export type Theme = "light" | "dark" | "system";

export type Products = {
  id?: number;
  product_name: string;
  price: number;
  img: string;
  quantity: number;
  totalAmount: number;
};
