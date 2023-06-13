import React from "react";
import Footer from "../../components/Footer";
import Coursebar from "../../components/Coursebar";
import styled from "styled-components";

const Title = styled.h2`
  padding: 30px 172px;

  font-weigth: bold;
`;
const Content = styled.div`
  margin: 20px 172px;
  width: max-content;
  position: relative;
  padding: 10px;
  // border:1px solid gray;
  // border-radius:20px;1
`;

const ContentElement = styled.div`
  margin-block: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 20px;
  width: 848px;
  heigth: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ProgressBar = styled.progress`
  width: 400px;
  height: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  // color:white;
  border-radius: 20px;
  // background-color:red;
  border: none;
  cursor: pointer;
`;

const ContentTitle = styled.h3`
  font-weigth: bold;
  // padding:15px 0;
`;

const HistoriqueEtudiant = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <Coursebar courseTitle="html course for beginner" />
      <Title>Historique De La Visualisation</Title>
      <Content>
        <ContentTitle>Lesson1</ContentTitle>
        <ContentElement>
          <h5>video 1</h5>
          <ProgressBar max="100" value="10">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
        <ContentElement>
          <h5>video 2</h5>
          <ProgressBar max="100" value="80">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
      </Content>
      <Content>
        <ContentTitle>Lesson2</ContentTitle>
        <ContentElement>
          <h5>video 1</h5>
          <ProgressBar max="100" value="30">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
        <ContentElement>
          <h5>video 2</h5>
          <ProgressBar max="100" value="70">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
      </Content>
      <Content>
        <ContentTitle>Lesson3</ContentTitle>
        <ContentElement>
          <h5>video 1</h5>
          <ProgressBar max="100" value="10">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
        <ContentElement>
          <h5>video 2</h5>
          <ProgressBar max="100" value="20">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
      </Content>
      <Content>
        <ContentTitle>Lesson4</ContentTitle>
        <ContentElement>
          <h5>video 1</h5>
          <ProgressBar max="100" value="10">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
        <ContentElement>
          <h5>video 2</h5>
          <ProgressBar max="100" value="20">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
      </Content>
      <Content>
        <ContentTitle>Lesson5</ContentTitle>
        <ContentElement>
          <h5>video 1</h5>
          <ProgressBar max="100" value="10">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
        <ContentElement>
          <h5>video 2</h5>
          <ProgressBar max="100" value="20">
            {" "}
            30%
          </ProgressBar>
          <Button>Return to video</Button>
        </ContentElement>
      </Content>

      <Footer />
    </div>
  );
};

export default HistoriqueEtudiant;
