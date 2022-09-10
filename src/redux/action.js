import { GET_VIDEOS, SET_VIDEOS } from "./constants";

export const getVideos = () => {
  return {
    type: GET_VIDEOS,
  };
};
export const setVideos = (data) => {
  return {
    type: SET_VIDEOS,
    payload: data,
  };
};
