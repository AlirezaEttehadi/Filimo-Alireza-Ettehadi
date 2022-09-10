import { useGetCenter } from "../hooks/useGetCenter";
import { changeVideoPlayStatus } from "../utils/changeVideoPlayStatus";

function Videos({ videos }) {
  const center = useGetCenter();

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

export default Videos;
