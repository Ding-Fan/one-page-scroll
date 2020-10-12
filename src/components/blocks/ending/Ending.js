import React from "react";
import Button from "./Button";

export default function Ending() {
  return (
    <div data-trigger='ending' className='block ending'>
      <div className='title'>title</div>
      <div className='text'>asdf;asdj;f asdfasdf wet asdf</div>
      <div className='buttons'>
        <Button text={"hasdfhasdf"} link={"https://www.yinwang.org"} />
        <Button text={"hasdfhasdf"} link={"https://www.yinwang.org"} />
        <Button text={"hasdfhasdf"} link={"https://www.yinwang.org"} />
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
