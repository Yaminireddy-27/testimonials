import styled from "styled-components";

export const TopContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #c0c2ce;
  width: 500px;
`;

export const Heading = styled.h1`
  font-family: "Inter", serif sans;
  font-size: 23px;
  color: #383721;
  margin-bottom: -10px;
`;

export const ConsumerCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -30px;
`;

export const CR = styled.h1`
  color: #365899;
  font-family: "Inter", "Sans serif";
  font-size: 40px;
  font-weight: bolder;
  margin-right: 10px;
`;

export const CrEle = styled.p`
  margin: -7px;
  padding: 0px;
  color: #383721;
  font-size: 17px;
`;

export const Desc = styled.p`
  color: #878787;
  font-size: 15px;
  width: 280px;
  text-shadow: 0px 1px 1px;
`;

export const BottomCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
`;

export const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const BottomHeading = styled.h1`
  font-family: "Inter", serif sans;
  font-size: 23px;
  color: #383721;
  margin-bottom: -10px;
  text-align: center;
`;

export const BottomDesc = styled.p`
  color: #878787;
  font-size: 15px;
  width: 300px;
  text-shadow: 0px 1px 1px;
  padding-left: 30px;
`;

export const Button = styled.button`
  background-color: #365899;
  color: #ffffff;
  padding: 10px 40px 10px 40px;
  border-radius: 50px;
  border-width: 0px;
  align-self: center;
`;

export const Image = styled.img`
  height: 500px;
  width: 500px;
`;
