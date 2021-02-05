import React from 'react'

export default function FilmVideo({ children }) {
  // console.log(image);
  return (
    <div className="film-video">
      {children}
      <video className="video" autoPlay muted loop>
        <source
          src={require('/src/attachments/videos/首屏混剪800k.mp4')}
          type="video/mp4"
        />
      </video>
    </div>
  )
}
