import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

import { GetHeroesParams } from "./types";

export const getHeroes = ({ params }: GetHeroesParams) =>
  useQuery(["heroes", params], async () => {
    const { data } = await client.get("/characters", { params });
    return data;
  });
