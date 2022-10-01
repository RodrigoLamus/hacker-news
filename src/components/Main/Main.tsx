import { Card } from '../Card/Card';
import { TabButtons } from '../TabButtons/TabButtons';

const mockData = {
  author: 'test',
  id: 1,
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  url: 'test',
  createdAt: new Date(),
};

export const Main: React.FC = () => {
  return (
    <>
      <TabButtons />
      <Card card={mockData} fav={true} />
    </>
  );
};
