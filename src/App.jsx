import Menu from "./components/Menu/Menu";
import MenuList from "./components/DessertList/DessertList";
import Cart from "./components/Cart/Cart";
import styles from "./App.module.css";

function App() {
  return (
    <form className={styles.main}>
      <Menu>
        <MenuList />
      </Menu>
      <Cart />
    </form>
  );
}

export default App;
