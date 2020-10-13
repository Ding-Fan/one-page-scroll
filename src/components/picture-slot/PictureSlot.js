import React, { useState, useEffect } from "react";

export default function PictureSlot({ picture }) {
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

  useEffect(() => {
    setVanish(true);

    setTimeout(() => {
      setShowPicture(picture);
    }, 300);

    return () => {};
  }, [picture]);

  function getResult() {
    if (showPicture) {
      return (
        <div className='picture-slot'>
          <img
            onLoad={() => setVanish(false)}
            className={vanish ? "vanish" : ""}
            src={showPicture}
            alt='picture'
          />
          <div className='edge-shade'></div>
        </div>
      );
    } else {
      return <div className='picture-slot'></div>;
    }
  }

  return getResult();
}
