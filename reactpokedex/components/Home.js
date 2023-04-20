import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Pokemon from './Pokemon.js';

function Home() {
  const [pokemonFetch, setPokemonFetch] = useState([])
  const [offset, setOffset] = useState(1);

  const fetchData = async () => {
    const newData = []
    for (let i = offset; i < offset + 15; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const data = await response.json()
      newData.push(data)
    }
    setPokemonFetch([...pokemonFetch,...newData])
  }



  useEffect(() => {
    fetchData()
  }, [offset])

  console.log(pokemonFetch)
  
  
  const pokeMon = pokemonFetch.map((data, index) => {
    return (
      <Pokemon
        key={index}
        type={data.types[0].type.name}
        img={data.sprites.front_default}
        name={data.name}
        />
      )
    })
    
    const offSetFunction = () => {
      setOffset( offset + 15 )
    }
  return (
    <div className={styles.mainHome}>
    <h1 className={styles.titleHome}>Pokedex</h1>
    <div className={styles.pokemonContainer}>
      {pokeMon}
    </div>
    <button className={styles.next} onClick={() => offSetFunction()}>Next</button>
    </div>
  );
}

export default Home;
