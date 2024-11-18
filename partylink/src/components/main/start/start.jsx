import "../../../assets/scss/components/start.scss";
import bac from "../../../assets/img/bac.svg";
import person from "../../../assets/img/person.svg";

const Start = () => {
  return (
    <div className="start-wrap">
      <div className="start-container">
        <h4>partylink</h4>
        <img src={bac} alt="bacground" className="backgoundImg" />
        <img src={person} alt="person" className="img-person" />
      </div>
    </div>
  );
};

export default Start;
