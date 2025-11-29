import { useEffect, useState } from "react";
import { ProductItem } from "../../exportComponents";

const ProductsList = ({ products }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("wishlist");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      if (isFavorite) {
        return prevFavorites.filter((item) => item.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  return (
    <div className="text-center w-75 m-auto" id="products">
      <ul className="row row-gap-4 p-0 px-5 px-sm-0 px-md-2">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            favorites={favorites}
            handleToggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;