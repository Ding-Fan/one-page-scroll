import React from "react";
import logic from "~/src/logic/index";
import { useValues } from "kea";

export default function Reference({ index }) {
  const { referenceData } = useValues(logic);

  function onClick(newPage) {
    window.open(newPage, "_blank");
  }

  function getResult() {
    let result = referenceData.map((item, index) => {
      return (
        <div key={index} className="item" onClick={() => onClick(item.link)}>
          <span>{index + 1}.</span>
          <span>{item.title}</span>
        </div>
      );
    });

    return result;
  }

  return (
    <div
      data-trigger="reference"
      data-index={index}
      className="block reference"
    >
      <div className="header">参考与引用</div>
      {getResult()}
    </div>
  );
}
