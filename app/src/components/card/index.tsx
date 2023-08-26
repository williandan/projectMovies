import { Movie } from "@/types/movie";
import { Star } from "phosphor-react";
import { DivCard, DivImage, DivTitle, DivFooterCard } from "./styles";

type Props = {
  movie: Movie;
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

export default function Card({ movie, open, handleClose, setId }: Props) {
  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const year = movie.release_date.slice(0, 4);
  return (
    <DivCard
      onClick={() => {
        setId(movie.id);
        handleClose(!open);
      }}
    >
      <DivImage>
        <img src={image} alt="posterPath" />
      </DivImage>
      <DivTitle>
        <h1>{movie.title}</h1>
      </DivTitle>
      <DivFooterCard>
        <div>
          <p>{year}</p>
        </div>
        <div>
          <Star size={16} color="#ffef0d" weight="fill" />
          <p>{movie.vote_average}</p>
        </div>
      </DivFooterCard>
    </DivCard>
  );
}
