import { useState, useEffect } from "react";
import { Container, DivMain, DivHeader } from "./styles";
import Header from "@/components/header";
import CarroselPopularMovies from "@/components/carroseis/carroselPopularMovies";
import CarroselMyList from "@/components/carroseis/carroselMyList";
import { ModalMovie } from "@/components/modais/modalFilme";
import Modal from "@/components/modal";

export default function Home() {
  const [modalMovie, setModalMovie] = useState(true);
  const [id, setId] = useState(0);

  return (
    <Container>
      <DivHeader>
        <Header page="home" />
      </DivHeader>
      <DivMain>
        <CarroselPopularMovies
          open={modalMovie}
          handleClose={setModalMovie}
          setId={setId}
        />
        <CarroselMyList
          open={modalMovie}
          handleClose={setModalMovie}
          setId={setId}
        />
      </DivMain>
      <Modal open={modalMovie}>
        <ModalMovie open={modalMovie} handleClose={setModalMovie} id={id} />
      </Modal>
    </Container>
  );
}
