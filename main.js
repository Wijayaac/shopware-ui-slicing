function initVideoPlyr() {
  const videoElm = document.querySelector("#player");
  if (videoElm) {
    const videoPlayer = new Plyr("#player", {
      hideControls: true,
    });
  }
}

initVideoPlyr();
