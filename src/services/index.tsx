import { from } from "rxjs";

export const fetchGooglePlaces = (searchStr: string) => {
  const req = fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchStr}&key=AIzaSyBNj43rGiaIj2uhzqAC5t7mL--uc8AxE_Q`
  ).then((response) => response.json());

  return from(req);
};
