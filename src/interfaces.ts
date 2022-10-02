export interface ContextInterface {
    dispatchTab: (actionType: boolean) => void;
    activeTab: boolean;
    dispatchFavList: (cardItem: CardInterface, set: boolean) => void;
    favList: CardInterface[];
    setLoading: (actionType: boolean) => void;
    loading: boolean;
    dispatchDropdownParam: (actionType: string) => void;
    dropdownParam: string;
    cardData: CardInterface[];
    setActive: (actionType: number) => void;
    active: number
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

  export interface Hit {
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