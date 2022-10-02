export interface ContextInterface {
    dispatchTab: (actionType: boolean) => void;
    activeTab: boolean;
    dispatchFavList: (cardItem: CardInterface, set: boolean) => void;
    favList: CardInterface[];
    setLoading: (actionType: boolean) => void;
    loading: boolean;
    dispatchDropdownParam: (actionType: string) => void;
    dropdownParam: string;
}
export interface CardInterface {
    id: number;
    author: string;
    title: string;
    createdAt: Date;
    url: string;
  }

  export interface Sources {
    angular: string; react: string; vue: string
  }