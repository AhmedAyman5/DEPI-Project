import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../../pages/home/Home.css"

function CategoriesNav() {
  const categories = [
    { name: "Groceries" },
    { name: "Premium Fruits" },
    { name: "Home & Kitchen" },
    { name: "Fashion" },
    { name: "Electronics" },
    { name: "Beauty" },
    { name: "Home Improvement" },
    { name: "Sports" },
  ];

  return (
    <section className="categories-section py-2 bg-white border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="category-item text-center m-1"
              style={{ flex: "0 0 auto" }}
            >
              <div 
                className="category-icon d-flex align-items-center justify-content-center px-3"
                style={{
                  height: '40px',
                  backgroundColor: '#f8f9fa',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  border: '2px solid #dee2e6',
                  borderRadius: '30px',
                  whiteSpace: "nowrap"
                }}
              >
                <span>{category.name}</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  style={{ fontSize: '0.7rem', marginLeft: '4px', color: '#6c757d' }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesNav;