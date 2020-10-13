import React from "react";
import Button from "./Button";

export default function Ending() {
  return (
    <div data-trigger='ending' className='block ending'>
      <div className='title'>FIN</div>
      <div className='text'>
        每一部电影都是生活的延伸 而正因为你的每一次评分，豆瓣电影才变得更加完整
        感谢有你，2018年我们将继续相伴
      </div>
      <div className='buttons'>
        <Button text={"变得更加完整"} link={"https://www.yinwang.org"} />
        <Button text={"变得更加完整"} link={"https://www.yinwang.org"} />
        <Button text={"变得更加完整"} link={"https://www.yinwang.org"} />
      </div>
      <div className='footer'>
        <div className='qr-code'>
          {/* https://www.the-qrcode-generator.com/ */}
          <img
            src={require("~/src/attachments/images/qrcode.png")}
            alt='QR Code'
          />
        </div>
        <div className='description'>description</div>
      </div>
    </div>
  );
}
