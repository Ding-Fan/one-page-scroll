import React, { useState, useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.css";

import TopBar from "../top-bar/TopBar";
import PictureSlot from "../picture-slot/PictureSlot";

import ScrollTrigger from "@terwanerik/scrolltrigger";
import Category from "~/src/components/category/Category";
import BlocksContainer from "~/src/components/blocks-container/BlocksContainer";
import { useDrawer } from "realayers";

import { Switch, Route, Link, useParams } from "react-router-dom";
// import useChangePictureSlotImage from "../../hooks/useChangePictureSlotImage";

import logic from "~/src/logic/index";
import { useActions, useValues } from "kea";

function App() {
  let { showing } = useParams();
  console.log("App here");
  const { toggleOpen, Drawer } = useDrawer();

  const { setPictureInPictureSlot } = useActions(logic);
  const { dataList } = useValues(logic);

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

      setPictureInPictureSlot(dataList[theElement.dataset.index].imgUrl);
    }
    // https://github.com/terwanerik/ScrollTrigger#options
    const trigger = new ScrollTrigger({
      trigger: {
        offset: {
          // Set an offset based on the elements position, returning an
          // integer = offset in px, float = offset in percentage of either
          // width (when setting the x offset) or height (when setting y)
          //
          // So setting an yOffset of 0.2 means 20% of the elements height,
          // the callback / class will be toggled when the element is 20%
          // in the viewport.
          element: {
            x: 0,
            y: (trigger, rect, direction) => {
              // You can add custom offsets according to callbacks, you
              // get passed the trigger, rect (DOMRect) and the scroll
              // direction, a string of either top, left, right or
              // bottom.
              return 0.5;
            },
          },
          // viewport: {
          //   x: 0,
          //   y: (trigger, frame, direction) => {
          //     // We check if the trigger is visible, if so, the offset
          //     // on the viewport is 0, otherwise it's 20% of the height
          //     // of the viewport. This causes the triggers to animate
          //     // 'on screen' when the element is in the viewport, but
          //     // don't trigger the 'out' class until the element is out
          //     // of the viewport.

          //     // This is the same as returning Math.ceil(0.2 * frame.h)
          //     return trigger.visible ? 0 : 0.4;
          //   },
          // },
        },
        once: false,
        toggle: {
          callback: {
            in: blockSeen,
          },
        },
      },
    });
    trigger.add("[data-trigger]");

    return () => {};
  }, []);

  return (
    <Switch>
      <Route path="/">
        <div className="container">
          {/* https://github.com/reaviz/realayers#drawer */}
          {/* desktop drawer */}
          <Drawer
            showCloseButton={false}
            position={"top"}
            className="desktop-drawer"
            size={"50%"}
          >
            <div
              onClick={() => {
                toggleOpen();
              }}
              className="close-drawer"
            >
              关闭
            </div>
            {/* <div>{getCategory()}</div> */}
            <Category />
          </Drawer>
          {/* mobile drawer */}
          {/* <Drawer
            showCloseButton={false}
            className='mobile-drawer'
            size={"70%"}
          >
            <div>
              <div
                onClick={() => {
                  toggleOpen();
                }}
                className='close-drawer'
              >
                关闭
              </div>
              {getCategory()}
            </div>
          </Drawer> */}
          <TopBar openDrawer={toggleOpen} />
          <PictureSlot />
          <BlocksContainer />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
