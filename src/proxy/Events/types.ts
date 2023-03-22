export interface GetEventsParams {
  heroId: string | undefined;
  params?: {
    name?: string;
    nameStartsWith?: string;
    modifiedSince?: Date;
    creators?: number | string;
    characters?: number | string | undefined;
    series?: number | string;
    comics?: number | string;
    stories?: number | string;
    limit?: number | string;
    offset?: number | string;
    orderBy?: string;
  };
}
