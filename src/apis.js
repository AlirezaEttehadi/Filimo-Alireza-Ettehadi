import axios from "axios";

export const getVideosRequest = () => {
  const response = axios.get("fa/v1/video/video/mostViewedVideos");
  return response;
};
