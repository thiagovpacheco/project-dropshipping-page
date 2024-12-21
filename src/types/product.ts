export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  isNew?: boolean;
  isPromotion?: boolean;
  discountPercentage?: number;
  stock: number;
  sales: number;
  createdAt: Date;
  updatedAt: Date;
}
