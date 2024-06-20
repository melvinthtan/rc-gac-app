import { getLocales } from "expo-localization";
import i18n, { LanguageDetectorModule } from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from "./en_US";

const languageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  detect: () => {
    return getLocales()[0].languageCode as string;
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    resources: { en: { translation: en_US } },
  });

export default i18n;
