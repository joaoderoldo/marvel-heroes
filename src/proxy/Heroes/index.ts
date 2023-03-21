import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

export const getHeroes = () =>
  useQuery(["heroes"], async () => {
    const { data } = await client.get("/characters");

    return data;
  });
