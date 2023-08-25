import styled from "styled-components";

const DivHeader = styled.div`
  display: flex;
  background: red;
  align-items: center;
  gap: 24px;

  width: 100%;
  height: 50px;
`;

const DivLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-left: 8px;
`;

const DivRight = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 40%;
  justify-content: flex-end;
  margin-right: 16px;
`;

const DivTitlePage = styled.div`
  display: flex;
  margin-right: 8px;
  h1 {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const DivIconSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;

  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const DivPerfil = styled.div`
  display: flex;
`;

export { DivHeader, DivIconSearch, DivTitlePage, DivLeft, DivRight, DivPerfil };
