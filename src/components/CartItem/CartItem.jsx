import styles from "./CartItem.module.css";

function CartItem({ cartItem }) {
  return (
    <li className={styles.cartItem}>
      <article className={styles.cartItem__container}>
        <p className={`${styles.cartItem__name} para-3`}>{cartItem.name}</p>
        <article className={styles.cartItem__subContainer}>
          <p className={`${styles.cartItem__count} para-3`}>
            {cartItem.count}x
          </p>
          <p className={`${styles.cartItem__price} para-2`}>
            @ ${cartItem.price.toFixed(2)}
          </p>
          <p className={`${styles.cartItem__total} para-3`}>
            ${(cartItem.count * cartItem.price).toFixed(2)}
          </p>
        </article>
      </article>
      <button className={styles.cartItem__btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </li>
  );
}

export default CartItem;
