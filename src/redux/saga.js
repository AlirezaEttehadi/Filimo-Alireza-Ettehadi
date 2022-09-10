import { call, put, takeLatest } from "redux-saga/effects";
import { setVideos } from "./action";
import { GET_VIDEOS } from "./constants";
import { getVideosRequest } from "../apis/videosApi";

function* getVideosSaga() {
  try {
    const videos = yield call(getVideosRequest);
    yield put(setVideos(videos.data.data));
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest(GET_VIDEOS, getVideosSaga);
}

export default mySaga;
