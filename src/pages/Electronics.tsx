import React from 'react';
import { CategoryTemplate } from '../components/CategoryPage/CategoryTemplate';

// Mock data - Substituir por dados reais da API
const electronicsData = {
  categoryName: 'Eletrônicos',
  subcategories: [
    'Notebooks',
    'Tablets',
    'Acessórios',
    'Monitores',
    'Componentes',
    'Periféricos',
    'Impressoras',
    'Redes e Wireless'
  ],
  products: [
    {
      id: '1',
      name: 'Notebook Lenovo IdeaPad 3i Intel Core i5 8GB 256GB SSD Full HD Windows 11',
      price: 3299.99,
      originalPrice: 3999.99,
      image: '/images/products/notebook-lenovo.jpg',
      brand: 'Lenovo',
      rating: 4.5,
      reviews: 128,
      tags: ['Intel Core i5', 'SSD', 'Windows 11'],
      discount: 17,
      isFeatured: true
    },
    {
      id: '2',
      name: 'Tablet Samsung Galaxy Tab S7 FE 12.4" 64GB WiFi Android 11',
      price: 2799.99,
      originalPrice: 3299.99,
      image: '/images/products/tablet-samsung.jpg',
      brand: 'Samsung',
      rating: 4.8,
      reviews: 93,
      tags: ['Android', 'S Pen', 'WiFi'],
      discount: 15
    },
    // Adicionar mais produtos...
  ],
  filters: {
    brands: [
      'Lenovo',
      'Samsung',
      'Apple',
      'Dell',
      'HP',
      'Asus',
      'Acer',
      'LG'
    ],
    priceRanges: [
      { min: 0, max: 1000, label: 'Até R$ 1.000' },
      { min: 1000, max: 2000, label: 'R$ 1.000 a R$ 2.000' },
      { min: 2000, max: 3000, label: 'R$ 2.000 a R$ 3.000' },
      { min: 3000, max: 5000, label: 'R$ 3.000 a R$ 5.000' },
      { min: 5000, max: Infinity, label: 'Acima de R$ 5.000' }
    ],
    tags: [
      'Intel Core i5',
      'Intel Core i7',
      'AMD Ryzen',
      'SSD',
      'Windows 11',
      'Full HD',
      'WiFi 6',
      'Bluetooth 5.0'
    ]
  }
};

export function Electronics() {
  return <CategoryTemplate {...electronicsData} />;
}
