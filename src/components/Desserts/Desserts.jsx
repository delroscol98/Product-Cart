import styles from "./Desserts.module.css";

function Menu({ children }) {
  return (
    <section className={styles.desserts}>
      <h1 role="banner" className="heading-1">
        Desserts
      </h1>
      {children}
    </section>
  );
}

export default Menu;
