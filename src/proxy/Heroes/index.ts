import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

export const getHeroes = ({ params }) =>
  useQuery(["heroes", params], async () => {
    const { data } = await client.get("/characters", { params });
    return data;
  });
