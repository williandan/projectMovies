import styled from "styled-components";

type Props = {
  page: string;
  menu?: boolean;
};

const DivNavBar = styled.div`
  display: flex;
  gap: 32px;

  width: 300px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
`;

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: ${(props: Props) =>
    props.page && !props.menu && "2px solid blue"};
`;

export { DivNavBar, DivText };
