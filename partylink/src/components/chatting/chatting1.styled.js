import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #262b34;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 600px;
  height: 500px;
  background-color: #262b34;
  border-radius: 0 0 25px 25px;
`;

export const ChatInfo = styled.div`
  padding: 15px;
  background-color: #262b34;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  img {
    width: auto; /* 이미지 크기를 원래 비율대로 유지 */
    max-width: 100%;
  }
`;

export const PlayerLabel = styled.p`
  font-size: 14px;
  color: #9ca3af; /* 회색 텍스트 */
  margin-bottom: 10px;
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
  background-color: ${(props) => (props.isUser ? "#A1B5A9" : "#A1B5D9")};
  border-radius: 15px;
  max-width: 80%;
`;

export const ChatInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #3b3f45;
  border-radius: 0 0 25px 25px;
  gap: 10px;

  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #646c7b;
  border-radius: 50px;
  padding: 10px 15px;
  gap: 10px;
`;

export const QIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const HelpText = styled.img`
  display: flex;
  margin-right: 20px;
`;

export const IconButtonAll = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const IconButton1 = styled.img`
  width: 40px; /* Circle 크기 */
  height: 40px;
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

  &::placeholder {
    color: #9ca3af;
  }
`;

export const HelpButton = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
