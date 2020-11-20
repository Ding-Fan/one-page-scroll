import { kea } from "kea";

const logic = kea({
  actions: {
    setPictureInPictureSlot: (picture) => ({ picture }),
    increment: (amount) => ({ amount }),
    setCounter: (counter) => ({ counter }),
    reset: true,
  },
  reducers: {
    counter: [
      0,
      {
        increment: (state, { amount }) => state + amount,
        setCounter: (_, { counter }) => counter,
        reset: () => 0,
      },
    ],
    pictureInPictureSlot: [
      "",
      {
        setPictureInPictureSlot: (_, { picture }) => picture,
      },
    ],
    dataList: [
      [
        {
          type: "cover",
          header: "封面",
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
          header: "若喝水出现了",
          imgUrl: "",
          showImage: require("/src/attachments/images/yuka.jpg"),
          quote: "生活中，若喝水出现了，我们就不得不考虑它出现了的事实。",
          source: "--haha",
          sourceLink: "https://www.meiriyiwen.com/",
        },
        {
          type: "ending",
          header: "结束",
          imgUrl: require("~/src/attachments/images/fiona-bowden-XvLRRaArUQg-unsplash.jpg"),
        },
      ],
      {},
    ],
  },
});

export default logic;
