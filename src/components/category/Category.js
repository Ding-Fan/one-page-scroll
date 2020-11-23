import React from "react";
import logic from "~/src/logic/index";
import { useActions, useValues } from "kea";

export default function Category() {
  const { dataList } = useValues(logic);
  const { setRollFilmIndex } = useActions(logic);

  // function scrollTool(block, index) {
  //   // https://robinvdvleuten.nl/blog/scroll-a-react-component-into-view/
  //   return () =>
  //     document
  //       .querySelector(`.${block.type}.block[data-index='${index}']`)
  //       .scrollIntoView();
  // }

  let category = dataList.map((block, index) => {
    let showCategory = (
      <div
        key={index}
        onClick={() => setRollFilmIndex(index)}
        className="category-name"
      >
        {block.header}
      </div>
    );

    return showCategory;
  });

  return category;
}
