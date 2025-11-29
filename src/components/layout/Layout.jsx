import { Footer, Navbar } from "../exportComponents";


function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="position-relative pb-5" style={{top: '60px'}}>{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;
