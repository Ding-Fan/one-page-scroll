import React, { useState, useEffect } from "react";
import { useValues } from "kea";
import logic from "~/src/logic/index";

export default function PictureSlot() {
  // use throttle

  const [showPicture, setShowPicture] = useState("");
  const [vanish, setVanish] = useState(false);
  // function changePictureSlotImage(index) {
  //   setVanish(!vanish);
  //   setTimeout(() => {
  //     setImgSrc(blockContents[index].img);

  //     setTimeout(() => {
  //       setVanish(!vanish);
  //     }, 300);
  //   }, 600);
  // }

  const { pictureInPictureSlot } = useValues(logic);

  useEffect(() => {
    setVanish(true);

    setTimeout(() => {
      setShowPicture(pictureInPictureSlot);
    }, 300);

    return () => {};
  }, [pictureInPictureSlot]);

  function getResult() {
    if (showPicture) {
      return (
        <div className="picture-slot">
          <img
            onLoad={() => setVanish(false)}
            className={vanish ? "vanish" : ""}
            src={showPicture}
            alt="picture"
          />
          <div className="edge-shade"></div>
        </div>
      );
    } else {
      return <div className="picture-slot"></div>;
    }
  }

  return getResult();
}
