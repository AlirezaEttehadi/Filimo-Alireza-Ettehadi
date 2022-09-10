import { useEffect } from "react";
import { connect } from "react-redux";
import { useGetCenter } from "./hooks/useGetCenter";
import { getVideos } from "./redux/action";

const toggleAutoPlay = (element, center) => {
  const elementPosition = {
    top: element.getBoundingClientRect().top,
    bottom: element.getBoundingClientRect().bottom,
  };
  if (center.y > elementPosition.top && center.y < elementPosition.bottom) {
    element.play();
    element.autoplay = true;
    element.muted = true;
  } else {
    element.pause();
    element.autoplay = false;
    element.muted = false;
  }
};

function App({ videos, _getVideos }) {
  const center = useGetCenter();
  useEffect(() => {
    _getVideos();
  }, []);

  const changesThePlayStatusForEachElement = (element) => {
    toggleAutoPlay(element, center);
    window.addEventListener("scroll", () => {
      toggleAutoPlay(element, center);
    });
  };

  return (
    <>
      {videos?.map((video) => {
        return (
          <video
            ref={(element) => {
              if (!element) return;
              changesThePlayStatusForEachElement(element);
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
