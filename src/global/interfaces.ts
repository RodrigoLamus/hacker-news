export interface ContextInterface {
  tab: ITab;
  favList: IFavList;
  loading: ILoading;
  dropdownParam: IDropdownParam;
  cardData: CardInterface[];
  active: IActive;
}
export interface ICard {
  card: CardInterface;
  fav: boolean;
}

export interface ISelect {
  options: string[];
}

export interface ITab {
  dispatch: (actionType: boolean) => void;
  state: boolean;
}

export interface IFavList {
  dispatch: (cardItem: CardInterface, set: boolean) => void;
  state: CardInterface[];
}

export interface ILoading {
  dispatch: (actionType: boolean) => void;
  state: boolean;
}

export interface IDropdownParam {
  dispatch: (actionType: string) => void;
  state: string;
}

export interface IActive {
  dispatch: (actionType: number | ((prev: number) => number)) => void;
  state: number;
}

export interface CardInterface {
  id: number;
  author: string;
  title: string;
  createdAt: Date;
  url: string;
}

export interface SourcesInterface {
  angular: string;
  react: string;
  vue: string;
}

export interface HitInterface {
  author: string;
  comment_text?: string;
  created_at: string;
  created_at_i?: number;
  num_comments?: number;
  objectID?: string;
  parent_id?: number;
  points?: number;
  story_id: number;
  story_text?: string;
  story_title: string;
  story_url: string;
  title?: string;
  url?: string;
}
