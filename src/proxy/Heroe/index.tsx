import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

export const getHeroe = ({ heroId, options }) =>
  useQuery(
    ["heroes", heroId],
    async () => {
      const { data } = await client.get(`/characters/${heroId}`);

      return data;
    },
    options
  );
