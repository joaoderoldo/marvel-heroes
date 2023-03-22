import NoImageSmall from "@/assets/img/no-image-small.png";
import NoImageMedium from "@/assets/img/no-image-medium.png";
import NoImageLarge from "@/assets/img/no-image-large.png";

const heroPictures = {
  small: NoImageSmall,
  medium: NoImageMedium,
  large: NoImageLarge,
};

export const getHeroPicture = ({
  picture,
  name,
  className,
  noImgSize = "small",
}) => {
  return (
    <img
      src={`${picture?.path}.${picture?.extension}`}
      alt={name}
      onError={(e: any) => (e.target.src = heroPictures[noImgSize])}
      className={className}
    />
  );
};

export const getHeroSeries = (series, limit = 3) => {
  if (!series.available) return "Esse Herói não possui nenhuma série :(";

  const serie = series.items.map(
    (serie, index) => index < limit && <span>- {serie.name}</span>
  );

  return serie;
};

export const getHeroEvents = (events, limit = 1) => {
  if (!events.available) return "Esse Herói não possui nenhuma evento :(";

  const serie = events.items.map(
    (event, index) => index < limit && <span>{event.name}</span>
  );

  return serie;
};

export const getHeroDescription = (description) => {
  if (!description) return "Esse Herói não possui nenhuma descrição :(";

  return description;
};
