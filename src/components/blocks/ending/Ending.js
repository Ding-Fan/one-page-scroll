import React from 'react'
import Button from '~/src/components/blocks/ending/components/Button'

export default function Ending({ index }) {
  function onClick(newPage) {
    window.open(newPage, '_blank')
  }
  return (
    <div data-trigger="ending" data-index={index} className="block ending">
      <div className="title">
        <img
          src={require('~/src/attachments/images/封底END图标.png')}
          alt="END"
        />
      </div>
      <div className="text">
        <div className="sentence">再见，2020</div>
        <div className="sentence">愿病毒尽快销声匿迹</div>
        <div className="sentence">愿酷儿故事不断大放异彩</div>
        <div className="sentence">下一段酷儿光影之旅</div>
        <div className="sentence">我们将继续共同见证</div>
      </div>
      {/* <div className="buttons">
        <Button text={'变得更加完整'} link={'https://www.yinwang.org'} />
        <Button text={'变得更加完整'} link={'https://www.yinwang.org'} />
        <Button text={'变得更加完整'} link={'https://www.yinwang.org'} />
      </div> */}
      <div className="qrcode">
        <img
          src={require('~/src/attachments/images/封底图标.png')}
          alt="QR Code"
          onClick={() => onClick('https://t.me/s/seequeer')}
        />
      </div>
      <div className="footer">
        <div>
          部分内容引自QAF中文站
          <a href="https://www.douban.com/note/788691899/" target="_blank">
            2020年同志电影年度报告
          </a>
          ，感谢！
        </div>

        <div>感谢 网页制作者： Ding 、美工：马达 的辛勤努力！</div>

        {/* https://www.the-qrcode-generator.com/ */}
        {/* <div className='qr-code'>
          <img
            src={require("~/src/attachments/images/qrcode.png")}
            alt='QR Code'
          />
        </div>
        <div className='description'>description</div> */}
      </div>
    </div>
  )
}
