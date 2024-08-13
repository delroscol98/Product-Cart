import styles from "./Cart.module.css";

function Cart() {
  return (
    <section className={styles.cart}>
      <h2 className={`${styles.cart__heading} heading-2`}>Your Cart (0)</h2>
      <section className={styles.cart__container}>
        <img
          className={`${styles.cart__illustration}`}
          src="../../images/illustration-empty-cart.svg"
          alt="illustration"
        />
        <p className={`${styles.cart__paragraph} para-3`}>
          Your added items will appear here
        </p>
      </section>
    </section>
  );
}

export default Cart;
