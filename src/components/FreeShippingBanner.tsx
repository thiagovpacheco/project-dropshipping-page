import React from 'react';

const FreeShippingBanner = () => {
  return (
    <div className="w-full bg-black dark:bg-white text-white dark:text-black text-center py-2 transition-colors duration-300">
      <p className="text-sm animate-pulse">
        Frete grátis para todas as compras!
      </p>
    </div>
  );
};

export default FreeShippingBanner;
