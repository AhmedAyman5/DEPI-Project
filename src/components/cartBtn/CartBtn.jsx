
const CartBtn = ({onClick, children}) => {
  return (
    <button className="cartBtn" onClick={onClick}>{children}</button>
  )
}

export default CartBtn;