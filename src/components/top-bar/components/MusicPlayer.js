import React, { useState, useEffect, useRef } from 'react'
import { Howl, Howler } from 'howler'

import ZiYouZhiQiu from '~/src/attachments/musics/自由之丘 - JINBAO.mp4'
import SpringFever from '~/src/attachments/musics/Spring Fever - Peyman Yazdanian.mp4'

let tracks = [
  {
    title: 'Spring Fever - Peyman Yazdanian',
    file: SpringFever,
    howl: null,
  },
  {
    title: '自由之丘 - JINBAO',
    file: ZiYouZhiQiu,
    howl: null,
  },
]

export default function MusicPlayer() {
  const playing = useRef(0)
  const [currentState, setCurrentState] = useState('paused')

  /**
   * Skip to the next or previous track.
   * @param  {String} direction 'next' or 'prev'.
   */
  function skip(direction) {
    console.log('playing', playing.current)
    let willPlay = 0
    // Get the next track based on the direction of the track.
    if (direction === 'prev') {
      if (playing.current <= 0) {
        willPlay = tracks.length - 1
      } else {
        willPlay = playing.current - 1
      }
    } else if (direction === 'next') {
      if (playing.current >= tracks.length - 1) {
        willPlay = 0
      } else {
        willPlay = playing.current + 1
      }
    }

    console.log('willPlay: ', willPlay)

    skipTo(willPlay)
  }

  /**
   * Skip to a specific track based on its playlist index.
   */
  function skipTo(willPlay) {
    // Stop the current track.
    if (tracks[playing.current].howl) {
      tracks[playing.current].howl.stop()
    }

    // Reset progress.
    // progress.style.width = "0%";

    // Play the new track.
    play(willPlay)
  }

  function pause() {
    // Get the Howl we want to manipulate.
    let sound = tracks[playing.current].howl

    // Puase the sound.
    sound.pause()

    // Show the play button.
    setCurrentState('paused')
    // playBtn.style.display = 'block';
    // pauseBtn.style.display = 'none';
  }

  /**
   * Play a song in the playlist.
   * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
   */
  function play(willPlay) {
    loadMusic(willPlay)
    let sound = tracks[willPlay].howl
    // Begin playing the sound.
    sound.play()

    // Update the track display.
    // track.innerHTML = index + 1 + ". " + track.title;

    // Show the pause button.
    if (sound.state() === 'loaded') {
      // playBtn.style.display = "none";
      // pauseBtn.style.display = "block";
      setCurrentState('playing')
    } else {
      // loading.style.display = "block";
      // playBtn.style.display = "none";
      // pauseBtn.style.display = "none";
      setCurrentState('loading')
    }

    // Keep track of the index we are currently playing.
    // self.index = index;
    playing.current = willPlay
    console.log('did set playing')
  }

  function loadMusic(willPlay) {
    let track = tracks[willPlay]

    // If we already loaded this track, use the current one.
    // Otherwise, setup and load a new Howl.
    if (!track.howl) {
      track.howl = new Howl({
        src: [track.file],
        html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
        volume: 0.5,
        // autoplay: true,
        // rate: 9.0,
        onplay: function () {
          // Display the duration.
          // duration.innerHTML = self.formatTime(Math.round(sound.duration()));
          // Start upating the progress of the track.
          // requestAnimationFrame(self.step.bind(self));
          // Start the wave animation if we have already loaded
          // wave.container.style.display = "block";
          // bar.style.display = "none";
          // pauseBtn.style.display = "block";
        },
        onload: function () {
          // Start the wave animation.
          // wave.container.style.display = "block";
          // bar.style.display = "none";
          // loading.style.display = "none";
          setCurrentState('playing')
        },
        onend: function () {
          // Stop the wave animation.
          // wave.container.style.display = "none";
          // bar.style.display = "block";
          skip('next')
        },
        onpause: function () {
          // Stop the wave animation.
          // wave.container.style.display = "none";
          // bar.style.display = "block";
        },
        onstop: function () {
          // Stop the wave animation.
          // wave.container.style.display = "none";
          // bar.style.display = "block";
        },
        onseek: function () {
          // Start upating the progress of the track.
          // requestAnimationFrame(self.step.bind(self));
        },
      })
    }
  }

  function showState() {
    let result
    switch (currentState) {
      case 'playing':
        result = <i className="fas fa-volume-mute"></i>

        break
      case 'paused':
        result = <i className="fas fa-volume-up"></i>

        break
      case 'loading':
        result = <i className="fas fa-spinner"></i>
        break

      default:
        break
    }

    return result
  }

  function clickPlay() {
    play(playing.current)
  }

  function clickPause() {
    pause()
  }

  // useEffect(() => {
  // // alert: need to check current state
  //   const flag = setTimeout(() => {
  //     play(0)
  //     setCurrentState('playing')
  //   }, 4000)

  //   return () => {
  //     clearTimeout(flag)
  //   }
  // }, [playing.current])

  function changeState() {
    // skip("next");
    if (currentState === 'playing') {
      clickPause()
    } else if (currentState === 'paused') {
      clickPlay()
    }
  }

  return (
    <div className="music-player" onClick={changeState}>
      <div className="state">{showState()}</div>
      <div className="title">{tracks[playing.current].title}</div>
    </div>
  )
}
