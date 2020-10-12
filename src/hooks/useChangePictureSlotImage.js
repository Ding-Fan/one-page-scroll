import { useState, useEffect } from "react";

const blockContents = [
  {
    header: "",
    img: "",
  },
  {
    header: "mountain",
    img: require("~/src/attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"),
  },
  {
    header: "motorbike",
    img: require("~/src/attachments/images/jack-atkinson-yRCLljFHJGQ-unsplash.jpg"),
  },
];

export default function useChangePictureSlotImage(index) {
  const [vanish, setVanish] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    "~/src/attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"
  );

  useEffect(() => {
    setVanish(!vanish);
    setTimeout(() => {
      setImgSrc(blockContents[index].img);

      setTimeout(() => {
        setVanish(!vanish);
      }, 300);
    }, 600);
    return () => {};
  }, [index]);

  return [imgSrc, vanish];
}
