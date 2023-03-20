import { DefaultLayout } from "@/layouts";

import * as S from "./styles";
import { ReactComponent as SearchIcon } from "@/assets/svgs/search-icon.svg";
import { Container, Table, Pagination } from "@/components";

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

const Home = () => {
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
          <Table.Table>
            <Table.TableHeader>
              {TableData.map((item, index) => (
                <Table.TableCol key={index}>{item.label}</Table.TableCol>
              ))}
            </Table.TableHeader>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <Table.TableRow clickable>
                <Table.TableCol
                  data-label="Personagem"
                  className="characters-name"
                >
                  <img src="https://placeimg.com/44/44/nature" alt="" />
                  <span>3-D Man</span>
                </Table.TableCol>
                <Table.TableCol
                  data-label="Séries"
                  className="characters-series"
                >
                  Avengers: The Initiative (2007 - 2010)
                  <br />
                  Deadpool (1997 - 2002)
                  <br />
                  Marvel Premiere (1972 - 1981)
                </Table.TableCol>
                <Table.TableCol
                  data-label="Eventos"
                  className="characters-events"
                >
                  Secret Invasion
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

export default Home;
