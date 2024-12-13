import React, { useState } from "react";
import * as Styled from "./chatting2.styled";

import LeftQuestion from "../../assets/img/Group 51.svg";
import Question from "../../assets/img/Question.svg";
import Circle from "../../assets/img/Circle.svg";
import Arrow from "../../assets/img/Arrow.svg";
import HelpImage from "../../assets/img/HELP.svg";

const Chatting2 = () => {
  const [messages, setMessages] = useState([
    { text: "Q. 제일 웃음이 많은 사람은?", sender: "player" },
    { text: "Lorem ipsum dolor sit", sender: "player" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", sender: "user" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendClick = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <Styled.ContainerAll>
      <Styled.Container>
        <Styled.ChatInfo>
          <Styled.Information>
            <img src={LeftQuestion} alt="닉네임님의 차례입니다. 질문을 남겨주세요." />
          </Styled.Information>
          <Styled.PlayerInfo>
            <Styled.PlayerLabel>플레이어1</Styled.PlayerLabel>
            {messages.map((message, index) => (
              <Styled.Message key={index} isUser={message.sender === "user"}>
                {message.text}
              </Styled.Message>
            ))}
          </Styled.PlayerInfo>
        </Styled.ChatInfo>

        <Styled.ChatInputWrapper>
          <Styled.InputContainer>
            <Styled.QIcon src={Question} alt="QuestionIcon" />
            <Styled.Input type="text" placeholder="대화를 시작해보세요." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            <Styled.HelpText src={HelpImage} alt="Help" />

            <Styled.IconButtonAll onclick={handleSendClick}>
              <Styled.IconButton1 src={Circle} alt="SendIcon" />
              <Styled.IconButton2 src={Arrow} alt="SendIcon" />
            </Styled.IconButtonAll>
          </Styled.InputContainer>
        </Styled.ChatInputWrapper>
      </Styled.Container>
    </Styled.ContainerAll>
  );
};

export default Chatting2;
