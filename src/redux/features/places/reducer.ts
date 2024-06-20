import { UnknownAction } from "redux";
import {
  CLEAR_PLACES,
  FETCH_FAILED,
  FETCH_PLACES,
  FETCH_SUCCESS,
} from "./action";

const initialState: { places: string[]; loading: boolean } = {
  places: [],
  loading: false,
};

const places = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case FETCH_PLACES:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        places: (action.payload as string[]) || [],
      };
    case FETCH_FAILED:
      return { ...state, loading: false };
    case CLEAR_PLACES:
      return { ...state, places: [] };
    default:
      return state;
  }
};

export default places;
