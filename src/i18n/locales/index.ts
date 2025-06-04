import ru from './ru';
import en from './en';
import ruRetrofits from './ru/retrofits.json';
import enRetrofits from './en/retrofits.json';

const translations = {
  ru: {
    ...ru,
    retrofits: ruRetrofits,
  },
  en: {
    ...en,
    retrofits: enRetrofits,
  },
};

export default translations; 