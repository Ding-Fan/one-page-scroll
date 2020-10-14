import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

import Languor from "~/src/attachments/musics/22 Languor.mp3";
import YUKA from "~/src/attachments/musics/05 YUKA.mp3";
import Phantasmagoria from "~/src/attachments/musics/10 Phantasmagoria.mp3";

let tracks = [
  {
    title: "22 Languor",
    file: Languor,
    howl: null,
  },
  {
    title: "05 YUKA",
    file: YUKA,
    howl: null,
  },
  {
    title: "10 Phantasmagoria",
    file: Phantasmagoria,
    howl: null,
  },
];

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(0);
  const [currentState, setCurrentState] = useState(true);

  /**
   * Skip to the next or previous track.
   * @param  {String} direction 'next' or 'prev'.
   */
  function skip(direction) {
    console.log("playing", playing);
    let willPlay = 0;
    // Get the next track based on the direction of the track.
    if (direction === "prev") {
      if (playing <= 0) {
        willPlay = tracks.length - 1;
      } else {
        willPlay = playing - 1;
      }
    } else if (direction === "next") {
      if (playing >= tracks.length - 1) {
        willPlay = 0;
      } else {
        willPlay = playing + 1;
      }
    }

    console.log("willPlay: ", willPlay);

    skipTo(willPlay);
  }

  /**
   * Skip to a specific track based on its playlist index.
   */
  function skipTo(willPlay) {
    // Stop the current track.
    if (tracks[playing].howl) {
      tracks[playing].howl.stop();
    }

    // Reset progress.
    // progress.style.width = "0%";

    // Play the new track.
    play(willPlay);
  }

  function pause() {
    // Get the Howl we want to manipulate.
    let sound = tracks[playing].howl;

    // Puase the sound.
    sound.pause();

    // Show the play button.
    setCurrentState("paused");
    // playBtn.style.display = 'block';
    // pauseBtn.style.display = 'none';
  }

  /**
   * Play a song in the playlist.
   * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
   */
  function play(willPlay) {
    let sound;

    let track = tracks[willPlay];

    // If we already loaded this track, use the current one.
    // Otherwise, setup and load a new Howl.
    if (track.howl) {
      sound = track.howl;
    } else {
      sound = track.howl = new Howl({
        src: [track.file],
        html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
        volume: 0.5,
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
          setCurrentState("playing");
        },
        onend: function () {
          // Stop the wave animation.
          // wave.container.style.display = "none";
          // bar.style.display = "block";
          skip("next");
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
      });
    }

    // Begin playing the sound.
    sound.play();

    // Update the track display.
    // track.innerHTML = index + 1 + ". " + track.title;

    // Show the pause button.
    if (sound.state() === "loaded") {
      // playBtn.style.display = "none";
      // pauseBtn.style.display = "block";
      setCurrentState("playing");
    } else {
      // loading.style.display = "block";
      // playBtn.style.display = "none";
      // pauseBtn.style.display = "none";
      setCurrentState("loading");
    }

    // Keep track of the index we are currently playing.
    // self.index = index;
    setPlaying(willPlay);
  }

  function showState() {
    let result;
    switch (currentState) {
      case "playing":
        result = <i onClick={clickPause} className='fas fa-volume-mute'></i>;

        break;
      case "paused":
        result = <i onClick={clickPlay} className='fas fa-volume-up'></i>;

        break;
      case "loading":
        result = <i className='fas fa-spinner'></i>;
        break;

      default:
        break;
    }

    return result;
  }

  function clickPlay() {
    play(playing);
  }

  function clickPause() {
    pause();
  }

  useEffect(() => {
    // https://github.com/goldfire/howler.js#examples
    // let BGM = new Howl({
    //   src: [require("~/src/attachments/musics/05 YUKA.mp3")],
    //   volume: 0.5,
    // });

    // BGM.play();

    // play(0);
    setCurrentState("paused");

    return () => {};
  }, []);

  function changeState() {
    if (currentState === "playing") {
      clickPause();
    } else if (currentState === "paused") {
      clickPlay();
    }
  }

  return (
    <div className='music-player' onClick={changeState}>
      <div className='state'>{showState()}</div>
      <div className='title'>{tracks[playing].title}</div>
    </div>
  );
}
