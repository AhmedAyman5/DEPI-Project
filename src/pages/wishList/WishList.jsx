import { useWishlist } from "../../context/wishlistContext/useWishlist.jsx";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container py-5">
      <h2 className="mb-4">My Wishlist ❤</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist yet.</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-md-3 mb-3" key={item.id}>
              <div className="card p-3 d-flex justify-content-between" style={{height: '300px'}}>
                <img src={item.image} alt={item.title} className="card-img-top" style={{ maxHeight: "150px", objectFit: "contain" }} />
                <div>
                <h6 className="mt-2 text-truncate">{item.title}</h6>
                <p>${item.price}</p>
                <button type="button" className="w-100 btn btn-danger btn-sm" onClick={() => removeFromWishlist(item.id)}>
                  Remove
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
