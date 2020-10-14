import React from "react";

export default function Cover({ index }) {
  return (
    <div data-trigger='cover' data-index={index} className='block cover'>
      <div className='picture'>
        <img
          src={require("~/src/attachments/images/9bed9658634281e6128aa6f2979a7944.png")}
          alt='picture'
        />
      </div>
      <div className='description'>４月６日星期六。 －－那一天我失去了她。</div>
    </div>
  );
}
