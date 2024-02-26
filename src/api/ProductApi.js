import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89');
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

};