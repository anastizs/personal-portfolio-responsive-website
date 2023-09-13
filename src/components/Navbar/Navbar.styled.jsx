import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  // width: 296px;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  display: flex;
  font-weight: 400;
  font-size: 18px;
  :hover {
    color: #fe4519;
  }

  cursor: pointer;
`;

export const Logo = styled.a`
  display: flex;
  color: #fff;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  text-decoration: none;
`;

export const LogoLink = styled.a`
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #fe4519;
  cursor: pointer;
`;
