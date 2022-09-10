import { useEffect } from "react";
import { connect } from "react-redux";

import { getVideos } from "./redux/action";
import Videos from "./components/Videos";

function App({ videos, _getVideos }) {
  useEffect(() => {
    _getVideos();
  }, []);

  return (
    <div>
      <Videos videos={videos} />
    </div>
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
