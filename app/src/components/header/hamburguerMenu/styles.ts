import styled from "styled-components";
type Props = {
  menu: boolean;
};

const DivMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const DivTitlePage = styled.div`
  display: flex;
  margin: 0px 8px 8px 0px;
  h1 {
    font-size: 2.4rem;
  }
`;

const DivIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: gray;
  cursor: pointer;

  width: 30px;
  height: 30px;
  border-radius: ${(props: Props) => (props.menu ? "50% 50% 0px 0px" : "50%")};

  position: absolute;
`;

const DivMenu = styled.div`
  display: ${(props: Props) => (props.menu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding-left: 8px;
  width: 100%;
  height: 180px;
  background-color: gray;

  position: relative;
  top: 100px;

  z-index: 10;
`;

export { DivTitlePage, DivMenu, DivIcon, DivMenuContainer };
