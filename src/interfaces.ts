export interface ContextInterface {
    dispatchTab: (actionType: boolean) => void;
    activeTab: boolean;
    dispatchFavList: (cardItem: CardInterface, set: boolean) => void;
    favList: CardInterface[],
}
export interface CardInterface {
    id: number;
    author: string;
    title: string;
    createdAt: Date;
    url: string;
  }