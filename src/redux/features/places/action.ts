export const FETCH_PLACES = "places/fetch";
export const FETCH_SUCCESS = "places/fetchSuccess";
export const FETCH_FAILED = "places/fetchFailed";
export const CLEAR_PLACES = "places/clear";

export const fetchPlaces = (payload: string) => ({
  type: FETCH_PLACES,
  payload,
});

export const fetchPlacesSuccess = (payload: string[]) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchPlacesFailed = (payload: string[]) => ({
  type: FETCH_FAILED,
  payload,
});

export const clearPlaces = () => ({ type: CLEAR_PLACES });
