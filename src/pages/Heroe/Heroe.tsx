import * as S from "./styles";

import { Container } from "@/components";
import { getHeroe } from "@/proxy/Heroe";
import { getEvents } from "@/proxy/Events";

import { useParams } from "react-router-dom";
import {
  getHeroePicture,
  getHeroeDescription,
} from "@/utils/getCorrectHeroesData";

import { DefaultLayout } from "@/layouts";

const Heroe = () => {
  const { heroeId } = useParams();
  const { data: heroeData, isLoading: isGetHeroeLoading } = getHeroe({
    heroeId,
  });

  const { data: heroeEvents, isLoading: isGetHeroeEventsLoading } = getEvents({
    heroeId,
    params: { limit: 8, characters: heroeId },
  });

  const heroe = heroeData?.data?.results[0];
  const events = heroeEvents?.data?.results;

  if (isGetHeroeLoading || isGetHeroeEventsLoading)
    return <div>Carregando...</div>;

  return (
    <DefaultLayout>
      <S.HeroesHeading>
        <div className="heroe-picture">
          {getHeroePicture({
            picture: heroe?.thumbnail,
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
            {events?.map((heroeItem) => (
              <div className="heroe-item">
                {getHeroePicture({
                  picture: heroeItem?.thumbnail,
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
    </DefaultLayout>
  );
};

export default Heroe;
