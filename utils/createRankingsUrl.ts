interface IParams {
  after: string;
  locationId: string;
  rankingsType: string;
}

const createRankingsUrl = ({ after, locationId, rankingsType }: IParams) => {
  return after
    ? `/locations/${locationId}/rankings/${rankingsType}?limit=15&after=${after}`
    : `/locations/${locationId}/rankings/${rankingsType}?limit=15`;
};

export default createRankingsUrl;
