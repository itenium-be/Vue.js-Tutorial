import { ProductModel } from "./ProductModels";

export interface SocksStore {
  premium: boolean;
  cart: ProductModel[];
  products: ProductModel[];
}
