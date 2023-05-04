import { useState, useEffect } from "react";
import { MainDiv } from "./styles";
import Card from "@/components/card";
import api from "@/services/api";
import { Movie, ResponseAPI } from "@/types/movie";
import { apiKey } from "@/services/api";
import { AxiosResponse } from "axios";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function getMovies() {
    try {
      await api
        .get(
          `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        )
        .then(({ data }: AxiosResponse<ResponseAPI>) =>
          setMovies(data.results)
        );
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <MainDiv>
        {movies.length !== 0 ? (
          movies.map((movie) => {
            console.log(movie);
            return (
              <div key={movie.id}>
                <Card movie={movie} />
              </div>
            );
          })
        ) : (
          <h1>teste</h1>
        )}
      </MainDiv>
    </>
  );
}
