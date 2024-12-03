import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Resultados da busca para: {query}
      </h1>
      {/* Add your search results logic here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for search results */}
        <p className="text-gray-600 dark:text-gray-300">
          Implementação dos resultados da busca em desenvolvimento...
        </p>
      </div>
    </div>
  );
};

export default SearchResults;
