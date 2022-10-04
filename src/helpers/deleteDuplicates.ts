import { CardInterface } from '../global/interfaces';
/**
 * the function deletes the duplicates from the data arrived from the API
 * @param {CardInterface[]} array
 * @returns {CardInterface[]}
 */
export const deleteDuplicates = (array: CardInterface[]) => {
  return array.filter(
    (card: CardInterface, i: number, arr: CardInterface[]) =>
      arr.findIndex((cards) => cards.id === card.id) === i
  );
};
