import React from 'react';
// @ts-ignore
import styles from "./hover.module.scss"
const CardHover = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.card1}>
          <img src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png" alt="Pyramids"/>
          <h3>Pyramids</h3>
          <p>The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt. As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids.</p>
        </div>
        <div className={styles.footer}/>
      </div>

      <div>
        <div className={styles.card2}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <span className={styles.stars}></span>
              <h2 className={styles.java}>Java</h2>
              <p className={styles.java}>Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <h2>01</h2>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img src="https://bit.ly/3Y5oMQG" alt=""/>
          </div>
          <div className={styles.content}>
            <h2>Karan Singh </h2>
            <span>Graphic Designer</span>
        </div>
      </div>
      </div>


        <div className={styles.courses_box}>
          <div className={styles.item}>
            <a href="#" className={styles.link}>
              <div className={styles.item_bg}></div>

              <div className={styles.title}>
                UI/Web&amp;Graph design for teenagers 11-17&#160;years old
              </div>

              <div className={styles.date_box}>
                Start:
                <span className={styles.date}>
            04.11.2022
          </span>
              </div>
            </a>
          </div>

        </div>

    </div>
  );
};

export default CardHover;