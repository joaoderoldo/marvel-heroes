import { FC } from "react";
import { Container } from "@/components";

import { NotFoundHeroesProps } from "./types";

const NotFoundHeroes: FC<NotFoundHeroesProps> = ({
  search,
  handleCleanSearch,
}) => {
  return (
    <Container classes="not-found-heroes">
      <h1>
        Não encotramos um herói com a busca: <span>{search}</span>
      </h1>
      <button onClick={handleCleanSearch}>Voltar</button>
    </Container>
  );
};

export default NotFoundHeroes;
