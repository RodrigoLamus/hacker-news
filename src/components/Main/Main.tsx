import { CardWrapper } from '../CardWrapper/CardWrapper';
import { TabButtons } from '../TabButtons/TabButtons';

const mockData = [
  {
    author: 'test',
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: 'test',
    createdAt: new Date(),
  },
  {
    author: 'test',
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: 'test',
    createdAt: new Date(),
  },
  {
    author: 'test',
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: 'test',
    createdAt: new Date(),
  },
];

export const Main: React.FC = () => {
  return (
    <>
      <TabButtons />
      <CardWrapper cardList={mockData} />
    </>
  );
};
