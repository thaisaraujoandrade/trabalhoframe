import styles from '../styles/Components.module.css'


export default function Navbar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <div >
                    <img className={styles.logo} src='../princesaDois.png' />
              </div>

            </ul>
        </div>
    )
}