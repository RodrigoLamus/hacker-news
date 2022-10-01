import './App.css';
import { MainPage } from './pages/MainPage';
import { Provider } from './context/context';

export const App: React.FC = () => {
  return (
    <Provider>
      <MainPage />
    </Provider>
  );
};
