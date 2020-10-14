import React from "react";
import MusicPlayer from "~/src/components/top-bar/components/MusicPlayer";

function TopBar() {
  return (
    <div className='top-bar'>
      <div className='website-info'>
        <div className='logo'>😎</div>
        <div className='description'>电影榜单</div>
      </div>

      <MusicPlayer />
    </div>
  );
}

export default TopBar;
