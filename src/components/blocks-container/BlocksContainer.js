import React from "react";
import logic from "~/src/logic";
import { useValues } from "kea";

import Cover from "../blocks/cover/Cover";
import Awards from "../blocks/awards/Awards";
import Shot from "~/src/components/blocks/shot/Shot";
import Reference from "~/src/components/blocks/reference/Reference";
import Ending from "~/src/components/blocks/ending/Ending";

export default function BlocksContainer() {
  const { dataList } = useValues(logic);

  let result = dataList.map((block, index) => {
    let showBlock;

    switch (block.type) {
      case "cover":
        showBlock = <Cover key={index} index={index} />;
        break;
      case "awards":
        showBlock = (
          <Awards
            key={index}
            index={index}
            header={block.header}
            firstPlace={block.firstPlace}
            position={block.position}
            rankList={block.rankList}
          />
        );
        break;
      case "shot":
        showBlock = (
          <Shot
            showImage={block.showImage}
            quote={block.quote}
            source={block.source}
            sourceLink={block.sourceLink}
            key={index}
            index={index}
          />
        );
        break;
      case "reference":
        showBlock = <Reference key={index} index={index} />;
        break;
      case "ending":
        showBlock = <Ending key={index} index={index} />;
        break;

      default:
        break;
    }
    return showBlock;
  });

  return result;
}
