import { FaSearch } from "react-icons/fa";

const InputSearch = ({ query, setQuery }) => {
  return (
    <div style={{maxWidth: '280px'}}
      className="d-flex align-items-center justify-content-between flex-grow-1 py-1 border-2 border-bottom border-primary mb-1">
      <input
        style={{ outline: "none", color: '#008ECC', fontSize: '14px' }}
        className="border-0 ps-1"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span style={{ cursor: "pointer" }}>
        <FaSearch color="#008ECC"/>
      </span>
    </div>
  );
};

  export default InputSearch;
