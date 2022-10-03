import { useCallback, useEffect, useRef, useState } from 'react';
import { useMainContext } from '../../context/customContext';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { Select } from '../Select/Select';
import { Spinner } from '../Spinner/Spinner';
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
  const { activeTab, cardData, loading, setActive, setLoading, dropdownParam } =
    useMainContext();
  const loader = useRef<HTMLDivElement>(null);
  const cardDataExists = cardData.length > 0;

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setActive((prev: number) => prev + 1);
        setLoading(true);
      }
    },
    [setLoading]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const current = loader.current;
    const observer = new IntersectionObserver(handleObserver, option);
    if (current) observer.observe(current);
  }, [handleObserver, activeTab, loading]);
  return (
    <>
      <TabButtons />
      {activeTab && <Select />}
      {<CardWrapper cardList={cardData} />}
      {loading && <Spinner />}
      {!loading && activeTab && dropdownParam && <div ref={loader} />}
    </>
  );
};
