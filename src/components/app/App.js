import React, { useState, useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.css";

import TopBar from "../top-bar/TopBar";
import PictureSlot from "../picture-slot/PictureSlot";
import Cover from "../blocks/cover/Cover";
import Awards from "../blocks/awards/Awards";
import Ending from "~/src/components/blocks/ending/Ending";
import ScrollTrigger from "@terwanerik/scrolltrigger";
import Shot from "~/src/components/blocks/shot/Shot";
import useChangePictureSlotImage from "../../hooks/useChangePictureSlotImage";

const appDataDefault = {
  "picture-slot": {
    picture: "",
  },
  dataList: [
    {
      type: "cover",
      imgUrl: require("/src/attachments/images/3c550e0c211fc613cc6ea50b88bffc0c.png"),
    },
    {
      type: "awards",
      position: "left",
      imgUrl: require("/src/attachments/images/compat-210091.jpg"),
      header: "优夏优夏优夏优夏",
      firstTitle: "钓鱼🎣",
    },
    {
      type: "awards",
      position: "right",
      imgUrl: require("/src/attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"),
    },
    {
      type: "awards",
      position: "left",
      imgUrl: require("/src/attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"),
    },
    {
      type: "shot",
      imgUrl: "",
      showImage: require("/src/attachments/images/yuka.jpg"),
      quote: "生活中，若喝水出现了，我们就不得不考虑它出现了的事实。",
      source: "--haha",
      sourceLink: "https://www.meiriyiwen.com/",
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
    // https://github.com/terwanerik/ScrollTrigger#options
    const trigger = new ScrollTrigger({
      trigger: {
        offset: {
          viewport: {
            x: 0,
            y: (trigger, frame, direction) => {
              // We check if the trigger is visible, if so, the offset
              // on the viewport is 0, otherwise it's 20% of the height
              // of the viewport. This causes the triggers to animate
              // 'on screen' when the element is in the viewport, but
              // don't trigger the 'out' class until the element is out
              // of the viewport.

              // This is the same as returning Math.ceil(0.2 * frame.h)
              return trigger.visible ? 0 : 0.2;
            },
          },
        },
      },
    });
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
        case "awards":
          showBlock = (
            <Awards
              key={index}
              index={index}
              header={block.header}
              firstTitle={block.firstTitle}
              position={block.position}
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
