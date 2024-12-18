import styled from "styled-components";
export const ContainerAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #262b34;
  box-sizing: border-box; /* 여백이 포함된 전체 크기 유지 */
  padding: 0 10px; /* 좌우 여백 유지 */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%; /* 화면에 맞게 늘어남 */
  max-width: 600px; /* 최대 너비를 설정 */
  height: 500px;
  background-color: #1e2224;
  border-radius: 0 0 25px 25px;
  margin-top: 10px;
  box-sizing: border-box; /* 패딩과 보더를 너비에 포함 */
`;

export const ChatInfo = styled.div`
  padding: 25px;
  background-color: #1e2224;

  overflow-y: overlay; /* 스크롤바가 콘텐츠 위에 그려지도록 설정 */
  overflow-x: hidden; /* 수평 스크롤 숨기기 */

  /* 스크롤바 설정 */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* 스크롤바 막대 설정 */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    border: 1px solid #1e2224;

    max-height: 10px;
  }

  /* 스크롤바 뒷 배경 설정 */
  &::-webkit-scrollbar-track {
    background-color: #1e2224;
  }
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  img {
    width: 380px;
    max-width: 100%;
  }
`;

export const PlayerLabel = styled.div`
  font-size: 14px;
  color: #848687;
  // margin-bottom: 10px;
`;

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Message = styled.div`
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  font-size: 14px;
  color: #fff;
  margin: 0;
  padding: 10px 15px;
  background: ${(props) => (props.isUser ? "radial-gradient(circle, #c2d5cb 0.1%, #A1B5A9 50%)" : "radial-gradient(circle, #9cabc6 0.1%, #7e90b0 50%)")};
  border-radius: 15px;
  max-width: 80%;
`;

export const ChatInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #1e2224;
  border-radius: 0 0 25px 25px;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #646c7b;
  border-radius: 50px;
  padding: 10px 15px;
  gap: 10px;
  position: relative;

  margin-bottom: 10px;
`;

export const QIcon = styled.img`
  width: 38px;
  height: 38px;
`;

export const HelpText = styled.img`
  display: flex;
  margin-right: 40px;

  width: 35px;
  height: 20px;
`;

export const IconButtonAll = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  right: 16px;
`;

export const IconButton1 = styled.img`
  width: 45px; /* Circle 크기 */
  height: 45px;
  position: absolute; /* Arrow와 겹치도록 배치 */
  z-index: 1; /* Circle이 뒤로 가도록 설정 */
`;

export const IconButton2 = styled.img`
  width: 24px; /* Arrow 크기 */
  height: 24px;
  position: absolute; /* Circle 위에 겹침 */
  z-index: 2; /* Arrow가 위로 올라오도록 설정 */
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #fff;
  outline: none;

  margin-top: 3px;

  &::placeholder {
    color: white;
  }
`;

export const HelpButton = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const DragButton = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: #9ca3af;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 350px; // 메시지가 많아지면 이 높이를 넘지 않도록 설정
  overflow-y: auto; // 스크롤 가능하도록 설정
`;
