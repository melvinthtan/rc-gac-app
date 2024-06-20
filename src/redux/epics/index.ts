import { Epic, combineEpics, ofType } from "redux-observable";
import {
  FETCH_FAILED,
  FETCH_PLACES,
  FETCH_SUCCESS,
} from "../features/places/action";
import { map, switchMap } from "rxjs";
import { fetchGooglePlaces } from "@/services";

const fetchPlacesEpic: Epic = (action$) =>
  action$.pipe(
    ofType(FETCH_PLACES),
    switchMap(({ payload }) => {
      return fetchGooglePlaces(payload).pipe(
        map((res) => {
          if (res.status === "OK") {
            const placesStr = res.predictions?.map(
              (prediction: any) => prediction.description
            );
            return { type: FETCH_SUCCESS, payload: placesStr };
          }

          return { type: FETCH_FAILED };
        })
      );
    })
  );

export default combineEpics(fetchPlacesEpic);
