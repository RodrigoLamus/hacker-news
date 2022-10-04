import { CardInterface } from '../global/interfaces';

/**
 * the function adds o removes an element from the card list to render
 * @param {boolean} set
 * @param {CardInterface[]} oldList
 * @param {CardInterface} listItem
 * @returns {CardInterface[]}
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
