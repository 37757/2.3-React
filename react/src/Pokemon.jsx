import styles from "./Pokemon.module.css";
import { useState } from "react";
import { useEffect } from "react";
export function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
    useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/6")
    .then(response => response.json())
    .then(data =>{
        setPokemon(data);
        console.log(data);
    })
}, [])


  if (pokemon === null) {
    return (
      <section className={styles.pokemon}>
        <h2>Fetching Pokemon</h2>
      </section>
    );
  } else {
    return (
      <section className={styles.pokemon}>
        <h2 className={styles.name}>{pokemon.name}</h2>
        {pokemon.types.map((type) => (
          <div key={type.slot} className={styles["type-"+type.type.name]}>
            {type.type.name}
          </div>
        ))}
        <img src={pokemon.sprites.front_default} />
      </section>
    );
  }

  
}
