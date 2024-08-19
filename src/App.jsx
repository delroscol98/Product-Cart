import Menu from "./components/Menu/Menu";
import MenuList from "./components/DessertList/DessertList";
import Cart from "./components/Cart/Cart";
import styles from "./App.module.css";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import { useCart } from "./contexts/CartContext";

function App() {
  const { showModal } = useCart();
  return (
    <>
      <form className={styles.main}>
        <Menu>
          <MenuList />
        </Menu>
        <Cart />
      </form>
      {showModal && <ConfirmationModal />}
    </>
  );
}

export default App;
