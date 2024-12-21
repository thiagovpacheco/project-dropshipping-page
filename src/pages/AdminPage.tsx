import React from 'react';
import { ProductManager } from '../components/Admin/ProductManager';

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-8">
        <ProductManager />
      </div>
    </div>
  );
};

export default AdminPage;
