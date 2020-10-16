import React, { useState, useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.css";

import TopBar from "../top-bar/TopBar";
import PictureSlot from "../picture-slot/PictureSlot";
import Cover from "../blocks/cover/Cover";
import Awards from "../blocks/awards/Awards";
import Ending from "~/src/components/blocks/ending/Ending";
import ScrollTrigger from "@terwanerik/scrolltrigger";
import Shot from "~/src/components/blocks/shot/Shot";
// import useChangePictureSlotImage from "../../hooks/useChangePictureSlotImage";

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
      imgUrl: require("~/src/attachments/images/Fotolia_103149367_Subscription_L_1@1200x1200.jpg"),
      header: "9012年最好吃的炸鸡",
      firstPlace: {
        name: "真香炸鸡",
        originalName: "very pleasant fried chicken",
        rating: 9.2,
        people: 20202,
        description:
          "说到最美味的炸鸡，你一定首先想到的是肯德基的炸鸡吧，因为当下肯德基在国内比较流行，毕竟是开了那么多年的炸鸡品牌店，很多人都知道肯德基，也去吃过，但要说最美味的炸鸡，肯德基的炸鸡其实还排不到前列。",
        source: "不愿透露姓名的唐马儒先生",
      },
      rankList: [
        {
          ranking: 1,
          thumbnail: require("~/src/attachments/images/p2503644828.jpg"),
          name: "钓鱼🎣",
          rating: 6.2,
          link: "https://www.meiriyiwen.com/",
        },
        {
          ranking: 2,
          thumbnail: require("~/src/attachments/images/p2503644828.jpg"),
          name: "钓鱼🎣",
          rating: 9.2,
          link: "https://www.meiriyiwen.com/",
        },
        {
          ranking: 3,
          thumbnail: require("~/src/attachments/images/p2503644828.jpg"),
          name: "钓鱼🎣",
          rating: 3.2,
          link: "https://www.meiriyiwen.com/",
        },
      ],
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

  console.log("App here");

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
              return trigger.visible ? 0 : 0.4;
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
