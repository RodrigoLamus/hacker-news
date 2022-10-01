export interface ContextInterface {
    dispatchTab: (actionType: boolean) => void;
    activeTab: boolean;
}
export interface CardInterface {
    id: number;
    author: string;
    title: string;
    createdAt: Date;
    url: string;
  }