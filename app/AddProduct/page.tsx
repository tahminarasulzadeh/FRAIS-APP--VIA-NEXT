'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the type for the form state
interface FormState {
  name: string;
  description: string;
  category: string;
  price: string;
  image: File | null;
}

const AddProduct = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    description: '',
    category: '',
    price: '',
    image: null,
  });

  // Define types for event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      image: e.target.files ? e.target.files[0] : null,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('category', form.category);
    formData.append('price', form.price);
    if (form.image) {
      formData.append('image', form.image);
    }

    const res = await fetch('http://localhost:5001/api/products', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Product added successfully!');

       // Reset form fields to initial values
       setForm({
        name: '',
        description: '',
        category: '',
        price: '',
        image: null,
      });
    }



  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      ></textarea>
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        type="number"
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
