import React, { useState } from "react";
import "../../../assets/scss/components/start.scss";
import bac from "../../../assets/img/bac.svg";
import person from "../../../assets/img/person.svg";
import nextBtn from "../../../assets/img/nextBtn.svg";
import checked from "../../../assets/img/checked.svg";
const Start = () => {
  const [isLink, setIsLink] = useState(false);
  const handleLink = () => {
    navigator.clipboard.writeText("https://example.com");
    setIsLink(true);
    setTimeout(() => setIsLink(false), 3000); //3초 후 문구 숨기기
  };

  return (
    <div className="start-wrap">
      <div className="start-container">
        <h4>partylink</h4>
        <img src={bac} alt="bacground" className="backgoundImg" />
        <img src={person} alt="person" className="img-person" />
        <div className="input-css">
          <input placeholder="닉네임" className="nickname" />
          <button placeholder="링크 생성" className="link" onClick={handleLink}>
            링크 생성
          </button>
          {isLink && (
            <div className="link-wrapper">
              <img src={checked}></img>
              <p>링크가 복사 되었어요!</p>
            </div>
          )}
        </div>
        <div className="explain">
          <p>함께 플레이할 친구를 초대해보세요.</p> <p>플레이 인원이 5명일 시 게임 시작이 가능해요.</p> <p>링크가 있는 사용자만 함께 플레이할 수 있어요.</p>
        </div>
        <img src={nextBtn} className="nextBtn"></img>
      </div>
    </div>
  );
};

export default Start;
