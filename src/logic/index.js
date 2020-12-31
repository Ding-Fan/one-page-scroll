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
          type: "awards",
          position: "left",
          imgUrl: require("~/src/attachments/images/冷门佳片.jpg"),
          header: "2020年冷门佳片",
          firstPlace: {
            name: "金丝雀",
            originalName: "Kanarie",
            rating: 7.7,
            description:
              "「这样的题材能拍得这么温柔也是绝了，和《三色堇》比起来走向完全相反，但是呈现出的效果却好太多；镜头语言丰富，长镜头很多，运镜很漂亮，分章讲述改编的真实故事，Per aspera ad astra 在电影中反复出现，亦可看作电影中男主性觉醒、身份认同的旅程，后半段有些混乱，但是整体完成度很高。」",
            source: "@Cavalier",
            link: "https://movie.douban.com/subject/30277127/",
          },
          rankList: [
            {
              ranking: 1,
              thumbnail: require("~/src/attachments/images/p2599833107.jpg"),
              name: "金丝雀",
              rating: 7.7,
              link: "https://movie.douban.com/subject/30277127/",
            },
            {
              ranking: 2,
              thumbnail: require("~/src/attachments/images/p2582432535.jpg"),
              name: "我们俩",
              rating: 7.7,
              link: "https://movie.douban.com/subject/34835822/",
            },
            {
              ranking: 3,
              thumbnail: require("~/src/attachments/images/p2623012852.jpg"),
              name: "和弗兰克叔叔上路",
              rating: 7.5,
              link: "https://movie.douban.com/subject/34907386/",
            },
            {
              ranking: 4,
              thumbnail: require("~/src/attachments/images/p2577512696.jpg"),
              name: "双郎",
              rating: 7.3,
              link: "https://movie.douban.com/subject/30259734/",
            },
            {
              ranking: 5,
              thumbnail: require("~/src/attachments/images/p2567847478.jpg"),
              name: "两只左脚的舞蹈",
              rating: 7.2,
              link: "https://movie.douban.com/subject/6862041/",
            },
          ],
        },
        {
          type: "awards",
          position: "right",
          imgUrl: require("~/src/attachments/images/最佳短片.jpg"),
          header: "2020年最佳短片",
          firstPlace: {
            name: "胆量计划",
            originalName: "The Dare Project",
            rating: 7.9,
            description:
              "「能看到这部短片的续集真的太圆满了！曾经的你们之间，是玩笑，是游戏。十五年的时间过去，你们都没有忘记那个夜晚，像是一个承诺，一个念想，你们终究不会相忘。当初，他有了勇气去爱你，现在，你给了他勇气去爱别人。」",
            source: "@AlanX",
            link: "https://movie.douban.com/subject/34843247/",
          },
          rankList: [
            {
              ranking: 1,
              thumbnail: require("~/src/attachments/images/p2569880427.jpg"),
              name: "胆量计划",
              rating: 7.9,
              link: "https://movie.douban.com/subject/34843247/",
            },
            {
              ranking: 2,
              thumbnail: require("~/src/attachments/images/p2593674795.jpg"),
              name: "他",
              rating: 7.9,
              link: "https://movie.douban.com/subject/34909159/",
            },
            {
              ranking: 3,
              thumbnail: require("~/src/attachments/images/p2612700567.jpg"),
              name: "回头见",
              rating: 7.7,
              link: "https://movie.douban.com/subject/35129787/",
            },
            {
              ranking: 4,
              thumbnail: require("~/src/attachments/images/p2573604320.jpg"),
              name: "希子的圣人们",
              rating: 7.6,
              link: "https://movie.douban.com/subject/34882992/",
            },
            {
              ranking: 5,
              thumbnail: require("~/src/attachments/images/p2599863078.jpg"),
              name: "亲亲",
              rating: 8.2,
              link: "https://movie.douban.com/subject/34481537/",
            },
          ],
        },
        {
          type: "awards",
          position: "left",
          imgUrl: require("~/src/attachments/images/最佳纪实类.jpg"),
          header: "2020年最佳纪实类",
          firstPlace: {
            name: "隐秘的爱",
            originalName: "A Secret Love",
            rating: 9.1,
            description:
              "「看了一眼进度条，我从2分钟开始哭，真的从头哭到尾，泪点密集到仿佛枪林弹雨。藏了整整65年啊，对满世界快乐奔跑的异性情侣来说，爱是天主赐福是伟大唱诵。但对她们来说，爱却是每封情书必须把右下角的署名撕掉，以防其中一个人出了意外，也不会被人发现她们的爱。去他妈的世界。」",
            source: "@糯木",
            link: "https://movie.douban.com/subject/34968314/",
          },
          rankList: [
            {
              ranking: 1,
              thumbnail: require("~/src/attachments/images/p2600111343.jpg"),
              name: "隐秘的爱",
              rating: 9.1,
              link: "https://movie.douban.com/subject/34968314/",
            },
            {
              ranking: 2,
              thumbnail: require("~/src/attachments/images/p2602939094.jpg"),
              name: "粉雄救兵 第五季",
              rating: 9.4,
              link: "https://movie.douban.com/subject/34437886/",
            },
            {
              ranking: 3,
              thumbnail: require("~/src/attachments/images/p2588172927.jpg"),
              name: "从暗到明：电视与彩虹史",
              rating: 9.4,
              link: "https://movie.douban.com/subject/34950039/",
            },
            {
              ranking: 4,
              thumbnail: require("~/src/attachments/images/p2582498379.jpg"),
              name: "欢迎来到车臣",
              rating: 8.6,
              link: "https://movie.douban.com/subject/34909084/",
            },
            {
              ranking: 5,
              thumbnail: require("~/src/attachments/images/p2613561588.jpg"),
              name: "二毛",
              rating: 8.3,
              link: "https://movie.douban.com/subject/33441821/",
            },
          ],
        },
        {
          type: "awards",
          position: "right",
          imgUrl: require("~/src/attachments/images/最佳动画类.jpg"),
          header: "2020年最佳动画类",
          firstPlace: {
            name: "鸣鸟不飞：乌云密布",
            originalName: "囀る鳥は羽ばたかない",
            rating: 8.2,
            description:
              "「很喜欢攻铁在采访里说的一句话。大意是，BL漫画为何是两个男人呢？和男女到底有什么不同呢？这也是她一直在思考的问题。日本是一个父权至上的国家，而这部作品里处处都是对父权的反抗。在我心里，除了纠结的爱以外，有了更重的内涵。」",
            source: "@怪化喵",
            link: "https://movie.douban.com/subject/33425932/",
          },
          rankList: [
            {
              ranking: 1,
              thumbnail: require("~/src/attachments/images/p2586787185.jpg"),
              name: "鸣鸟不飞：乌云密布",
              rating: 8.2,
              link: "https://movie.douban.com/subject/33425932/",
            },
            {
              ranking: 2,
              thumbnail: require("~/src/attachments/images/p2578721106.jpg"),
              name: "安达与岛村",
              rating: 9.1,
              link: "https://movie.douban.com/subject/33437323/",
            },
            {
              ranking: 3,
              thumbnail: require("~/src/attachments/images/p2612292145.jpg"),
              name: "世界第一初恋：求婚篇",
              rating: 8.1,
              link: "https://movie.douban.com/subject/34810454/",
            },
            {
              ranking: 4,
              thumbnail: require("~/src/attachments/images/p2614136659.jpg"),
              name: "前三",
              rating: 8.1,
              link: "https://movie.douban.com/subject/35143073/",
            },
            {
              ranking: 5,
              thumbnail: require("~/src/attachments/images/p2604756099.jpg"),
              name: "出柜",
              rating: 7.2,
              link: "https://movie.douban.com/subject/35076477/",
            },
          ],
        },
        {
          type: "awards",
          position: "left",
          imgUrl: require("~/src/attachments/images/最佳平权.jpg"),
          header: "2020年最佳平权",
          firstPlace: {
            name: "美国夫人",
            originalName: "Mrs. America",
            rating: 9.2,
            description:
              "「1971年的运动到现在在亚洲依然没有成功，看看鲍某的案件，N号房的案件。看看《余欢水》里塑造的女性、《夫妻的世界》里塑造的女性（更不要说《娘道》这种片子）；看看郑州疫情表彰宣传橱窗里只有一位女性代表硕果仅存、天猫总裁夫人微博宣战小三。 “姐姐来了”没有用，任何不从上层政策、法律法规开始改变的民间举动，都是随时会被404继而淹没在更新热搜之外。 亚洲女性的觉醒还早着呢！这倒车开得是油门踩到底了。」",
            source: "@小麦店店长",
            link: "https://movie.douban.com/subject/30366454/",
          },
          rankList: [
            {
              ranking: 1,
              thumbnail: require("~/src/attachments/images/p2591071133.jpg"),
              name: "美国夫人",
              rating: 9.2,
              link: "https://movie.douban.com/subject/30366454/",
            },
            {
              ranking: 2,
              thumbnail: require("~/src/attachments/images/p2554393520.jpg"),
              name: "然后我们跳了舞",
              rating: 7.9,
              link: "https://movie.douban.com/subject/30394484/",
            },
            {
              ranking: 3,
              thumbnail: require("~/src/attachments/images/p2593528124.jpg"),
              name: "真雄起",
              rating: 7.4,
              link: "https://movie.douban.com/subject/34955843/",
            },
            {
              ranking: 4,
              thumbnail: require("~/src/attachments/images/p2588172927.jpg"),
              name: "从暗到明：电视与彩虹史",
              rating: 9.4,
              link: "https://movie.douban.com/subject/34950039/",
            },
            {
              ranking: 5,
              thumbnail: require("~/src/attachments/images/p2582498379.jpg"),
              name: "欢迎来到车臣",
              rating: 8.6,
              link: "https://movie.douban.com/subject/34909084/",
            },
          ],
        },
        {
          type: "awards",
          position: "right",
          imgUrl: require("~/src/attachments/images/2021最受期待.jpg"),
          header: "2021年最受期待",
          firstPlace: {
            name: "性爱自修室 第三季",
            originalName: "Sex Education Season 3",
            rating: 0,
            description: "「看完只要一天，追它却等一年:(	」",
            source: "",
            link: "https://movie.douban.com/subject/34966169/",
          },
          rankList: [
            {
              ranking: 1,
              thumbnail: require("~/src/attachments/images/p2627044507.jpg"),
              name: "性爱自修室 第三季",
              rating: 0,
              link: "https://movie.douban.com/subject/34966169/",
            },
            {
              ranking: 2,
              thumbnail: require("~/src/attachments/images/p2586418907.jpg"),
              name: "穷途鼠的奶酪梦",
              rating: 0,
              link: "https://movie.douban.com/subject/30443686/",
            },
            {
              ranking: 3,
              thumbnail: require("~/src/attachments/images/p2607822901.jpg"),
              name: "在回家之后重新开始",
              rating: 0,
              link: "https://movie.douban.com/subject/35051438/",
            },
            {
              ranking: 4,
              thumbnail: require("~/src/attachments/images/p2617989427.jpg"),
              name: "亲爱的房客",
              rating: 0,
              link: "https://movie.douban.com/subject/35069520/",
            },
            {
              ranking: 5,
              thumbnail: require("~/src/attachments/images/p2626330066.jpg"),
              name: "以你的心诠释我的爱 第二季",
              rating: 0,
              link: "https://movie.douban.com/subject/35259422/",
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
