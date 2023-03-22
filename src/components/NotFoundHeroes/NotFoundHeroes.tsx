import { Container } from "@/components";

const NotFoundHeroes = ({ search, handleCleanSearch }) => {
  return (
    <Container className="not-found-heroes">
      <h1>
        Não encotramos um herói com a busca: <span>{search}</span>
      </h1>
      <button onClick={handleCleanSearch}>Voltar</button>
    </Container>
  );
};

export default NotFoundHeroes;
