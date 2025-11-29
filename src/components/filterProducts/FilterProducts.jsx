import Select from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "men's clothing", label: "Men" },
  { value: "women's clothing", label: "Women" },
  { value: "jewelery", label: "Jewelry" },
  { value: "electronics", label: "Electronics" },
];

const FilterProducts = ({ setCategory }) => (
  <Select
    options={options}
    onChange={(selected) => setCategory(selected.value)}
    placeholder="Filter by category..."
    styles={{
      control: (base) => ({
        ...base,
        marginBottom: "4px",
        width: "160px",
        height: "40px",
        fontSize: '12px',
        borderRadius: "6px",
        borderColor: "#008ECC",
        boxShadow: "none",
        cursor: "pointer",
      }),
      option: (base, { isFocused }) => ({
        ...base,
        backgroundColor: isFocused ? "#008ECC" : "#fff",
        color: isFocused ? "#fff" : "#222222",
        cursor: "pointer",
      }),
    }}
  />
);
export default FilterProducts;
