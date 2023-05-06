import Favicon from './extensions/favicon.png';
import Logo from './extensions/logo.svg';

const primaryColor = '#2c4798';
const secondaryColor = '#0d0c1a';

const config = {
  locales: ['ru'],
  translations: {
    ru: {
      "Auth.form.welcome.title": "Добро пожаловать!",
      "Auth.form.welcome.subtitle": "Войдите в свою учетную запись",
    },
  },
  tutorials: false,
  auth: {
    logo: Logo
  },
  menu: {
    logo: Logo
  },
  head: {
    favicon: Favicon
  },
  theme: {
    colors: {
      // buttonPrimary500: secondaryColor,
      // buttonPrimary600: primaryColor,
      // primary600: primaryColor,
      // primary700: primaryColor,
      // primary200: primaryColor,
      // primary100: secondaryColor,
      // neutral100: secondaryColor
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
