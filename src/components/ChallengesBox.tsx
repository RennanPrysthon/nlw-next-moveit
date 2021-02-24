import React from 'react';
import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = false;
  return (
    <div className={styles.challengeBoxContainer}>
     { hasActiveChallenge && (
       <div className={styles.challengeNotActive}>
       <strong>Finalize um ciclo para receber um desafio</strong>
       <p>
         <img src="icons/level-up.svg" alt="Level Up"/>
         Avance de level completando desafios
       </p>
      </div>
     ) }

     { !hasActiveChallenge && (
       <div className={styles.challengeActive}>
        <header>Ganhe 400 xp</header>
        <main>
          <img src="icons/body.svg" alt=""/>
          <strong>Novo desafio</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt, atque odio veniam voluptate nesciunt
          </p>
        </main>

        <footer>
          <button 
            type="button"
            className={styles.challengeFailedButton}  
          >Falhei</button>
          <button 
            type="button"
            className={styles.challengeSucceededButton}  
          >Completei</button>
        </footer>
       </div>
     ) }
    </div>
  )
}

export default ChallengeBox;