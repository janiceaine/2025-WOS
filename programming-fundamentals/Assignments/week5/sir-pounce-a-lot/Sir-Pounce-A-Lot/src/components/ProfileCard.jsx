import pounce from '../assets/pounce.jpg';
import styles from './ProfileCard.module.css';

function ProfileCard() {
    return (
        <div className={styles.card}>
            <img 
            src={pounce} 
            alt="Sir Pounce a Lot" 
            className={styles.image} />

            <p className={styles.p}>With a dignified purr and an impressively fluffed tail, Sir Pounce-a-Lot surveyed his kingdom. This regal feline truly embodied the noble spirit of a pampered housecat. Every nap was a royal decree, and every stretch a display of magnificent, kingly grace.</p>

        </div>
    )
}

export default ProfileCard;