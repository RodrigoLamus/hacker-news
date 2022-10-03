import { CardInterface } from '../interfaces';

export const getLocalStorage = (type: string) => {
  const parsed = JSON.parse(localStorage.getItem(type) || '[]');
  return type === 'list'
    ? parsed.filter((elem: CardInterface) => elem.id)
    : parsed;
};

export const setLocalStorage = <T>(type: string, value: T) => {
  return localStorage.setItem(type, JSON.stringify(value));
};
