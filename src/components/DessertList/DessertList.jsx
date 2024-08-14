import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import DessertItem from "../DessertItem/DessertItem";
import styles from "./DessertList.module.css";

const BASE_URL = "http://localhost:8000/desserts";

function MenuList() {
  const [desserts, setDesserts] = useState([]);

  const fetchDesserts = useCallback(async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setDesserts(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchDesserts();
  }, [fetchDesserts]);

  return (
    <ul className={styles.dessertList}>
      {desserts.map((dessert) => (
        <DessertItem key={dessert.name} dessert={dessert} />
      ))}
    </ul>
  );
}

export default MenuList;
