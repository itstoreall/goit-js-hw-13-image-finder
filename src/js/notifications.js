import { success, error, info } from '@pnotify/core/';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const myNoties = {
   mySuccess: () => {
      success({
         text: "Новые картинки загружены...",
         delay: 1000,
      })
   },

   myInfo: () => {
      info({
         text: "Введите запрос",
         delay: 1000,
      })
   },

   myError: () => {
      error({
         text: "Ничего нет...",
         delay: 1000,
      })
   },
};

export default myNoties;