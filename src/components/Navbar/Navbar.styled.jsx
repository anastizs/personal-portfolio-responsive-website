import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  flex-basis: 296px;
  // heigth: 85px;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;

  // outline: 1px solid red;
`;

export const Item = styled.li`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  display: flex;
  font-weight: 400;
  height: 41px;
  align-items: center;
  font-size: 18px;
  margin: 22px 0;
  :hover {
    color: #fe4519;
  }

  cursor: pointer;
`;

export const Logo = styled.a`
  display: flex;
  color: #fff;
  cursor: pointer;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  text-decoration: none;
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  font-family: "Yeseva One", sans-serif;
  font-style: normal;
  font-size: 24px;
  border-radius: 50%;
  width: 41px;
  height: 41px;
  align-items: center;
  color: #fff;
  background-color: #fe4519;
  cursor: pointer;
`;
