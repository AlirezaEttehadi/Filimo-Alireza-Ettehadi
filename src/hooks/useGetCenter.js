import { useEffect, useState } from "react";

export const useGetCenter = () => {
  const [center, setCenter] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    setCenter({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
  }, []);
  return center;
};
