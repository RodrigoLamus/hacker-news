import React, { useState } from 'react';
import styles from './Select.module.css';
import { useSelectContext } from '../../context/customContext';
import PointerSVG from '../../../public/assets/pointer_arrow_icon.svg';
import angularPNG from '../../../public/assets/angular.png';
import reactPNG from '../../../public/assets/react.png';
import vuePNG from '../../../public/assets/vue.png';
import { SourcesInterface } from '../../global/interfaces';

const options = ['Angular', 'React', 'Vue'];
const sources: SourcesInterface = {
  angular: angularPNG,
  react: reactPNG,
  vue: vuePNG,
};

export const Select: React.FC = () => {
  const {
    dropdownParam,
    loading: { dispatch: dispatchLoading },
  } = useSelectContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const onOptionClicked = (value: string) => {
    if (value === dropdownParam.state) return;
    dropdownParam.dispatch(value);
    setShowDropdown(false);
    dispatchLoading(true);
  };

  const dropdownShownValue = dropdownParam.state
    ? dropdownParam.state.split('')[0]?.toUpperCase() +
      dropdownParam.state.split('').slice(1).join('')
    : 'Select your news';

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setShowDropdown((prevState) => !prevState)}
        id="select-news"
        className={styles.select}
      >
        <span>{dropdownShownValue}</span>
        <img src={PointerSVG} alt="pointer-down" />
      </button>
      {showDropdown && (
        <ul className={styles.dropdown}>
          {options.map((option, i) => {
            return (
              <li
                className={`${styles['option-value']} ${
                  i % 2 === 0 ? styles.even : styles.odd
                }`}
                key={option}
                onClick={() => onOptionClicked(option.toLocaleLowerCase())}
              >
                <img
                  src={sources[option.toLowerCase() as keyof SourcesInterface]}
                />
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
