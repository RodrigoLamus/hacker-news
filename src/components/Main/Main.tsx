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
  const tabStateExist = !!tab.state;
  const loader = useRef<HTMLDivElement>(null);
  const cardDataExists = cardData.length > 0;
  const noneFilterSelected =
    !cardDataExists && tab.state && !loading.state && !dropdownParam.state;
  const noFavorites = !loading.state && tab.state && dropdownParam.state;

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
      {tabStateExist && <Select options={options} />}

      {<CardWrapper cardList={cardData} />}

      <div>
        {noneFilterSelected && (
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
      </div>

      <div>
        {loading.state && <Spinner />}
        {noFavorites && <div ref={loader} />}
      </div>
    </>
  );
};
