import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth_user from "../../authentication/Auth_user";

const Search1 = () => {
  const [query, setQuery] = useState(""); // State to store the search query
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
  const [showProducts, setShowProducts] = useState(false); // State to control product display

  const Products = [
    {
      id: 1,
      name: "Butter",
      price: "10",
    },
    {
      id: 2,
      name: "Parle",
      price: "20",
    },
  ];

  const handleSearch = () => {
    // Function to filter products based on the query
    const filtered = Products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);

    // Show the products after filtering
    setShowProducts(true);
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "250px" }}>
        <div className="row">
          <div className="col-lg-12">
            <input
              type="text"
              placeholder="Search Products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        {showProducts && ( // Conditionally render products when showProducts is true
          <div className="row">
            {filteredProducts.map((item) => {
              return (
                <div className="col-lg-4" key={item.id}>
                  <div className="card">
                    <h1>Name: {item.name}</h1>
                    <p className="card-text">Rs: {item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search1;
