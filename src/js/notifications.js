import { success } from '@pnotify/core/';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const mySuccess = () => {
   success({
      text: "Запрос выполнен успешно",
      width: "380px",
      delay: 2000,
   });
};
export default mySuccess;