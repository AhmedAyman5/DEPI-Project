import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsContext } from "./useProducts";

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect((()=>{
    const fetchData = async()=> {
      try {
        setIsLoading(true)
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data)
        setIsLoading(false)
      }catch(error) {
        setError(`${error} or error fetching data from the server. ❌`);
        setIsLoading(false)
      }
    }
    fetchData();
  }),[]);
  
  return (
    <ProductsContext.Provider value={{products, setProducts, isLoading, setIsLoading, error, setError}}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;