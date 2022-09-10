import { useEffect } from "react";
import { connect } from "react-redux";
import { useGetCenter } from "./hooks/useGetCenter";
import { getVideos } from "./redux/action";

const toggleAutoPlay = (el, center) => {
  const elementPosition = {
    top: el.getBoundingClientRect().top,
    bottom: el.getBoundingClientRect().bottom,
  };
  if (center.y > elementPosition.top && center.y < elementPosition.bottom) {
    el.play();
    el.autoplay = true;
    el.muted = true;
  } else {
    el.pause();
    el.autoplay = false;
    el.muted = false;
  }
};

function App({ videos, _getVideos }) {
  const center = useGetCenter();
  useEffect(() => {
    _getVideos();
  }, []);

  const changesThePlayStatusForEachElement = (el) => {
    toggleAutoPlay(el, center);
    window.addEventListener("scroll", () => {
      toggleAutoPlay(el, center);
    });
  };

  return (
    <>
      {videos?.map((video) => {
        return (
          <video
            ref={(el) => {
              if (!el) return;
              changesThePlayStatusForEachElement(el);
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
