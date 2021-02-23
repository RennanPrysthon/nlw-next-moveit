import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rennanprysthon.png" alt="Renan Prysthon" />
      <div>
        <strong>Rennan Prysthon</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  )
}