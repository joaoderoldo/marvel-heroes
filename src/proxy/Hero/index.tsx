import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

export const getHero = ({ heroId }) =>
  useQuery(["hero", heroId], async () => {
    const { data } = await client.get(`/characters/${heroId}`);

    return data;
  });
