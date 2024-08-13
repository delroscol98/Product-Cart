import styles from "./Menu.module.css";

function Menu({ children }) {
  return (
    <section>
      <h1 className="heading-1">Desserts</h1>
      {children}
    </section>
  );
}

export default Menu;
