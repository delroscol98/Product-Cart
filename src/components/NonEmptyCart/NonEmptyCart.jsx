import { useCart } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import styles from "./NonEmptyCart.module.css";

function NonEmptyCart() {
  const { cart, handleConfirmOrder } = useCart();
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0);

  return (
    <>
      <ul className={styles.cart}>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.name} cartItem={cartItem} />
        ))}
      </ul>
      <section className={styles.cart__totalContainer}>
        <p className={`${styles.cart__totalContainer__text} para-2`}>
          Order Total
        </p>
        <p className={`${styles.cart__totalContainer__total} heading-2`}>
          ${total.toFixed(2)}
        </p>
      </section>
      <section className={styles.cart__carbon}>
        <img src="../../images/icon-carbon-neutral.svg" alt="icon carbon" />
        <p className="para-2">
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </section>
      <button
        className={`${styles.cart__confirmBtn} para-1`}
        onClick={(e) => {
          e.preventDefault();
          handleConfirmOrder();
        }}
      >
        Confirm Order
      </button>
    </>
  );
}

export default NonEmptyCart;
