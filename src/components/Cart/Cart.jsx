import { useCart } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart";
import NonEmptyCart from "../NonEmptyCart/NonEmptyCart";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useCart();

  return (
    <section className={styles.cart__section}>
      <h2 className={`${styles.cart__heading} heading-2`}>
        Your Cart ({cart.length})
      </h2>
      {/* <EmptyCart /> */}
      <NonEmptyCart />
    </section>
  );
}

export default Cart;
