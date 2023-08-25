import { Container2 } from "./styles";
import Header from "@/components/header";
import CarroselPopularMovies from "@/components/carroseis/carroselPopularMovies";

export default function Categories() {
  return (
    <Container2>
      <Header page="categories" />
      <CarroselPopularMovies />
    </Container2>
  );
}
