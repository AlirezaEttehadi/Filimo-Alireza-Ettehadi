export const changeVideoPlayStatus = (element, center) => {
  const toggleAutoPlay = () => {
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
  toggleAutoPlay();
  window.addEventListener("scroll", () => {
    toggleAutoPlay();
  });
};
