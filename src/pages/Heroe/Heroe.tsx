import * as S from "./styles";

import { Container } from "@/components";
import { getHeroe } from "@/proxy/Heroe";
import { getHeroes } from "@/proxy/Heroes";

import { useParams } from "react-router-dom";
import {
  getHeroePicture,
  getHeroeDescription,
} from "@/utils/getCorrectHeroesData";

const Heroe = () => {
  const { heroId } = useParams();
  const { data: heroData, isLoading: isGetHeroeLoading } = getHeroe({ heroId });
  const { data: heroesData, isLoading: isGetHeroesLoading } = getHeroes();

  const heroe = heroData?.data?.results[0];
  const heroes = heroesData?.data.results;

  if (isGetHeroeLoading && isGetHeroesLoading) return <div>Carregando...</div>;

  return (
    <>
      <S.HeroesHeading>
        <div className="heroe-picture">
          {getHeroePicture({
            picture: heroe?.thumbnail.path,
            name: heroe?.name,
            noImgSize: "large",
          })}
        </div>
        <div className="heroe-content">
          <h1 className="heroe-name">{heroe?.name}</h1>
          <span className="heroe-about">
            {getHeroeDescription(heroe?.description)}
          </span>
        </div>
      </S.HeroesHeading>
      <S.HeroEvents>
        <Container>
          <h3 className="page-title">Eventos</h3>
          <div className="heroe-list">
            {heroes.map((heroeItem) => (
              <div className="heroe-item">
                {getHeroePicture({
                  picture: heroeItem?.thumbnail.path,
                  name: heroeItem?.name,
                  noImgSize: "medium",
                  className: "heroe-picture",
                })}
                <div className="heroe-content">
                  <h4 className="heroe-name">{heroeItem?.name}</h4>
                  <span className="heroe-about">
                    {getHeroeDescription(heroeItem?.description)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </S.HeroEvents>
    </>
  );
};

export default Heroe;
