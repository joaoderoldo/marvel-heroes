import { HeroHeading, HeroEvents } from "./styles";

import { Container, Loading } from "@/components";
import { getHero } from "@/proxy/Hero";
import { getEvents } from "@/proxy/Events";

import { useParams } from "react-router-dom";
import {
  getHeroPicture,
  getHeroDescription,
} from "@/utils/getCorrectHeroesData";

import { DefaultLayout } from "@/layouts";

const Hero = () => {
  const { heroId } = useParams();
  const { data: heroData, isLoading: isGetHeroLoading } = getHero({
    heroId,
  });

  const { data: heroEvents, isLoading: isGetHeroEventsLoading } = getEvents({
    heroId,
    params: { limit: 8, characters: heroId },
  });

  const hero = heroData?.data?.results[0];
  const events = heroEvents?.data?.results;

  if (isGetHeroLoading || isGetHeroEventsLoading) return <Loading />;

  return (
    <DefaultLayout>
      <HeroHeading>
        <div className="hero-picture">
          {getHeroPicture({
            picture: hero?.thumbnail,
            name: hero?.name,
            noImgSize: "large",
          })}
        </div>
        <div className="hero-content">
          <h1 className="hero-name">{hero?.name}</h1>
          <span className="hero-about">
            {getHeroDescription(hero?.description)}
          </span>
        </div>
      </HeroHeading>
      <HeroEvents>
        <Container>
          <h3 className="page-title">Eventos</h3>
          <div className="hero-list">
            {events?.map((event) => (
              <div className="hero-item">
                {getHeroPicture({
                  picture: event?.thumbnail,
                  name: event?.name,
                  noImgSize: "medium",
                  className: "hero-picture",
                })}
                <div className="hero-content">
                  <h4 className="hero-name">{event?.name}</h4>
                  <span className="hero-about">
                    {getHeroDescription(event?.description)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </HeroEvents>
    </DefaultLayout>
  );
};

export default Hero;
