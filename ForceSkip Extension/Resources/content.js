function waitForPlayer(callback) {
  /* Loop until player is found */
  const interval = setInterval(() => {
    const player = document.querySelector('.html5-main-video');
    if (player) {
      clearInterval(interval);
      callback(player);
    }
  }, 100);
}

function hookIntoPlayer() {
  if (window.location.pathname.startsWith("/watch")) {
    const buttonExists = document.getElementById('forceskip-btn');
    if (buttonExists) return;
    waitForPlayer((player) => {
      /* Get native skip button inside player */
      var nextButton = document.querySelector(".ytp-next-button");
  
      if (!nextButton) {
        return console.error("Could not hook into player.");
      }
  
      /* Create new player button */
      var forceSkipButton = document.createElement("button");
      forceSkipButton.classList.add("ytp-play-button", "ytp-button");
      forceSkipButton.id = "forceskip-btn";
      forceSkipButton.innerHTML = `
          <svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9293 13.4451C17.9293 12.4164 19.0429 11.7734 19.9338 12.2878L28.3162 17.1274C29.2071 17.6418 29.2071 18.9277 28.3162 19.442L19.9338 24.2816C19.0429 24.796 17.9293 24.1531 17.9293 23.1243L17.9293 13.4451Z" fill="white"/>
              <path d="M10.1542 13.4451C10.1542 12.4164 11.2678 11.7734 12.1587 12.2878L20.5412 17.1274C21.4321 17.6418 21.4321 18.9277 20.5412 19.442L12.1587 24.2816C11.2678 24.796 10.1542 24.1531 10.1542 23.1243L10.1542 13.4451Z" fill="white"/>
          </svg>
      `;

      /* Add click event listener */
      forceSkipButton.addEventListener("click", (_event) => {
        /* Skip to video end */
        var duration = player.duration;
        player.currentTime = duration - .01;
  
        /* Trigger skip ad button */
        setTimeout(() => {
          document.getElementsByClassName("ytp-ad-skip-button")[0].click();
        }, 100)
      });
  
      /* Insert force skip button */
      nextButton.parentNode.insertBefore(forceSkipButton, nextButton.nextSibling);
    });
  }
}

/* Hook on media play */
document.addEventListener('playing', hookIntoPlayer, true);

/* Hook on enable */
hookIntoPlayer();
