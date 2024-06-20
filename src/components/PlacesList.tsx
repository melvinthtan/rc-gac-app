import { List } from "@ant-design/react-native";

const Item = List.Item;

const PlacesList = ({
  data,
  onItemPress,
}: {
  data: string[];
  onItemPress: (val: string) => void;
}) => {
  return (
    <List>
      {data.map((val, index) => (
        <Item
          key={`places_item_${index}`}
          onPress={() => {
            onItemPress(val);
          }}
        >
          {val}
        </Item>
      ))}
    </List>
  );
};

export default PlacesList;
