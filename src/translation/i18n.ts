import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import SignUp from "./en/SignUp.json";
import SignIn from "./en/SignIn.json";
import Sidebar from "./en/Sidebar.json";
import Dashboard from "./en/Dashboard.json";
import Chat from "./en/Chat.json";

const resources = {
    en: {
        SignIn,
        SignUp,
        Sidebar,
        Dashboard,
        Chat
    }
}

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources
  });

export default i18n;