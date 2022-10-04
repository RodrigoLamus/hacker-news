import { useEffect, useRef } from 'react';
import { useMainContext } from '../../context/customContext';
import { CardWrapper } from '../CardWrapper/CardWrapper';
import { Select } from '../Select/Select';
import { Spinner } from '../Spinner/Spinner';
import { TabButtons } from '../TabButtons/TabButtons';
import { Animation } from '../lotties/Animation';

const options = ['Angular', 'React', 'Vue'];

export const Main: React.FC = () => {
  const { tab, cardData, loading, active, dropdownParam, favList } =
    useMainContext();
  const loader = useRef<HTMLDivElement>(null);
  const cardDataExists = cardData.length > 0;

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      active.dispatch((prev: number) => prev + 1);
      loading.dispatch(true);
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const current = loader.current;
    const observer = new IntersectionObserver(handleObserver, option);
    if (current) observer.observe(current);
  }, [handleObserver, tab.state, loading]);
  return (
    <>
      <TabButtons />
      {tab.state && <Select options={options} />}
      {<CardWrapper cardList={cardData} />}
      {!cardDataExists &&
        tab.state &&
        !loading.state &&
        !dropdownParam.state && (
          <Animation
            title="Please filter in the left dropdown to start searching for news"
            type={'search'}
            width={300}
            height={300}
          />
        )}
      {favList.state.length === 0 && !tab.state && (
        <Animation type={'noFavorites'} width={300} height={300} />
      )}
      {loading.state && <Spinner />}
      {!loading.state && tab.state && dropdownParam.state && (
        <div ref={loader} />
      )}
    </>
  );
};
