import { useQuery } from "@tanstack/react-query";
import client from "@/proxy/client";

import { GetEventsParams } from "./types";

export const getEvents = ({ heroId, params }: GetEventsParams) =>
  useQuery(["events", heroId], async () => {
    const { data } = await client.get(`/events`, {
      params,
    });

    return data;
  });
