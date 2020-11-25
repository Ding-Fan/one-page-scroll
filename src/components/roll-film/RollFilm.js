import React, { useState, useEffect, useCallback, useRef } from "react";
import logic from "~/src/logic";
import { useActions, useValues } from "kea";
import { useSpring, a } from "react-spring";
import { useGesture } from "react-use-gesture";

import Cover from "../blocks/cover/Cover";
import Awards from "../blocks/awards/Awards";
import Shot from "~/src/components/blocks/shot/Shot";
import Reference from "~/src/components/blocks/reference/Reference";
import Ending from "~/src/components/blocks/ending/Ending";

import Film from "~/src/components/roll-film/components/film/Film";

const debounce = require("lodash/debounce");

export default function RollFilm() {
  const [touchStartY, setTouchStartY] = useState(0);
  const { rollFilmIndex, dataList } = useValues(logic);
  const { setRollFilmIndex } = useActions(logic);
  const [props, setSpring, stop] = useSpring(() => ({
    transform: `translateY(0vh)`,
  }));

  const handleRolling = useCallback(
    (direction) => {
      if (
        (rollFilmIndex > dataList.length - 2 && direction > 0) ||
        (rollFilmIndex < 1 && direction < 0)
      ) {
        // console.log(`rollFilmIndex is ${rollFilmIndex}`);
        // console.log(`direction is ${direction}`);

        return;
      }

      let result = rollFilmIndex + direction;
      if (result < 1) {
        result = 0;
      }

      setRollFilmIndex(result);
    },
    [rollFilmIndex]
  );

  // const rollIt = useRef(0);

  const handleWheel = useCallback(
    debounce(({ deltaY }) => {
      if (deltaY > 0) {
        handleRolling(1);
      } else {
        handleRolling(-1);
      }
    }, 180),
    [rollFilmIndex]
  );

  useEffect(() => {
    const keyUpHandler = (event) => {
      console.log("on key up event", event);
      if (event.key === "ArrowDown") {
        handleRolling(1);
      } else if (event.key === "ArrowUp") {
        handleRolling(-1);
      }
    };
    document.addEventListener("keyup", keyUpHandler);

    setSpring({ transform: `translateY(-${rollFilmIndex * 100}vh)` });
    // console.log(`useEffect rollFilmIndex is ${rollFilmIndex}`);
    // console.log("props", props);

    return () => document.removeEventListener("keyup", keyUpHandler);
  }, [setSpring, rollFilmIndex]);

  useGesture(
    {
      // onWheel: (state) => {
      //   console.log("onWheel state", state);
      //   if (state.last) {
      //     handleRolling(state.direction[1]);
      //   }
      // },
      // handle about touch on mobile
      // https://stackoverflow.com/a/22257774
      // chrome on android remote debug
      // https://developers.google.com/web/tools/chrome-devtools/remote-debugging
      onTouchStart: ({ event }) => {
        const value = event.changedTouches[0].clientY;
        setTouchStartY(value);
        // console.log("set touch start y", value);
      },
      onTouchEnd: ({ event }) => {
        const touchEndY = event.changedTouches[0].clientY;
        // console.log("set touch end y", touchEndY);
        if (touchStartY > touchEndY + 5) {
          handleRolling(1);
        } else if (touchStartY < touchEndY - 5) {
          handleRolling(-1);
        }
      },
      // onKeyUp: (state) => {
      //   console.log("state", state);
      //   state.event.preventDefault();
      //   // keyUpHandler(state.event);

      //   hahaTest();
      // },
    },
    {
      domTarget: window,
      // wheel: {
      // threshold: 2,
      // },
    }
  );

  let result = dataList.map((block, index) => {
    let showBlock;

    switch (block.type) {
      case "cover":
        showBlock = (
          <Film key={index} image={block.imgUrl}>
            <Cover index={index} />
          </Film>
        );
        break;
      case "awards":
        showBlock = (
          <Film key={index} image={block.imgUrl}>
            <Awards
              index={index}
              header={block.header}
              firstPlace={block.firstPlace}
              position={block.position}
              rankList={block.rankList}
            />
          </Film>
        );
        break;
      case "shot":
        showBlock = (
          <Film key={index} image={block.imgUrl}>
            <Shot
              showImage={block.showImage}
              quote={block.quote}
              source={block.source}
              sourceLink={block.sourceLink}
              index={index}
            />
          </Film>
        );
        break;
      case "reference":
        showBlock = (
          <Film key={index} image={block.imgUrl}>
            <Reference index={index} />
          </Film>
        );
        break;
      case "ending":
        showBlock = (
          <Film key={index} image={block.imgUrl}>
            <Ending index={index} />
          </Film>
        );
        break;

      default:
        break;
    }
    return showBlock;
  });

  return (
    <div onWheel={handleWheel} className="roll-film">
      <a.div style={props} className="box">
        {result}
      </a.div>
    </div>
  );
}
