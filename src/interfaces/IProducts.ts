import { ICategory } from "./ICategory";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: ICategory;
  image: string;
}
