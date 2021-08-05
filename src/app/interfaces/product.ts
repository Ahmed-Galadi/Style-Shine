export interface Product {
  id?: number | any;
  img: string;
  for: string;
  type: string;
  price: number;
  howMany?: number;
  wishlist: boolean;
  inbag: boolean;
  instock: number;
}
