import { DefaultLayout } from "@/layouts";

import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { ReactComponent as SearchIcon } from "@/assets/svgs/search-icon.svg";
import { Container, Table, Pagination } from "@/components";

import { getHeroes } from "@/proxy/Heroes";

import {
  getHeroeSeries,
  getHeroePicture,
  getHeroeEvents,
} from "@/utils/getCorrectHeroesData";

const TableData = [
  {
    label: "Personagem",
  },
  {
    label: "Séries",
  },
  {
    label: "Eventos",
  },
];

const Heroes = () => {
  const navigate = useNavigate();
  const { data: heroes, isLoading: isGetHeroesLoading } = getHeroes();

  if (isGetHeroesLoading) return <div>Carregando...</div>;

  return (
    <DefaultLayout>
      <S.HomeWrapper>
        <Container>
          <S.HomeHeading>
            <h1 className="page-title">Busca de Personagem</h1>
            <div className="search-container">
              <label htmlFor="character-name">Nome do Personagem</label>
              <div className="input-with-button">
                <input
                  name="character-name"
                  type="text"
                  id="character-name"
                  className="input-default"
                  placeholder="Buscar"
                />
                <button type="button" className="input-button">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </S.HomeHeading>
          <Table.Table className="heroes-table">
            <Table.TableHeader>
              {TableData.map((item, index) => (
                <Table.TableCol key={index}>{item.label}</Table.TableCol>
              ))}
            </Table.TableHeader>
            {heroes?.data?.results.map((heroe) => (
              <Table.TableRow
                key={heroe.id}
                className="heroes-item"
                onClick={() => navigate(`/heroe/${heroe.id}`)}
                clickable
              >
                <Table.TableCol
                  data-label="Personagem"
                  className="characters-name"
                >
                  {getHeroePicture({
                    picture: heroe?.thumbnail.path,
                    name: heroe?.name,
                  })}
                  <span>{heroe.name}</span>
                </Table.TableCol>
                <Table.TableCol
                  data-label="Séries"
                  className="characters-series"
                >
                  {getHeroeSeries(heroe?.series)}
                </Table.TableCol>
                <Table.TableCol
                  data-label="Eventos"
                  className="characters-events"
                >
                  {getHeroeEvents(heroe?.events)}
                </Table.TableCol>
              </Table.TableRow>
            ))}
          </Table.Table>
        </Container>
        <Pagination className="pagination" />
      </S.HomeWrapper>
    </DefaultLayout>
  );
};

export default Heroes;
