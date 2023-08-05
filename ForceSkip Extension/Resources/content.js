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

if (window.location.pathname.startsWith("/watch")) {
    waitForPlayer((player) => {
        /* Get native skip button inside player */
        var nextButton = document.querySelector(".ytp-next-button");

        if (!nextButton) {
            return console.error("Could not hook into player.");
        }

        /* Create new player button */
        var forceSkipButton = document.createElement("button");
        forceSkipButton.classList.add("ytp-play-button", "ytp-button");
        forceSkipButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="100%" viewBox="0 0 36 36" fill="none">
                <path d="M22 18.3333L10 25.2615L10 11.4051L22 18.3333Z" fill="#FFFFFF"/>
                <path d="M30 18.3333L18 25.2615L18 11.4051L30 18.3333Z" fill="#FFFFFF"/>
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
