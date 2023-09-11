import React from 'react';
// @ts-ignore
import styles from './style.module.scss'

const ThreeD = () => {

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className={styles.coverImage}
               alt={'dark_rider-cover'}/>
        </div>
        <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className={styles.title}
             alt={'dark_rider-cover'}/>
        <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
             className={styles.character} alt={'dark_rider-cover'}/>
      </div>

    </div>
  )
};

export default ThreeD;