import { useEffect, useReducer } from "react";
import DessertItem from "../DessertItem/DessertItem";
import styles from "./DessertList.module.css";

const BASE_URL = "http://localhost:8000/desserts";

const initialState = {
  isLoading: false,
  desserts: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "desserts/loaded":
      return {
        ...state,
        isLoading: false,
        desserts: action.payload,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Action not recognised");
  }
};

function MenuList() {
  const [{ isLoading, desserts }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDesserts = async () => {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        dispatch({ type: "desserts/loaded", payload: data });
      } catch (err) {
        console.log(err);
        dispatch({ type: "rejected", payload: "Unable to fetch desserts" });
      }
    };

    fetchDesserts();
  }, []);

  return (
    <section className={styles.dessertList}>
      {desserts.map((dessert) => (
        <DessertItem key={dessert.id} dessert={dessert} />
      ))}
    </section>
  );
}

export default MenuList;
