import useCart from "../../hooks/useCart";
import EmptyCart from "../EmptyCart/EmptyCart";
import NonEmptyCart from "../NonEmptyCart/NonEmptyCart";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useCart();

  return (
    <section className={styles.cart__section}>
      <h3 className={`${styles.cart__heading} heading-2`}>
        Your Cart ({cart.length})
      </h3>
      {cart.length > 0 ? <NonEmptyCart /> : <EmptyCart />}
    </section>
  );
}

export default Cart;
