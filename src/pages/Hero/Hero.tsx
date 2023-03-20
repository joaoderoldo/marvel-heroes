import * as S from "./styles";

import { Container } from "@/components";

const Hero = () => {
  return (
    <>
      <S.HeroesHeading>
        <img
          src="https://placeimg.com/300/300/people"
          alt=""
          className="hero-picture"
        />
        <div className="hero-content">
          <h1 className="hero-name">Iron Man</h1>
          <span className="hero-about">
            Wounded, captured and forced to build a weapon by his enemies,
            billionaire industrialist Tony Stark instead created an advanced
            suit of armor to save his life and escape captivity. Now with a new
            outlook on life, Tony uses his money and intelligence to make the
            world a safer, better place as Iron Man.
          </span>
        </div>
      </S.HeroesHeading>
      <S.HeroEvents>
        <Container>
          <h3 className="page-title">Eventos</h3>
          <div className="hero-list">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <div className="hero-item">
                <img
                  src="https://placeimg.com/265/265/nature"
                  alt=""
                  className="hero-picture"
                />
                <div className="hero-content">
                  <h4 className="hero-name">Acts of Vengeance</h4>
                  <span className="hero-about">
                    Loki sets about convincing the super-villains of Earth to
                    attack heroes other than those they normally fight in an
                    attempt to do
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

export default Hero;
