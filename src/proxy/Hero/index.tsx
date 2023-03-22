import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

import { GetHeroParams } from "./types";

export const getHero = ({ heroId }: GetHeroParams) =>
  useQuery(["hero", heroId], async () => {
    const { data } = await client.get(`/characters/${heroId}`);

    return data;
  });
