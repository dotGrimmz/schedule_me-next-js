import styled from "styled-components";
import Image from "next/image";

export const LoginContainer = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  min-width: fit-content;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 15px;
  padding-bottom: 10px;
  padding-top: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19);
`;

export const CredentialsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const ScheduleImageComponent = styled(Image)`
  border-radius: 15px;
`;

export const CustomLoginBtn = styled.button`
  height: 20px;
  width: 100px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19);
`;

export const ScheduleImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
