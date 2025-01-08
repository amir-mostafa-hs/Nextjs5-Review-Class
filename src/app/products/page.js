"use client";

import { useState, useEffect } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("/api/v1/products");
    const data = await response.json();
    setProducts(data);
  };

  const addProduct = async () => {
    await fetch("/api/v1/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ name: "", description: "", price: 0, stock: 0 });
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Products
      </h1>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">
          Add Product
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="input-field"
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: parseFloat(e.target.value) })
            }
            className="input-field"
          />
          <input
            type="number"
            placeholder="Stock"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: parseInt(e.target.value) })
            }
            className="input-field"
          />
        </div>
        <button
          onClick={addProduct}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md mt-4 hover:bg-green-600"
        >
          Add Product
        </button>
      </div>

      <ul className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
        {products.map((product) => (
          <li
            key={product._id}
            className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-2"
          >
            <div>
              <p className="text-gray-800 dark:text-gray-200">{product.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                ${product.price}
              </p>
            </div>
            <button className="text-red-500 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
