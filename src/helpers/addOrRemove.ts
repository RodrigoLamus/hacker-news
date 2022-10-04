import { CardInterface } from '../global/interfaces';

/**
 * brief description here...
 * @param set
 * @param oldList
 * @param listItem
 * @returns
 */
export const addOrRemove = (
  set: boolean,
  oldList: CardInterface[],
  listItem: CardInterface
) => {
  return set
    ? [...oldList, { ...listItem, fav: set }]
    : [...oldList].filter((elem) => elem.id !== listItem?.id);
};
