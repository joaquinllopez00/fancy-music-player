export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    audioRef.current.play();
  }
};
