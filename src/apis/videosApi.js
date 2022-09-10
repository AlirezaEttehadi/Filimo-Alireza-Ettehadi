import axios from "axios";

export const getVideosRequest = () => {
  return axios.get("fa/v1/video/video/mostViewedVideos");
};
