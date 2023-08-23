import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = 'https://vsmart.ajspire.com/api/products';

  const handleSearch = async () => {
    try {
      setSearchResults([]); // Clear existing results
      
      // Fetch data from all pages
      const totalPages = 88;
      const fetchPromises = [];

      for (let page = 1; page <= totalPages; page++) {
        fetchPromises.push(fetch(`${apiUrl}?english_name=${searchQuery}&page=${page}`));
      }

      const responses = await Promise.all(fetchPromises);
      const dataPromises = responses.map(response => response.json());

      const pageDataArray = await Promise.all(dataPromises);

      // Flatten the data from all pages into a single array
      const allProducts = pageDataArray.flatMap(pageData => pageData.products.data);

      // Filter products based on the search query (case-insensitive)
      const filteredProducts = allProducts.filter((product) =>
        product.english_name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredProducts);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ marginTop: '300px', marginBottom: '300px' }} className='text-center'>
      <h1>Product Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by English Name"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>{product.english_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
