import styled from "styled-components";

const DivCard = styled.div`
  width: 150px;
  height: 250px;
  display: flex;
  flex-direction: column;

  cursor: grab;
`;

const DivImage = styled.div`
  width: 100%px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const DivTitle = styled.div`
  display: flex;

  width: 200px;
  white-space: nowrap;
  max-width: 150px;

  h1 {
    font-size: 1.8rem;
    color: white;

    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const DivFooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 150px;
`;

export { DivCard, DivImage, DivTitle, DivFooterCard };
