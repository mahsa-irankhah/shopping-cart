import axios from "axios";

const getProducts = async () => {
  const BASE_URL = "https://fakestoreapi.com";
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export { getProducts };
