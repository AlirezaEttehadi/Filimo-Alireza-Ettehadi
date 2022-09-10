import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getVideos } from "./action";

const toggleAutoPlay = (el, center) => {
  const elementPosition = {
    top: el.getBoundingClientRect().top,
    bottom: el.getBoundingClientRect().bottom,
  };
  if (center.y > elementPosition.top && center.y < elementPosition.bottom) {
    el.autoplay = true;
    el.muted = true;
  } else {
    el.autoplay = false;
    el.muted = false;
  }
};

function App({ videos, _getVideos }) {
  const [center, setCenter] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    _getVideos();
    setCenter({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
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
