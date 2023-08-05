# ForceSkip

A **Safari Web Extension** that adds a button to the YouTube player to skip everything, including ads.

## Installation
A public release build is currently not available. Instead, you have to build the extension yourself.

## Build
1. Clone the repository
2. Open the project in Xcode
3. Go to `Product` > `Archive`
4. Click `Distribute App`
5. Select `Copy App` and choose a destination

**Done!** Since this is an unsigned application, you will have to *allow unsigned extensions* in Safari's `Develop` menu.

## Usage
Open the built application to install the extension. Before you can use the extension, you need to grant it access to `youtube.com`. You can do this either via the icon in the toolbar while visiting YouTube, or in the Safari settings.

The extension now adds a new button (⏩) in the YouTube player. This allows to skip the currently displayed content (including advertisements).

<img width="345" alt="image" src="https://github.com/ppauel/youtube-forceskip/assets/82803315/b833303b-f6cf-4769-90bd-2fdcbfbbda13">


## Requirements
- MacOS `13.0+` (Intel / Apple Silicon)
- Xcode `14.3+`
- Safari `16.6+`
