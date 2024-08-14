import styles from "./AddToCartBtn.module.css";

function AddToCartBtn({ onIncrement }) {
  return (
    <button className={`${styles.btn} para-3`} onClick={onIncrement}>
      <img src="../../images/icon-add-to-cart.svg" alt="icon add to cart" />
      Add to Cart
    </button>
  );
}

export default AddToCartBtn;
