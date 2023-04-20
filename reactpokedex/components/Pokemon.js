import styles from '../styles/Pokemon.module.css';

function Pokemon(props) {
    return (
      <div>
		{/* <div className={`${styles.pokemon} ${styles.electric}`}>
			<div className={styles.imgContainer}>
				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" />
			</div>
			<div className={styles.info}>
				<h3 className={styles.name}>Pikachu</h3>
				<span className={styles.type}>Type : <span>{props.type}</span></span>
			</div>
		</div> */}
        <div className={`${styles.pokemon} ${styles[props.type]}`}>
            <div className={styles.imgContainer}>
                <img src={props.img} alt={props.name} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{props.name}</h3>
                <span className={styles.type}>Type : <span>{props.type}</span></span>
            </div>
        </div>
        </div>
    );
  }
  
  export default Pokemon;
  