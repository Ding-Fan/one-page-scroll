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
  dataList: [
    {
      type: "cover",
      imgUrl: require("/src/attachments/images/jack-atkinson-yRCLljFHJGQ-unsplash.jpg"),
    },
    {
      type: "content-right",
      imgUrl: require("/src/attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"),
    },
    {
      type: "content-right",
      imgUrl: require("/src/attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"),
    },
    {
      type: "content-right",
      imgUrl: require("/src/attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"),
    },
    {
      type: "shot",
      imgUrl: "",
      showImage: require("/src/attachments/images/yuka.jpg"),
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in.",
      source: "--haha",
    },
    {
      type: "ending",
      imgUrl: require("~/src/attachments/images/fiona-bowden-XvLRRaArUQg-unsplash.jpg"),
    },
  ],
};

function App() {
  const [appData, setAppData] = useState(appDataDefault);
  // const [picture, vanish] = useChangePictureSlotImage(0);
  console.log("App here");
  // console.log("picture", picture);
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
      newAppData["picture-slot"].picture =
        appData.dataList[theElement.dataset.index].imgUrl;

      setAppData(newAppData);
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

  function getResult() {
    let result = appData.dataList.map((block, index) => {
      let showBlock;

      switch (block.type) {
        case "cover":
          showBlock = <Cover key={index} index={index} />;
          break;
        case "content-right":
          showBlock = <ContentRight key={index} index={index} />;
          break;
        case "shot":
          showBlock = (
            <Shot
              showImage={block.showImage}
              quote={block.quote}
              source={block.source}
              key={index}
              index={index}
            />
          );
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

  return (
    <div className='container'>
      <TopBar />
      <PictureSlot picture={appData["picture-slot"].picture} />
      {getResult()}
    </div>
  );
}

export default App;
