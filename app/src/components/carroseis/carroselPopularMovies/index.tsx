import { useState, useEffect } from "react";
import { DivCarrosel, MainCarroselDiv, DivTitle } from "../styles";
import Card from "@/components/card";
import api from "@/services/api";
import { Movie, ResponseAPI } from "@/types/movie";
import { apiKey } from "@/services/api";
import { AxiosResponse } from "axios";
import Slider from "@/components/slider";
import { SwiperSlide } from "swiper/react";

type Props = {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

export default function CarroselPopularMovies({
  open,
  handleClose,
  setId,
}: Props) {
  const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);

  async function getPopularMovies() {
    try {
      await api
        .get(
          `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        )
        .then(({ data }: AxiosResponse<ResponseAPI>) =>
          setMoviesPopular(data.results)
        );
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    getPopularMovies();
  }, [moviesPopular]);

  return (
    <MainCarroselDiv>
      <DivTitle>
        <h1>Popular movies</h1>
      </DivTitle>
      <DivCarrosel>
        <Slider>
          {moviesPopular &&
            moviesPopular.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <Card
                    movie={movie}
                    open={open}
                    handleClose={handleClose}
                    setId={setId}
                  />
                </SwiperSlide>
              );
            })}
        </Slider>
      </DivCarrosel>
    </MainCarroselDiv>
  );
}
