import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

export const getEvents = ({ heroId, params }) =>
  useQuery(["events", heroId], async () => {
    const { data } = await client.get(`/events`, {
      params,
    });

    return data;
  });
