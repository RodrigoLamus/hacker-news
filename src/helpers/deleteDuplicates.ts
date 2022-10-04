import { CardInterface } from '../global/interfaces';

export const deleteDuplicates = (array: CardInterface[]) => {
  return array.filter(
    (card: CardInterface, i: number, arr: CardInterface[]) =>
      arr.findIndex((cards) => cards.id === card.id) === i
  );
};
