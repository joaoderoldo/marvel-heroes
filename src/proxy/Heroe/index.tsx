import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

export const getHeroe = ({ heroeId }) =>
  useQuery(["heroe", heroeId], async () => {
    const { data } = await client.get(`/characters/${heroeId}`);

    return data;
  });
