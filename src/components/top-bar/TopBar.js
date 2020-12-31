import React from "react";
import MusicPlayer from "~/src/components/top-bar/components/MusicPlayer";

function TopBar({ openDrawer }) {
  return (
    <div className="top-bar">
      <div className="website-info">
        {/* <div className='logo'>😎</div> */}
        <div className="description">
          <a href="https://t.me/seequeer" target="_blank">
            酷儿影视频道
          </a>
          年度榜单
        </div>
      </div>

      <MusicPlayer />
      <div onClick={openDrawer} className="category">
        目录
      </div>
    </div>
  );
}

export default TopBar;
