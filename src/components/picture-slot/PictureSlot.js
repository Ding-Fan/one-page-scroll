import React, { useState, useEffect } from "react";

export default function PictureSlot({ picture }) {
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
    }, 600);

    setTimeout(() => {
      setVanish(false);
    }, 1000);

    return () => {};
  }, [picture]);

  return (
    <div className='picture-slot'>
      <img className={vanish ? "vanish" : ""} src={showPicture} alt='picture' />
      <div className='edge-shade'></div>
    </div>
  );
}
