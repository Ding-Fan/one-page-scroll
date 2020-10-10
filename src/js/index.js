import "../scss/index.scss";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const pictureSlotImage = document.querySelector(".picture-slot > img");

const blockContents = [
  {
    header: "",
    img: "",
  },
  {
    header: "mountain",
    img: require("../attachments/images/jamison-riley-EWCf5Qpqd3E-unsplash.jpg"),
  },
  {
    header: "motorbike",
    img: require("../attachments/images/jack-atkinson-yRCLljFHJGQ-unsplash.jpg"),
  },
];

let contentIndex = 0;

function changePictureSlotImage() {
  pictureSlotImage.classList.toggle("vanish");
  setTimeout(() => {
    pictureSlotImage.src = blockContents[contentIndex].img;

    setTimeout(() => {
      pictureSlotImage.classList.toggle("vanish");
    }, 300);
  }, 600);
}

document.addEventListener("aos:in:block-two", ({ detail }) => {
  console.log("aos:in:block-two", detail);
  contentIndex = 1;
  changePictureSlotImage();
});

document.addEventListener("aos:in:block-three", ({ detail }) => {
  console.log("aos:in:block-three", detail);
  contentIndex = 2;
  changePictureSlotImage();
});

document.addEventListener("aos:out:block-two", ({ detail }) => {
  console.log("aos:out:block-two", detail);
});
