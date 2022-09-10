import { useEffect } from "react";
import { connect } from "react-redux";
import { useGetCenter } from "./hooks/useGetCenter";
import { getVideos } from "./redux/action";
import { changeVideoPlayStatus } from "./utils/changeVideoPlayStatus";

function App({ videos, _getVideos }) {
  const center = useGetCenter();
  useEffect(() => {
    _getVideos();
  }, []);

  return (
    <>
      {videos?.map((video) => {
        return (
          <video
            ref={(element) => {
              if (!element) return;
              changeVideoPlayStatus(element, center);
            }}
            width="320"
            height="240"
            controls
          >
            <source src={video.attributes.preview_src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return { videos: state.videos };
}

function mapDispatchToProps(dispatch) {
  return {
    _getVideos: () => dispatch(getVideos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
