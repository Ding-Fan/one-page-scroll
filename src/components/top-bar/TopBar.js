import React, { useState } from "react";

function TopBar() {
  return (
    <div className='top-bar'>
      <div className='website-info'>
        <div className='logo'>😎</div>
        <div className='description'>电影榜单</div>
      </div>
      <div className='music-player'>music player</div>
    </div>
  );
}

export default TopBar;
