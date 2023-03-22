import { DefaultLayout } from "@/layouts";

import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { ReactComponent as SearchIcon } from "@/assets/svgs/search-icon.svg";
import { Container, Table, Pagination, Loading } from "@/components";

import { getHeroes } from "@/proxy/Heroes";
import {
  getHeroeSeries,
  getHeroePicture,
  getHeroeEvents,
} from "@/utils/getCorrectHeroesData";
import { useState } from "react";

const Heroes = () => {
  const [params, setParams] = useState({ limit: 7, offset: 0 });
  const [search, setSearch] = useState("");
  const { data: heroes, isLoading: isGetHeroesLoading } = getHeroes({ params });
  const navigate = useNavigate();

  const totalPages = Math.ceil(heroes?.data.total / heroes?.data.count);
  const handleOffset = (offset) => {
    setParams((prevState) => ({ ...prevState, offset }));
  };

  return (
    <DefaultLayout>
      {isGetHeroesLoading && <Loading />}
      <S.HomeWrapper>
        {!heroes?.data.total ? (
          <Container className="not-found-heroes">
            <h1>
              Não encotramos um herói com a busca: <span>{search}</span>
            </h1>
            <button
              onClick={() => {
                setParams((prevState) => {
                  delete prevState.nameStartsWith;
                  return {
                    ...prevState,
                  };
                });
              }}
            >
              Voltar
            </button>
          </Container>
        ) : (
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
                    onChange={(event) => {
                      setSearch(event.target.value);
                      if (event.target.value.length === 0) {
                        setParams((prevState) => {
                          delete prevState.nameStartsWith;
                          return {
                            ...prevState,
                          };
                        });
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="input-button"
                    onClick={() => {
                      setParams((prevState) => ({
                        ...prevState,
                        nameStartsWith: search,
                      }));
                    }}
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            </S.HomeHeading>
            <Table.Table className="heroes-table">
              <Table.TableHeader>
                <Table.TableCol>Personagem</Table.TableCol>
                <Table.TableCol>Séries</Table.TableCol>
                <Table.TableCol>Eventos</Table.TableCol>
              </Table.TableHeader>
              {heroes?.data.results.map((heroe) => (
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
                      picture: heroe?.thumbnail,
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
        )}

        <Pagination
          totalPages={totalPages}
          handleOffset={handleOffset}
          className="pagination"
          isHidden={!heroes?.data.total}
        />
      </S.HomeWrapper>
    </DefaultLayout>
  );
};

export default Heroes;
