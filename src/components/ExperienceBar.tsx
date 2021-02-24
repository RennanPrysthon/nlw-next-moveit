import React, { useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar: React.FC = () => {

  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percenteToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>{currentExperience} xp</span>
      <div >
        <div style={{ width: `${percenteToNextLevel}%` }} />
        
        <span className={styles.ball} style={{ left: `${percenteToNextLevel}%`}}></span>

        <span style={{ left: `${percenteToNextLevel}%`}}>
          {currentExperience} XP
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar;