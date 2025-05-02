import ProfilePic from '../assets/profile-pic.jpeg'
import styles from './Card.module.css'
function Card() {
    return (
        <div className={styles.card}>
            <img className={styles['card-image']} src={ProfilePic} alt="profile picture"></img>
            <h2 className={styles["card-title"]}>Calvin Mai</h2>
            <p className={styles['card-text']}>I make apps.</p>
        </div>
    );
}

export default Card