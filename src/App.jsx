import Desserts from "./components/Desserts/Desserts";
import MenuList from "./components/DessertList/DessertList";
import Cart from "./components/Cart/Cart";
import styles from "./App.module.css";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import useCart from "./hooks/useCart";

function App() {
  const { showModal } = useCart();
  return (
    <>
      <form className={styles.main}>
        <Desserts>
          <MenuList />
        </Desserts>
        <Cart />
      </form>
      {showModal && <ConfirmationModal />}
    </>
  );
}

export default App;
