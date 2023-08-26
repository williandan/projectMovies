import NavBar from "@/components/navBar";

import { DivTitlePage, DivMenu, DivIcon, DivMenuContainer } from "./styles.ts";
import { List } from "phosphor-react";
import { useState } from "react";

type Props = {
  page: string;
};

export default function Menu({ page }: Props) {
  const [menu, setMenu] = useState(false);

  return (
    <DivMenuContainer>
      <DivIcon menu={menu} onClick={() => setMenu(!menu)}>
        <List size={24} color="#fcfcfc" weight="thin" />
      </DivIcon>
      <DivMenu menu={menu}>
        <DivTitlePage>
          <h1>MyMovieList</h1>
        </DivTitlePage>
        <NavBar page={page} menu={menu} />
      </DivMenu>
    </DivMenuContainer>
  );
}
