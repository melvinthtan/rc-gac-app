import { from } from "rxjs";

export const fetchGooglePlaces = (searchStr: string) => {
  const req = fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchStr}&key=${process.env.EXPO_PUBLIC_API_KEY}`
  ).then((response) => response.json());

  return from(req);
};
