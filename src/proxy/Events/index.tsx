import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

export const getEvents = ({ heroeId, params }) =>
  useQuery(["events", heroeId], async () => {
    const { data } = await client.get(`/events`, {
      params,
    });

    return data;
  });
