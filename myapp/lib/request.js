
const API_BASE_URL = 'http://localhost:3000/api'; 

export async function fetchProducts() {
    const response = await fetch(`${API_BASE_URL}/product`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
  
    const products = await response.json();
    return products;
  }
  