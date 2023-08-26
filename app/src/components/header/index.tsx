import {
  DivHeader,
  DivTitlePage,
  DivLeft,
  DivRight,
  DivPerfil,
} from "./styles";
import NavBar from "../navBar";
import Perfil from "../userProfile";
import ResearchField from "../researchField";
import useWindowSize from "@/hooks/useWindowSize";
import Menu from "./hamburguerMenu";

type Props = {
  page: string;
  menu?: boolean;
};

export default function Header({ page, menu }: Props) {
  const windowSize = useWindowSize();
  const IsMobile = windowSize.width >= 900;

  return (
    <DivHeader>
      <DivLeft>
        <DivTitlePage>
          <h1>MyMovieList</h1>
        </DivTitlePage>
        {IsMobile ? <NavBar page={page} menu={menu} /> : <Menu page={page} />}
      </DivLeft>
      <DivRight>
        <ResearchField />
        <DivPerfil>
          <Perfil />
        </DivPerfil>
      </DivRight>
    </DivHeader>
  );
}
