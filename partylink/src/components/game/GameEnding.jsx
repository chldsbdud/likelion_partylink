import React from "react";
import styles from "../../assets/css/GameEnding.module.css"; // CSS 모듈 임포트

const GameEnding = () => {
  return (
    <div className={styles.ending_page}>
      <div className={styles.ending_center}>
        <header>
          <div>게임이 종료되었어요.</div>
          <div>아래에서 내 결과를 확인하세요!</div>
        </header>

        <main>
          <div className={styles.loser_info}>
            <div className={styles.loser}>
              <div className={styles.font_color}>패배</div>
              <div>닉네임</div>
            </div>
            <div className={styles.user_img}>닉</div>
          </div>

          <div className={styles.ranks}>
            <div className={styles.rank}>
              <div className={styles.rank_num}>1</div>
              <div className={styles.rank_user}>닉네임</div>
            </div>
            <div className={styles.rank}>
              <div className={styles.rank_num}>2</div>
              <div className={styles.rank_user}>닉네임</div>
            </div>
            <div className={styles.rank}>
              <div className={styles.rank_num}>3</div>
              <div className={`${styles.rank_user} ${styles.me}`}>닉네임 (나)</div>
            </div>
            <div className={styles.rank}>
              <div className={styles.rank_num}>4</div>
              <div className={styles.rank_user}>닉네임</div>
            </div>
            <div className={styles.rank}>
              <div className={styles.rank_num}>5</div>
              <div className={styles.rank_user}>닉네임</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GameEnding;
