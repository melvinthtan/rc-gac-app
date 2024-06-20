import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import "@/locales/i18n";
import store from "@/redux/store";
import { Provider as AntdProvider } from "@ant-design/react-native";
import enUS from "@ant-design/react-native/lib/locale-provider/en_US";
import { getLocales } from "expo-localization";
import { useTranslation } from "react-i18next";
import { Provider as ReduxProvider } from "react-redux";

const language: any = { enUS };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
// console.log("splash screen prevent", i18n);
const RootLayout = () => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const { languageCode, regionCode } = getLocales()[0];
  return (
    <ReduxProvider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AntdProvider locale={language[`${languageCode}${regionCode}`]}>
          <Stack>
            <Stack.Screen name="index" options={{ title: t("home.title") }} />
          </Stack>
        </AntdProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default RootLayout;
