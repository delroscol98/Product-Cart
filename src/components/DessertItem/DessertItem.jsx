import styles from "./DessertItem.module.css";

function DessertItem({ dessert }) {
  return (
    <li className={styles.dessert}>
      <picture>
        <source media="(max-width: 425px)" srcSet={dessert.image.mobile} />
        <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
        <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
        <img
          className={styles.dessert__image}
          src={dessert.image.desktop}
          alt={dessert.name}
        />
      </picture>
      <button className={`${styles.dessert__cta} para-3`}>
        <img src="../../images/icon-add-to-cart.svg" alt="icon add to cart" />
        Add to Cart
      </button>
      <article className={styles.dessert__text}>
        <h3 className={`${styles.dessert__category} para-2`}>
          {dessert.category}
        </h3>
        <p className={`${styles.dessert__name} para-1`}>{dessert.name}</p>
        <p className={`${styles.dessert__price} para-1`}>
          ${dessert.price.toFixed(2)}
        </p>
      </article>
    </li>
  );
}

export default DessertItem;
