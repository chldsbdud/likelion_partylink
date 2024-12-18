import React, { useState } from "react";
import Modal from "react-modal";
import styles0 from "../../assets/css/gamebase.module.css";
import game_info from "../../assets/img/game_info.svg";
import img_game from "../../assets/img/img_game.svg";

const Gamebase = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 모달 열기/닫기 함수
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <header>
        <div className={styles0.logo}>partylink</div>
        <div className={styles0.game}>
          <div className={styles0.game_name}>이미지 게임</div>
          <div className={styles0.game_info}>
            <img src={game_info} alt="게임 설명" onClick={openModal} />
          </div>
        </div>
      </header>

      <Modal
        isOpen={modalIsOpen} // 모달 열림 여부
        onRequestClose={closeModal} // 바깥 클릭 또는 ESC 키로 닫기
        ariaHideApp={false} // 기본적으로 앱이 비활성화되지 않게 설정
        className={styles0.modal} // 커스텀 모달 스타일
        overlayClassName={styles0.modalOverlay} // 모달 오버레이 스타일
        shouldCloseOnOverlayClick={true} // 모달 외부를 클릭하면 닫기
        shouldCloseOnEsc={true} // ESC 키를 누르면 닫기
      >
        <div className={styles0.modal_content}>
          <div className={styles0.title}>
            <img src={img_game} alt="이미지게임" className={styles0.img_game} /> {/* 수정됨 */}
            <div>이미지 게임</div>
          </div>
          <hr />
          <div className={styles0.content}>
            <p>
              플레이어들은 차례로 <span className={styles0.bold}>{"여기서 제일 OO할 것 같은 사람"}</span>이라는 질문을 던집니다.{" "}
              <span className={styles0.background}>(질문자의 프로필은 밝게 빛나요!)</span> 여기서 "OO"에는 특정한 특성이나 행동 예측이 들어갑니다. (ex. 여기서
              제일 잘 웃는 사람) 모든 플레이어는 해당 질문에 가장 적합하다고 생각하는 다른 플레이어를 지목합니다.{" "}
              <span className={`${styles0.bold} ${styles0.background}`}>상대 플레이어의 프로필을 클릭하여 지목할 수 있고, 꾹 세게 누를 시 선택 해제</span>가
              가능해요. <span className={styles0.background}>(본인은 선택할 수 없습니다.)</span> 모두의 지목이 끝나면 전체 결과를 확인하고 게임은 종료됩니다.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Gamebase;
