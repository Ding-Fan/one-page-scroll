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
      <div className="description">
        基于2020年中国大陆用户的豆瓣标记数据，排名依据评分评价人数和出资源时间等综合考虑（统计截至2021-01-01）
      </div>
    </div>
  );
}
