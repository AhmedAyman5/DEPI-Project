import { ClockLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <ClockLoader color="#008ECC" size={80} />
    </div>
  );
};

export default Loader;
