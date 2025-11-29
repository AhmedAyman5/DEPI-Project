import { useState } from "react";
import { useProducts } from "../../context/productsContext/useProducts";
import {  ErrorsPage, Loader } from "../exportPages";
import {
  ProductsList,
  FilterProducts,
  InputSearch,
} from "../../components/exportComponents";

const Products = () => {
  const { products, isLoading, error } = useProducts();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = query.length > 1
    ? products.filter((product) =>
        product.title?.toLowerCase().includes(query.toLowerCase())
      )
    : products.filter(
        (product) => category === "all" || product.category === category
      );

  if (isLoading) return <Loader />;
  if (error) return <ErrorsPage error={error} />;
  return (
    <>
      <div className="products mb-5 pt-5">
        <div className="py-1 w-75 m-auto border-bottom d-flex justify-content-between align-items-center">
          <FilterProducts setCategory={setCategory} />
          <InputSearch query={query} setQuery={setQuery} />
        </div>
        <div className="pt-4">
          <ProductsList products={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default Products;
