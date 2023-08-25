import { DivNavBar, DivText } from "./styles";
import { useNavigate } from "react-router-dom";

type Props = {
  page: string;
  menu?: boolean;
};

export default function NavBar({ page, menu }: Props) {
  const navigate = useNavigate();
  return (
    <DivNavBar>
      <DivText page={page === "home" ? "home" : ""} menu={menu}>
        <h1 onClick={() => navigate("/home")}>Home</h1>
      </DivText>
      <DivText page={page === "categories" ? "categories" : ""} menu={menu}>
        <h1 onClick={() => navigate("/categories")}>Categories</h1>
      </DivText>
      <DivText page={page === "Mylist" ? "Mylist" : ""} menu={menu}>
        <h1 onClick={() => navigate("/home")}>MyList</h1>
      </DivText>
    </DivNavBar>
  );
}
