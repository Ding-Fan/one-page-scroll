import React, { useState, useEffect } from "react";

import TopBar from "../top-bar/TopBar";
import PictureSlot from "../picture-slot/PictureSlot";
import Cover from "../blocks/cover/Cover";
import ContentRight from "../blocks/content-right/ContentRight";
import Ending from "~/src/components/blocks/ending/Ending";
import ScrollTrigger from "@terwanerik/scrolltrigger";
import Shot from "~/src/components/blocks/shot/Shot";
import useChangePictureSlotImage from "../../hooks/useChangePictureSlotImage";

const appDataDefault = {
  "picture-slot": {
    picture: require("/src/attachments/images/jack-atkinson-yRCLljFHJGQ-unsplash.jpg"),
  },
  cover: {
    imgUrl: require("/src/attachments/images/jack-atkinson-yRCLljFHJGQ-unsplash.jpg"),
  },
  "content-right": {
    imgUrl: require("/src/attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"),
  },
  shot: {
    imgUrl: require("/src/attachments/images/yuka.jpg"),
  },
  ending: {
    imgUrl: require("~/src/attachments/images/fiona-bowden-XvLRRaArUQg-unsplash.jpg"),
  },
};

function App() {
  const [appData, setAppData] = useState(appDataDefault);
  // const [imgSrc, vanish] = useChangePictureSlotImage(0);
  console.log("App here");
  // console.log("imgSrc", imgSrc);
  // console.log("vanish", vanish);

  useEffect(() => {
    function blockSeen(trigger) {
      const theElement = trigger.element;

      if (!theElement.hasAttribute("data-trigger")) {
        return;
      }

      const blockType = theElement.getAttribute("data-trigger");
      console.log("blockType: ", blockType);
      console.log("theElement: ", theElement);

      // if (blockType !== "cover") {
      let newAppData = { ...appData };
      console.log("newAppData: ", newAppData);
      // need deep clone?
      newAppData["picture-slot"].picture = appData[blockType].imgUrl;

      setAppData(newAppData);

      // switch (blockType) {
      //   case "cover":
      //     // theElement.setAttribute("src", appData.cover.imgUrl);
      //     break;
      //   case "content-right":
      //     theElement.setAttribute("src", appData[blockType].imgUrl);
      //     break;

      //   default:
      //     break;
      // }
    }

    const trigger = new ScrollTrigger();
    trigger.add("[data-trigger]", {
      toggle: {
        callback: {
          in: blockSeen,
        },
      },
    });

    return () => {};
  }, []);
  return (
    <div className='container'>
      <TopBar />
      <PictureSlot picture={appData["picture-slot"].picture} />
      <Cover />
      <ContentRight />
      <Shot />
      <Ending />
    </div>
  );
}

export default App;
