import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <header className={styles.cardhead}>Other Cats</header>
        <div>
            <ul className={styles.list}>
                <li><a href="Chairman-Meow" className={styles.a}>Chairman Meow</a></li>
                <li><a href="lint-top" className={styles.a}>Lint Top</a></li>
                <li><a href="whisker-t-fluffington" className={styles.a}>Whisker T Fluffington</a></li>
                <li><a href="reginald-floofypants" className={styles.a}> Reginald Floofypants</a></li>
                <li><a href="mister-mittens" className={styles.a}>Mister Mittens</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;