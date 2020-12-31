import { kea } from "kea";

const logic = kea({
  actions: {
    setRollFilmIndex: (number) => ({ number }),
  },
  reducers: {
    rollFilmIndex: [
      0,
      {
        setRollFilmIndex: (_, { number }) => number,
      },
    ],
    dataList: [
      [
        {
          type: "cover",
          header: "封面",
          imgUrl: "",
          coverPicture: require("~/src/attachments/images/p1489.jpg"),
        },
        {
          type: "awards",
          position: "left",
          imgUrl: require("~/src/attachments/images/最佳影片.jpg"),
          header: "2020年最佳影片",
          firstPlace: {
            name: "燃烧女子的肖像",
            originalName: "Portrait de la jeune fille en feu",
            rating: 8.6,
            description:
              "「最后那一幕，不就是正在影院无声流泪的自己吗。看与被看之间，皆是情欲，皆是妄念。再次印证，深情即是一场悲剧。」",
            source: "@千寻",
            link: "https://movie.douban.com/subject/30257175/",
          },
          rankList: [
            {
              ranking: 1,
              thumbnail: require("~/src/attachments/images/p2568318727.jpg"),
              name: "燃烧女子的肖像",
              rating: 8.6,
              link: "https://movie.douban.com/subject/30257175/",
            },
            {
              ranking: 2,
              thumbnail: require("~/src/attachments/images/p2594916975.jpg"),
              name: "真心半解",
              rating: 8,
              link: "https://movie.douban.com/subject/33420285/",
            },
            {
              ranking: 3,
              thumbnail: require("~/src/attachments/images/p2571774021.jpg"),
              name: "致允熙",
              rating: 8.3,
              link: "https://movie.douban.com/subject/30488003/",
            },
            {
              ranking: 4,
              thumbnail: require("~/src/attachments/images/p2587583674.jpg"),
              name: "与爱同居之永恒的爱",
              rating: 8.4,
              link: "https://movie.douban.com/subject/34951277/",
            },
            {
              ranking: 5,
              thumbnail: require("~/src/attachments/images/p2562967550.jpg"),
              name: "再见，妈妈",
              rating: 8.1,
              link: "https://movie.douban.com/subject/34608294/",
            },
            {
              ranking: 6,
              thumbnail: require("~/src/attachments/images/p2554393520.jpg"),
              name: "然后我们跳了舞",
              rating: 7.9,
              link: "https://movie.douban.com/subject/30394484/",
            },
            {
              ranking: 7,
              thumbnail: require("~/src/attachments/images/p2588031096.jpg"),
              name: "叔·叔",
              rating: 7.7,
              link: "https://movie.douban.com/subject/33428622/",
            },
            {
              ranking: 8,
              thumbnail: require("~/src/attachments/images/p2595496750.jpg"),
              name: "分租",
              rating: 7.9,
              link: "https://movie.douban.com/subject/33408026/",
            },
            {
              ranking: 9,
              thumbnail: require("~/src/attachments/images/p2580347406.jpg"),
              name: "要强的人",
              rating: 7.5,
              link: "https://movie.douban.com/subject/35028505/",
            },
            {
              ranking: 10,
              thumbnail: require("~/src/attachments/images/p2617989427.jpg"),
              name: "亲爱的房客",
              rating: 7.9,
              link: "https://movie.douban.com/subject/34461680/",
            },
          ],
        },
        {
          type: "awards",
          position: "right",
          imgUrl: require("~/src/attachments/images/最佳剧集.jpg"),
          header: "2020年最佳剧集",
          firstPlace: {
            name: "以你的心诠释我的爱",
            originalName: "แปลรักฉันด้วยใจเธอ",
            rating: 9.3,
            description:
              "「我不敢在阳光下吻你，所以平静的海面下有了最汹涌的爱意」",
            source: "",
            link: "https://movie.douban.com/subject/34979008/",
          },
          rankList: [
            {
              ranking: 1,
              thumbnail: require("~/src/attachments/images/p2622131925.jpg"),
              name: "以你的心诠释我的爱",
              rating: 9.3,
              link: "https://movie.douban.com/subject/34979008/",
            },
            {
              ranking: 2,
              thumbnail: require("~/src/attachments/images/p2588072875.jpg"),
              name: "性爱自修室 第二季",
              rating: 9.1,
              link: "https://movie.douban.com/subject/30438115/",
            },
            {
              ranking: 3,
              thumbnail: require("~/src/attachments/images/p2622449274.jpg"),
              name: "到了30岁还是处男，似乎会变成魔法师",
              rating: 9.1,
              link: "https://movie.douban.com/subject/35201416/",
            },
            {
              ranking: 4,
              thumbnail: require("~/src/attachments/images/p2619759527.jpg"),
              name: "17.3 关于性",
              rating: 9.2,
              link: "https://movie.douban.com/subject/35202302/",
            },
            {
              ranking: 5,
              thumbnail: require("~/src/attachments/images/p2593033597.jpg"),
              name: "杀死伊芙 第三季",
              rating: 8.4,
              link: "https://movie.douban.com/subject/32509356/",
            },
            {
              ranking: 6,
              thumbnail: require("~/src/attachments/images/p2599876441.jpg"),
              name: "你的目光所及之处",
              rating: 8.4,
              link: "https://movie.douban.com/subject/35047667/",
            },
            {
              ranking: 7,
              thumbnail: require("~/src/attachments/images/p2610109571.jpg"),
              name: "游戏男孩",
              rating: 9,
              link: "https://movie.douban.com/subject/35113838/",
            },
            {
              ranking: 8,
              thumbnail: require("~/src/attachments/images/p2585306442.jpg"),
              name: "你好，德古拉",
              rating: 8.5,
              link: "https://movie.douban.com/subject/34925495/",
            },
            {
              ranking: 9,
              thumbnail: require("~/src/attachments/images/p2616272607.jpg"),
              name: "拉契特 第一季",
              rating: 8.1,
              link: "https://movie.douban.com/subject/27132299/",
            },
            {
              ranking: 10,
              thumbnail: require("~/src/attachments/images/p2620387464.jpg"),
              name: "丹斯",
              rating: 8.3,
              link: "https://movie.douban.com/subject/34898373/",
            },
          ],
        },

        {
          type: "shot",
          header: "真心半解1",
          imgUrl: "",
          showImage: require("/src/attachments/images/p2617989427.jpg"),
          quote: "引力是物质对孤独的反应",
          source: "——《真心半解》",
          sourceLink: "https://movie.douban.com/subject/33420285/",
        },
        {
          type: "shot",
          header: "再见，妈妈1",
          imgUrl: "",
          showImage: require("/src/attachments/images/p2617989427.jpg"),
          quote: "你把你的爱人介绍给你的家人，这怎么能是错呢？",
          source: "——《再见，妈妈》",
          sourceLink: "https://movie.douban.com/subject/34608294/",
        },
        {
          type: "reference",
          header: "参考与引用",
          imgUrl: "",
          referenceList: [
            {
              title: "阿保刚阿保刚阿保刚阿保刚阿保刚阿保刚",
              link:
                "https://zh.wikipedia.org/zh-cn/%E9%98%BF%E4%BF%9D%E5%89%9B",
            },
            {
              title: "阿保刚阿保刚阿保刚阿保刚阿保刚阿保刚",
              link:
                "https://zh.wikipedia.org/zh-cn/%E9%98%BF%E4%BF%9D%E5%89%9B",
            },
            {
              title: "阿保刚阿保刚阿保刚阿保刚阿保刚阿保刚",
              link:
                "https://zh.wikipedia.org/zh-cn/%E9%98%BF%E4%BF%9D%E5%89%9B",
            },
            {
              title: "阿保刚阿保刚阿保刚阿保刚阿保刚阿保刚",
              link:
                "https://zh.wikipedia.org/zh-cn/%E9%98%BF%E4%BF%9D%E5%89%9B",
            },
          ],
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
  selectors: {
    referenceData: [
      (selectors) => [selectors.dataList],
      (dataList) => {
        const theData = dataList.filter((item) => item.type === "reference");
        return theData[0].referenceList;
      },
    ],
    coverPicture: [
      (selectors) => [selectors.dataList],
      (dataList) => {
        const theData = dataList.filter((item) => item.type === "cover");
        return theData[0].coverPicture;
      },
    ],
  },
});

export default logic;
