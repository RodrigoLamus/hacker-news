import { CardInterface } from '../global/interfaces';

/**
 * the function gets from the local storage the value given and parses it
 * @param {string} type
 */

export const getLocalStorage = (type: string) => {
  const parsed = JSON.parse(localStorage.getItem(type) || '[]');
  return type === 'list'
    ? parsed.filter((elem: CardInterface) => elem.id)
    : parsed;
};

/**
 * the function sets in the local storage the value given
 * @param {string} type
 * @param {T} value
 */

export const setLocalStorage = <T>(type: string, value: T) => {
  return localStorage.setItem(type, JSON.stringify(value));
};
