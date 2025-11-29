import { createContext, useContext } from "react";

export const ProductsContext = createContext();

function useProducts() {
    const context = useContext(ProductsContext);
    return context;
}
export {useProducts}