import styled from "styled-components";

const MainCarroselDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const DivCarrosel = styled.div`
  display: flex;

  max-width: 100%;
  height: 100%;

  gap: 12px;
`;

const DivTitle = styled.div`
  display: flex;
  padding: 10px 0px;
`;

export { DivCarrosel, MainCarroselDiv, DivTitle };
