"use client";

import addCustomer from "@/actions/addCustomer";
import deleteCustomer from "@/actions/deleteCustomer";
import { useState, useEffect } from "react";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    console.log("fetch original");
    const response = await fetch("/api/v1/customers", {
      next: { tags: ["customers"] },
    });
    const data = await response.json();
    setCustomers(data);
  };

  const handleCreateCustomer = async () => {
    await addCustomer(formData);
    setFormData({ name: "", email: "", phone: "", address: "" });
    fetchCustomers();
  };

  const handleDeleteCustomer = async (id) => {
    await deleteCustomer(id);
    fetchCustomers();
    console.log("fetch handle");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Customers
      </h1>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">
          Add Customer
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
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="input-field"
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="input-field"
          />
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="input-field"
          />
        </div>
        <button
          onClick={handleCreateCustomer}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md mt-4 hover:bg-green-600"
        >
          Add Customer
        </button>
      </div>

      <ul className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
        {customers.map((customer) => (
          <li
            key={customer._id}
            className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-2"
          >
            <div>
              <p className="text-gray-800 dark:text-gray-200">
                {customer.name}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {customer.email}
              </p>
            </div>
            <button
              className="text-red-500 hover:underline"
              onClick={() => handleDeleteCustomer(customer._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersPage;
