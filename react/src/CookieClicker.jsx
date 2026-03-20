import styles from "./cookieClicker.module.css";
import { useState } from "react";

export function CookieClicker() {
  const [grandmas, setGrandmas] = useState(0);

  const [score, setScore] = useState(0);
  function cookieClick() {
    setScore(score + 1 + grandmas);
  }

  function buyGrandma() {
    if (score > 20 * 1.15 ** grandmas) {
      setGrandmas(grandmas + 1);
      setScore(score - 20 * 1.15 ** grandmas);
    }
  }

  return (
    <section>
      <h2>Cookie Clicker: {score}</h2>
      <button className={styles.cookie} onClick={cookieClick}></button>{" "}
      <label htmlFor="button">Grandmas: {grandmas} </label>
      <button className={styles.upgrade} onClick={buyGrandma}>Buy grandma</button>
    </section>
  );
}
