import { List } from "@ant-design/react-native";

const Item = List.Item;

const PlacesList = ({ data }: { data: string[] }) => {
  return (
    <List>
      {data.map((val, index) => (
        <Item key={`places_item_${index}`}>{val}</Item>
      ))}
    </List>
  );
};

export default PlacesList;
