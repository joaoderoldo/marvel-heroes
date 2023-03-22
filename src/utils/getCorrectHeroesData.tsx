import NoImageSmall from "@/assets/img/no-image-small.png";
import NoImageMedium from "@/assets/img/no-image-medium.png";
import NoImageLarge from "@/assets/img/no-image-large.png";
import { ReactElement } from "react";

type PictureSize = "small" | "medium" | "large";

type GetHeroPictureProps = {
  picture: {
    path: string;
    extension: string;
  } | null;
  name: string;
  className?: string;
  noImgSize?: PictureSize;
};

const heroPictures: Record<PictureSize, string> = {
  small: NoImageSmall,
  medium: NoImageMedium,
  large: NoImageLarge,
};

export const getHeroPicture = ({
  picture,
  name,
  className,
  noImgSize = "small",
}: GetHeroPictureProps): ReactElement => {
  return (
    <img
      src={`${picture?.path}.${picture?.extension}`}
      alt={name}
      onError={(e: any) => (e.target.src = heroPictures[noImgSize])}
      className={className}
    />
  );
};

type GetHeroSeriesProps = {
  items: {
    name: string;
  }[];
  available: number;
};

export const getHeroSeries = (
  series: GetHeroSeriesProps,
  limit = 3
): ReactElement | string => {
  if (!series.available) return "Esse Herói não possui nenhuma série :(";

  const serie = series.items
    .slice(0, limit)
    .map((serie, index) => <span key={index}>- {serie.name}</span>);

  return <>{serie}</>;
};

type GetHeroEventsProps = {
  items: {
    name: string;
  }[];
  available: number;
};

export const getHeroEvents = (
  events: GetHeroEventsProps,
  limit = 1
): ReactElement | string => {
  if (!events.available) return "Esse Herói não possui nenhum evento :(";

  const eventList = events.items
    .slice(0, limit)
    .map((event, index) => <span key={index}>{event.name}</span>);

  return <>{eventList}</>;
};

export const getHeroDescription = (description: string): string => {
  if (!description) return "Esse Herói não possui nenhuma descrição :(";

  return description;
};
