import { useCart } from "../../contexts/CartContext";
import styles from "./AddToCartBtn.module.css";

function AddToCartBtn({ dessert }) {
  const { handleAddDessertToCart } = useCart();

  return (
    <button
      className={`${styles.btn} para-3`}
      onClick={() => {
        handleAddDessertToCart(dessert);
      }}
    >
      <img src="../../images/icon-add-to-cart.svg" alt="icon add to cart" />
      Add to Cart
    </button>
  );
}

export default AddToCartBtn;
