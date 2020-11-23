import React from "react";
import logic from "~/src/logic/index";
import { useValues } from "kea";

export default function Cover({ index }) {
  const { coverPicture } = useValues(logic);

  return (
    <div data-trigger="cover" data-index={index} className="block cover">
      {/* <img
        // className={vanish ? "vanish" : ""}
        src={pictureInPictureSlot}
        alt="picture"
      /> */}
      <div className="picture">
        <img src={coverPicture} alt="picture" />
      </div>
      <div className="description">４月６日星期六。 －－那一天我失去了她。</div>
    </div>
  );
}
