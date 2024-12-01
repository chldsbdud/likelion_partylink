import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../assets/scss/components/start.scss";
import bac from "../../../assets/img/bac.svg";
import person from "../../../assets/img/person.svg";
import nextBtn from "../../../assets/img/nextBtn.svg";
import beforeBtn from "../../../assets/img/beforeBtn.svg";

const StartGuestNext = () => {
  const navigate = useNavigate();
  const handleGameCategory = () => {
    navigate("/game-category");
  };
  return (
    <div className="start-wrap">
      <div className="start-container">
        <h4>partylink</h4>
        <img src={bac} alt="bacground" className="backgoundImg" />
        <img src={person} alt="person" className="img-person" />
        <p className="game-loading">친구들이 접속 중이에요.</p>
        <div className="input-css">
          <button placeholder="닉네임" className="nickname-connected">
            닉네임(나)
          </button>
          <button placeholder="닉네임" className="nickname-connected">
            닉네임(나)
          </button>
          <button placeholder="닉네임" className="nickname-connected">
            닉네임(나)
          </button>
          <button placeholder="닉네임" className="nickname-connected">
            닉네임(나)
          </button>
          <button placeholder="닉네임" className="nickname-connected">
            닉네임(나)
          </button>
        </div>
        <div className="people-num">
          <p className="num-point">1명</p>
          <p>/ 5명</p>
        </div>
        <img src={beforeBtn} className="beforeBtn" alt="Before Button"></img>
        <img src={nextBtn} className="nextBtn" alt="Next Button" onClick={handleGameCategory}></img>
      </div>
    </div>
  );
};

export default StartGuestNext;
