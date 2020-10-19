import React from "react";
import MusicPlayer from "~/src/components/top-bar/components/MusicPlayer";

function TopBar({ openDrawer }) {
  return (
    <div className='top-bar'>
      <div className='website-info'>
        <div className='logo'>😎</div>
        <div className='description'>电影榜单</div>
      </div>

      <MusicPlayer />
      <button onClick={openDrawer}>Open</button>
    </div>
  );
}

export default TopBar;
