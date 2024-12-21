export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  isNew?: boolean;
  isPromotion?: boolean;
  stock?: number;
  sales?: number;
  createdAt?: string;
}
