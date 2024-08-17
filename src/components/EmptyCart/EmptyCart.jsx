import styles from "./EmptyCart.module.css";

function EmptyCart() {
  return (
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
  );
}

export default EmptyCart;
