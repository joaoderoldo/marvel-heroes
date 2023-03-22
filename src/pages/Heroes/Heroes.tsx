import { DefaultLayout } from "@/layouts";

import { useNavigate } from "react-router-dom";

import { HomeWrapper, HomeHeading } from "./styles";
import { ReactComponent as SearchIcon } from "@/assets/svgs/search-icon.svg";
import {
  Container,
  Table,
  Pagination,
  Loading,
  NotFoundHeroes,
} from "@/components";

import { getHeroes } from "@/proxy/Heroes";
import {
  getHeroSeries,
  getHeroPicture,
  getHeroEvents,
} from "@/utils/getCorrectHeroesData";
import { useState } from "react";

type Hero = {
  id: number;
  name: string;
  thumbnail: { path: string; extension: string };
  series: { items: { name: string }[]; available: number };
  events: { items: { name: string }[]; available: number };
};

const Heroes = () => {
  const [params, setParams] = useState<{
    limit: number;
    offset: number;
    nameStartsWith?: string;
  }>({ limit: 7, offset: 0 });
  const [search, setSearch] = useState("");

  const { data: heroes, isLoading: isGetHeroesLoading } = getHeroes({ params });
  const navigate = useNavigate();
  const totalPages = Math.ceil(heroes?.data.total / heroes?.data.count);

  const handleOffset = (offset: number) => {
    setParams((prevState) => ({ ...prevState, offset }));
  };

  const handleCleanSearch = () => {
    setSearch("");
    setParams((prevState) => {
      delete prevState.nameStartsWith;
      return {
        ...prevState,
      };
    });
  };

  const handleSearch = (search: string) => {
    setSearch(search);

    if (!search) {
      handleCleanSearch();
    }
  };

  return (
    <DefaultLayout>
      {isGetHeroesLoading && <Loading />}
      <HomeWrapper>
        {!heroes?.data.total ? (
          <NotFoundHeroes
            search={search}
            handleCleanSearch={handleCleanSearch}
          />
        ) : (
          <Container>
            <HomeHeading>
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
                    value={search}
                    onChange={(event) => handleSearch(event.target.value)}
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
            </HomeHeading>
            <Table.Table classes="heroes-table">
              <Table.TableHeader>
                <Table.TableCol>Personagem</Table.TableCol>
                <Table.TableCol>Séries</Table.TableCol>
                <Table.TableCol>Eventos</Table.TableCol>
              </Table.TableHeader>
              {heroes?.data.results.map((hero: Hero) => (
                <Table.TableRow
                  key={hero.id}
                  classes="heroes-item"
                  onClick={() => navigate(`/hero/${hero.id}`)}
                  clickable
                >
                  <Table.TableCol
                    dataLabel="Personagem"
                    classes="characters-name"
                  >
                    {getHeroPicture({
                      picture: hero?.thumbnail,
                      name: hero?.name,
                    })}
                    <span>{hero.name}</span>
                  </Table.TableCol>
                  <Table.TableCol
                    dataLabel="Séries"
                    classes="characters-series"
                  >
                    {getHeroSeries(hero?.series)}
                  </Table.TableCol>
                  <Table.TableCol
                    dataLabel="Eventos"
                    classes="characters-events"
                  >
                    {getHeroEvents(hero?.events)}
                  </Table.TableCol>
                </Table.TableRow>
              ))}
            </Table.Table>
          </Container>
        )}
        <Pagination
          totalPages={totalPages}
          handleOffset={handleOffset}
          classes="pagination"
        />
      </HomeWrapper>
    </DefaultLayout>
  );
};

export default Heroes;
