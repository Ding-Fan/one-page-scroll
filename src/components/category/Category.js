import React from "react";
import logic from "~/src/logic/index";
import { useValues } from "kea";

export default function Category() {
  const { dataList } = useValues(logic);

  function scrollTool(block, index) {
    // https://robinvdvleuten.nl/blog/scroll-a-react-component-into-view/
    return () =>
      document
        .querySelector(`.${block.type}.block[data-index='${index}']`)
        .scrollIntoView();
  }

  let category = dataList.map((block, index) => {
    let showCategory = (
      <div
        key={index}
        onClick={() => scrollTool(block, index)()}
        className="category-name"
      >
        {block.header}
      </div>
    );

    return showCategory;
  });

  return category;
}
