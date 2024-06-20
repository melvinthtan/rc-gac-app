import { Icon, View } from "@ant-design/react-native";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, ViewStyle } from "react-native";

const NoData = ({ style }: { style: ViewStyle }) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.noDataContainer, style]}>
      <Icon size={50} name="file-search" />
      <Text style={styles.noDataText}>{t("general.no_data")}</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  noDataContainer: { alignItems: "center" },
  noDataText: { marginTop: 5, color: "grey" },
});
