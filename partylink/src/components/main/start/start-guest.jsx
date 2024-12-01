import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/scss/components/start.scss";
import bac from "../../../assets/img/bac.svg";
import person from "../../../assets/img/person.svg";
import nextBtn from "../../../assets/img/nextBtn.svg";

const StartGuest = () => {
  const navigate = useNavigate();
  const handleConnecting = () => {
    navigate("/start-guest-next");
  };
  return (
    <div className="start-wrap">
      <div className="start-container">
        <h4>partylink</h4>
        <img src={bac} alt="bacground" className="backgoundImg" />
        <img src={person} alt="person" className="img-person" />
        <p className="game-loading">게임을 준비 중이에요.</p>
        <div className="input-css">
          <input placeholder="닉네임" className="nickname" />
        </div>
        <div className="explain">
          <p>게임에서 사용할 본인의 닉네임을 설정해주세요.</p>
          <p>(친구들이 알아보기 쉬운 이름이나 별명을 추천해요!)</p>
        </div>
        <img src={nextBtn} className="nextBtn" alt="Next Button" onClick={handleConnecting}></img>
      </div>
    </div>
  );
};

export default StartGuest;
