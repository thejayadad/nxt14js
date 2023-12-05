'use client'
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '@/lib/request';
import { useSession } from 'next-auth/react'


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p className='text-center'>Loading...</p>
}

if (status === 'unauthenticated') {
    return <p className='text-center'>
        Access Denied
    </p>
}

useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []);
  

  return (
    <section className='px-4 py-8'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Featured</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.desc}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>
                <img src={product.image} alt={product.name} style={{ maxWidth: '50px' }} />
              </td>
              <td>{product.featured ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Dashboard;
