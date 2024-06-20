import NoData from "@/components/NoData";
import PlacesList from "@/components/PlacesList";
import { clearPlaces, fetchPlaces } from "@/redux/features/places/action";
import { RootState } from "@/redux/store";
import { ActivityIndicator, SearchBar, View } from "@ant-design/react-native";
import debounce from "lodash/debounce";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = useState("");

  const { places, loading } = useSelector<
    RootState,
    { places: string[]; loading: boolean }
  >((state) => state.places);

  const debounceSearch = useCallback(
    debounce((val) => {
      dispatch(fetchPlaces(val));
    }, 500),
    []
  );

  const handleSearch = (val: string) => {
    setSearchStr(val);
  };

  const handleCancel = () => {
    setSearchStr("");
    dispatch(clearPlaces());
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingIcon}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (places.length === 0) {
      return <NoData style={styles.noDataContainer} />;
    }

    return <PlacesList data={places} />;
  };

  useEffect(() => {
    if (searchStr.length > 0) {
      debounceSearch(searchStr);
    }
  }, [searchStr]);

  return (
    <View>
      <SearchBar
        value={searchStr}
        onChange={handleSearch}
        onCancel={handleCancel}
      />

      {renderContent()}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loadingIcon: { marginTop: 10 },
  noDataContainer: { marginTop: 100 },
});
