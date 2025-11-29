import {
  AboutSection,
  CategoriesNav,
  ContactUs,
  HeroSection,
  MoreProducts,
  ProductsList,
  ProductsTitle,
} from "../../components/exportComponents";
import { useProducts } from "../../context/productsContext/useProducts";

function Home() {
  const { products, error } = useProducts();
  return (
    <section id="home">
      <CategoriesNav />
      <HeroSection />
      <AboutSection />
      {!error && (
        <>
          <ProductsTitle />
          <ProductsList products={products.slice(0, 8)} />
          <MoreProducts />
        </>
      )}
      <ContactUs />
    </section>
  );
}

export default Home;