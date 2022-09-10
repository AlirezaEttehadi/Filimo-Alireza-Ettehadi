import { SET_VIDEOS } from "./constants";

const initialState = {
  videos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};

export default reducer;
