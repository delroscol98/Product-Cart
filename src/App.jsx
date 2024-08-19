import Menu from "./components/Menu/Menu";
import MenuList from "./components/DessertList/DessertList";
import Cart from "./components/Cart/Cart";
import styles from "./App.module.css";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";

function App() {
  return (
    <>
      <form className={styles.main}>
        <Menu>
          <MenuList />
        </Menu>
        <Cart />
      </form>
      <ConfirmationModal />
    </>
  );
}

export default App;
