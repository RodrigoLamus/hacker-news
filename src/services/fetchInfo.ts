import { CardInterface, HitInterface } from '../global/interfaces';

export const fetchHits = async (dropdownParam: string, active: number) => {
  try {
    const response = await await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${dropdownParam}&page=${active}&hitsPerPage=20`
    );
    const data = await response.json();
    const filteredData: CardInterface[] = data.hits
      .map((hit: HitInterface) => ({
        createdAt: new Date(hit.created_at),
        url: hit.story_url,
        id: hit.story_id,
        author: hit.author,
        title: hit.story_title,
      }))
      .filter(
        (card: CardInterface, i: number, arr: CardInterface[]) =>
          arr.findIndex((elem) => elem.id === card.id) === i &&
          card.id &&
          card.author &&
          card.createdAt &&
          card.title &&
          card.url
      );
    return filteredData;
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    message = String(e);
    throw new Error(message);
  }
};
