import { Movie } from "@/types/movie";
import { Star } from "phosphor-react";
import { DivCard, DivImage } from "./styles";

type Props = {
  movie: Movie;
};

export default function Card({ movie }: Props) {
  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const year = movie.release_date.slice(0, 4);
  return (
    <DivCard>
      <DivImage>
        <img src={image} alt="posterPath" />
      </DivImage>
      <h1>{movie.title}</h1>
      <div>
        <p>{year}</p>
        <div>
          <Star size={16} color="#90912b" weight="thin" />
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </DivCard>
  );
}
