import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #000;
  min-height: 100vh;
  max-width: 100vw;
`;

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;

  height: 90%;
  width: 100%;
`;

const DivHeader = styled.div`
  display: flex;
  height: 10%;
`;

export { Container, DivMain, DivHeader };
