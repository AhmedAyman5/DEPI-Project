import { Link } from "react-router-dom";

const MoreProducts = () => {
  return (
    <div className="m-auto my-5 text-center">
    
        <Link to={'/products'} className="more-btn">MORE</Link>
     
    </div>
  );
};

export default MoreProducts;
