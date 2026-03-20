import styles from './Top10.module.css'
export function Top10Item(props){
    return(
        <li className={styles.game}>
            <div className={styles.gameInfo}>
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
            </div>
        </li>
    )
}
